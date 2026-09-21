-- Ürünlere fiyat ve gramaj alanları ekler.
-- Supabase Dashboard > SQL Editor içinde bir kez çalıştırın.

alter table public.products
  add column if not exists price numeric(10, 2),
  add column if not exists weight_gram numeric(10, 2);

comment on column public.products.price is 'Ürün fiyatı (TL). Sadece admin panelde gösterilir.';
comment on column public.products.weight_gram is 'Ürün gramajı (gram). Sadece admin panelde gösterilir.';

-- ---------------------------------------------------------------
-- OPSİYONEL (önerilir): fiyat/gramajı anon (tarayıcı) anahtarından da gizle.
-- Not: Admin paneli de anon anahtarı ile okuduğu için bunu uygularsanız
-- admin panelde fiyat/gramaj görünmez. Ancak service_role anahtarı ile
-- okuyan ayrı bir sunucu istemcisi kurarsanız güvenle kullanabilirsiniz.
--
-- revoke select (price, weight_gram) on public.products from anon;
