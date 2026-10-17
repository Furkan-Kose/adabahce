-- Ürünlere birim (gr/kg/adet) ve görünürlük (website/sunum) alanları ekler.
-- Supabase Dashboard > SQL Editor içinde bir kez çalıştırın.
-- Not: Miktar değeri mevcut weight_gram kolonunda tutulmaya devam eder.

alter table public.products
  add column if not exists unit text not null default 'gr'
    check (unit in ('gr', 'kg', 'adet')),
  add column if not exists show_on_website boolean not null default true,
  add column if not exists show_in_presentation boolean not null default true;

comment on column public.products.unit is 'Miktar birimi: gr, kg veya adet.';
comment on column public.products.show_on_website is 'Ürün sitede gösterilsin mi?';
comment on column public.products.show_in_presentation is 'Ürün sunum PDF''inde gösterilsin mi?';
