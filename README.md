# ERPKıyasla - erpkiyasla.com

Türkiye'nin ERP Karşılaştırma Rehberi

## Dosya Yapısı

```
erpkiyasla/
├── index.html        → Ana sayfa
├── karsilastir.html  → İnteraktif karşılaştırma sayfası
├── style.css         → Tüm sayfalara ait CSS
├── erp-data.js       → 20+ ERP ürün verileri
├── compare.js        → Karşılaştırma motoru
└── README.md
```

## GitHub Pages ile Yayına Alma

1. github.com'da yeni bir repository oluşturun (örn: `erpkiyasla`)
2. Bu klasördeki tüm dosyaları repository'e yükleyin
3. Repository → Settings → Pages → Source: "Deploy from a branch" → main → / (root) → Save
4. Birkaç dakika içinde `https://KULLANICIADI.github.io/erpkiyasla` adresinde yayında

## Cloudflare ile Domain Bağlama (erpkiyasla.com)

1. cloudflare.com'da hesap açın
2. Domaininizi ekleyin (erpkiyasla.com)
3. DNS ayarlarında CNAME ekleyin:
   - Name: `@` veya `www`
   - Target: `KULLANICIADI.github.io`
4. SSL otomatik aktif olur ✅

## Yeni ERP Eklemek

`erp-data.js` dosyasında `VENDORS` dizisine yeni bir obje ekleyin.

## İletişim

erpkiyasla.com
