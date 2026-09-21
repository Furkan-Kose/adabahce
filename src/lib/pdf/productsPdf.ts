import type { Content, TDocumentDefinitions } from "pdfmake/interfaces";
import type { Product } from "../types";

const EMERALD = "#047857";
const EMERALD_LIGHT = "#ecfdf5";
const BORDER = "#d1d5db";
const MUTED = "#6b7280";

const numberFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const dateFormatter = new Intl.DateTimeFormat("tr-TR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

const formatPrice = (value: number | null) =>
  value === null || value === undefined ? "-" : `${numberFormatter.format(value)} TL`;

const formatWeight = (value: number | null) =>
  value === null || value === undefined
    ? "-"
    : `${new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(value)} gr`;

/**
 * Ürün görselini küçültüp data URL'e çevirir.
 * Orijinal dosyalar 1MB'a kadar olabildiği için PDF'e küçültülmüş
 * JPEG kopyası gömülür. Hata olursa null döner ve PDF görselsiz üretilir.
 */
async function loadThumbnail(url: string, size = 120): Promise<string | null> {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) return null;

    const blob = await response.blob();
    const bitmap = await createImageBitmap(blob);

    const scale = Math.min(size / bitmap.width, size / bitmap.height, 1);
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));

    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();

    return canvas.toDataURL("image/jpeg", 0.75);
  } catch (error) {
    console.error("Görsel PDF'e eklenemedi:", url, error);
    return null;
  }
}

export function buildDocDefinition(
  products: Product[],
  thumbnails: (string | null)[],
  generatedAt: Date
): TDocumentDefinitions {
  const body: Content[][] = [
    [
      { text: "#", style: "tableHeader", alignment: "center" },
      { text: "Görsel", style: "tableHeader", alignment: "center" },
      { text: "Ürün Adı", style: "tableHeader" },
      { text: "Açıklama", style: "tableHeader" },
      { text: "Gramaj", style: "tableHeader", alignment: "right" },
      { text: "Fiyat", style: "tableHeader", alignment: "right" },
    ],
  ];

  products.forEach((product, index) => {
    const thumbnail = thumbnails[index];

    body.push([
      { text: String(index + 1), alignment: "center", color: MUTED, margin: [0, 12, 0, 0] },
      thumbnail
        ? { image: thumbnail, fit: [38, 38], alignment: "center", margin: [0, 4, 0, 4] }
        : { text: "-", alignment: "center", color: MUTED, margin: [0, 12, 0, 0] },
      { text: product.name, bold: true, margin: [0, 12, 0, 0] },
      {
        text: product.description || "-",
        color: product.description ? "#374151" : MUTED,
        fontSize: 9,
        margin: [0, 12, 0, 0],
      },
      { text: formatWeight(product.weight_gram), alignment: "right", margin: [0, 12, 0, 0] },
      {
        text: formatPrice(product.price),
        alignment: "right",
        bold: true,
        color: product.price === null ? MUTED : "#111827",
        margin: [0, 12, 0, 0],
      },
    ]);
  });

  const pricedCount = products.filter((p) => p.price !== null && p.price !== undefined).length;

  return {
    pageSize: "A4",
    pageMargins: [36, 78, 36, 48],
    defaultStyle: { font: "Roboto", fontSize: 10, color: "#111827" },

    header: (currentPage: number) => ({
      margin: [36, 24, 36, 0],
      columns: [
        [
          { text: "Ada Bahçe", style: "brand" },
          { text: "Ürün Listesi", style: "brandSub" },
        ],
        {
          text: currentPage === 1 ? dateFormatter.format(generatedAt) : "",
          alignment: "right",
          fontSize: 9,
          color: MUTED,
          margin: [0, 8, 0, 0],
        },
      ],
    }),

    footer: (currentPage: number, pageCount: number) => ({
      margin: [36, 12, 36, 0],
      columns: [
        { text: "Ada Bahçe - İç kullanım içindir", fontSize: 8, color: MUTED },
        {
          text: `Sayfa ${currentPage} / ${pageCount}`,
          alignment: "right",
          fontSize: 8,
          color: MUTED,
        },
      ],
    }),

    content: [
      {
        margin: [0, 0, 0, 14],
        columns: [
          { text: `Toplam ürün: ${products.length}`, fontSize: 9, color: MUTED },
          {
            text: `Fiyat bilgisi girilmiş: ${pricedCount}`,
            fontSize: 9,
            color: MUTED,
            alignment: "right",
          },
        ],
      },
      {
        table: {
          headerRows: 1,
          widths: [18, 46, "*", "*", 55, 65],
          body,
        },
        layout: {
          hLineWidth: (i: number, node: { table: { body: unknown[] } }) =>
            i === 0 || i === 1 || i === node.table.body.length ? 1 : 0.5,
          vLineWidth: () => 0,
          hLineColor: (i: number) => (i === 1 ? EMERALD : BORDER),
          fillColor: (rowIndex: number) => {
            if (rowIndex === 0) return EMERALD;
            return rowIndex % 2 === 0 ? EMERALD_LIGHT : null;
          },
          paddingTop: () => 6,
          paddingBottom: () => 6,
          paddingLeft: () => 6,
          paddingRight: () => 6,
        },
      },
    ],

    styles: {
      brand: { fontSize: 15, bold: true, color: EMERALD },
      brandSub: { fontSize: 9, color: MUTED },
      tableHeader: { bold: true, color: "#ffffff", fontSize: 10, margin: [0, 2, 0, 2] },
    },

    info: {
      title: "Ada Bahçe - Ürün Listesi",
      author: "Ada Bahçe Admin Paneli",
    },
  };
}

/**
 * Ürün listesini PDF olarak indirir.
 */
export async function downloadProductsPdf(products: Product[]): Promise<void> {
  const [pdfMakeModule, vfsModule] = await Promise.all([
    import("pdfmake/build/pdfmake"),
    import("pdfmake/build/vfs_fonts"),
  ]);

  const pdfMake = (pdfMakeModule as unknown as { default?: typeof pdfMakeModule }).default
    ?? pdfMakeModule;
  const vfs = (vfsModule as unknown as { default?: unknown }).default ?? vfsModule;

  pdfMake.addVirtualFileSystem(vfs as Parameters<typeof pdfMake.addVirtualFileSystem>[0]);

  const thumbnails = await Promise.all(
    products.map((product) => (product.image_url ? loadThumbnail(product.image_url) : null))
  );

  const generatedAt = new Date();
  const stamp = generatedAt.toISOString().slice(0, 10);

  pdfMake
    .createPdf(buildDocDefinition(products, thumbnails, generatedAt))
    .download(`adabahce-urunler-${stamp}.pdf`);
}
