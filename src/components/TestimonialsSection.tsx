"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ayşe Y.",
    role: "Ev Hanımı",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Ada Bahçe’nin ürünleri gerçekten çok taze ve lezzetli. Artık sebzelerimi buradan alıyorum ve farkı hissediyorum."
  },
  {
    name: "Mehmet K.",
    role: "Restoran Sahibi",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Taze ve kaliteli ürünler bulmak zor. Ada Bahçe sayesinde menümde her zaman en iyi malzemeler var."
  },
  {
    name: "Elif S.",
    role: "Öğrenci",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Hızlı teslimat ve çok taze ürünler. Ada Bahçe’yi kesinlikle tavsiye ederim!"
  },
  {
    name: "Ahmet T.",
    role: "Şef",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Organik ve taze ürünler her zaman Ada Bahçe'den geliyor. Mutfağımda fark yaratıyor."
  }
];

const TestimonialsSection = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2; // duplicate içerik
    let lastTimestamp: number

    const step = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      const speed = 0.1; // px/ms, kayma hızı
      scrollRef.current = (scrollRef.current + speed * delta) % totalWidth;
      container.style.transform = `translateX(-${scrollRef.current}px)`;
      lastTimestamp = timestamp;
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <section className="py-20 bg-linear-to-br from-emerald-50  to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ada Bahçe&apos;nin taze ve doğal ürünleri hakkında müşterilerimizin görüşleri.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative">
          <div className="flex space-x-8" ref={containerRef}>
            {testimonials.concat(testimonials).map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg mb-2 shrink-0 w-80"
              >
                <p className="text-gray-600 leading-relaxed mb-4">&quot;{item.text}&quot;</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full mr-4"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default TestimonialsSection