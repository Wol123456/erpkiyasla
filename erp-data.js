// erp-data.js — Tüm ERP ürün verileri

const VENDORS = [
  {
    name: "Logo Yazılım", color: "#0D2B5E",
    products: [
      {
        id: "logo-tiger", label: "Logo Tiger 3", short: "LT3", vendor: "Logo",
        olcek: "Orta-Büyük", tip: "On-premise / Hibrit", bulut: false,
        puan: { kullanim: 7.8, fiyat: 6.5, entegrasyon: 9.3, mobil: 7.2, destek: 8.5 },
        skor: 8.7, stars: "★★★★½",
        moduller: ["Muhasebe & Finans", "Stok & Depo", "Satış & Sipariş", "Satın Alma", "Üretim Planlama", "İnsan Kaynakları", "CRM", "Proje Takibi", "e-Fatura / e-Defter", "App-in-App Ekosistemi", "Çok Dilli Destek", "Çok Şirket Desteği"],
        nomod: ["Native Bulut (SaaS)", "e-Ticaret Entegrasyonu"],
        pros: ["Türkiye'nin en yaygın ERP'si — 170K+ firma", "Güçlü entegrasyon ekosistemi", "App-in-App genişletilebilir yapı", "Çok şirket / çok dil desteği"],
        cons: ["Yüksek lisans maliyeti", "Öğrenme eğrisi dik", "Native bulut desteği sınırlı"]
      },
      {
        id: "logo-go", label: "Logo GO", short: "GO", vendor: "Logo",
        olcek: "KOBİ", tip: "On-premise / Web", bulut: true,
        puan: { kullanim: 8.5, fiyat: 8.0, entegrasyon: 7.5, mobil: 7.8, destek: 8.0 },
        skor: 8.0, stars: "★★★★",
        moduller: ["Muhasebe & Finans", "Stok Yönetimi", "Satış & Sipariş", "Satın Alma", "e-Fatura / e-Arşiv", "Cari Hesap", "Çek / Senet", "Raporlama"],
        nomod: ["Üretim (Gelişmiş)", "İnsan Kaynakları", "CRM (Gelişmiş)", "Proje Takibi"],
        pros: ["KOBİ'ler için uygun fiyat", "Web tabanlı erişim imkanı", "Hızlı implementasyon", "Logo ekosistemi desteği"],
        cons: ["Üretim modülü sınırlı", "Gelişmiş CRM yok", "Büyük ölçek için yetersiz"]
      },
      {
        id: "logo-netsis", label: "Logo Netsis", short: "NS", vendor: "Logo",
        olcek: "Orta-Büyük", tip: "On-premise / Web", bulut: false,
        puan: { kullanim: 7.5, fiyat: 6.8, entegrasyon: 8.8, mobil: 7.5, destek: 8.2 },
        skor: 8.2, stars: "★★★★",
        moduller: ["Muhasebe & Finans", "Stok & Depo", "Satış", "Satın Alma", "Üretim (MRP)", "İnsan Kaynakları", "Dış Ticaret", "Maliyet Muhasebesi", "e-Fatura", "Çok Şirket"],
        nomod: ["Native Bulut", "e-Ticaret"],
        pros: ["Orta-büyük ölçek için güçlü", "Dış ticaret modülü gelişmiş", "MRP desteği", "Logo mevzuat uyumu"],
        cons: ["Yüksek maliyet", "Arayüz eski hissettiriyor", "Bulut desteği kısıtlı"]
      },
      {
        id: "logo-jplatform", label: "Logo j-Platform", short: "JP", vendor: "Logo",
        olcek: "Orta-Büyük", tip: "Web Tabanlı", bulut: true,
        puan: { kullanim: 8.0, fiyat: 7.0, entegrasyon: 9.0, mobil: 8.5, destek: 8.3 },
        skor: 8.4, stars: "★★★★",
        moduller: ["Muhasebe & Finans", "Stok & Depo", "Satış", "Satın Alma", "Üretim", "İnsan Kaynakları", "Bayilik Yönetimi", "e-Dönüşüm", "Web Tabanlı Erişim", "Çok Şirket", "Mobil"],
        nomod: ["Sektörel Özel Modüller"],
        pros: ["Tam web tabanlı mimari", "Bayilik yapısına özel", "Her yerden erişim", "e-Dönüşüm tam entegre"],
        cons: ["Yüksek kurulum maliyeti", "Karmaşık yapı", "Küçük firmalar için fazla"]
      },
      {
        id: "logo-wings", label: "Logo Wings ERP", short: "LW", vendor: "Logo",
        olcek: "Orta-Büyük", tip: "Web Tabanlı", bulut: true,
        puan: { kullanim: 8.2, fiyat: 7.2, entegrasyon: 8.8, mobil: 8.8, destek: 8.5 },
        skor: 8.5, stars: "★★★★½",
        moduller: ["Muhasebe & Finans", "Stok & Depo", "Satış & CRM", "Satın Alma", "Üretim", "İnsan Kaynakları", "Web Tabanlı", "Mobil Erişim", "e-Dönüşüm", "Çok Şirket", "Tedarik Zinciri"],
        nomod: ["Açık Kaynak Kod"],
        pros: ["Modern web tabanlı arayüz", "Mobil uyumlu", "Geniş modüler yapı", "Düşük kurulum maliyeti"],
        cons: ["İnternet bağımlılığı", "Yoğun özelleştirme zaman alır", "Fiyat rakiplerden yüksek"]
      }
    ]
  },
  {
    name: "AKINSOFT", color: "#0F6E56",
    products: [
      {
        id: "wolvox", label: "Wolvox ERP", short: "WV", vendor: "AKINSOFT",
        olcek: "KOBİ", tip: "On-premise", bulut: false,
        puan: { kullanim: 8.5, fiyat: 8.2, entegrasyon: 7.4, mobil: 6.8, destek: 8.0 },
        skor: 7.9, stars: "★★★★",
        moduller: ["Muhasebe & Finans", "Stok & Depo", "Satış & Sipariş", "Satın Alma", "Üretim (Temel)", "İnsan Kaynakları", "Barkod / POS", "e-Fatura / e-Arşiv", "Seri / Lot Takibi", "Fiyat Listesi Yönetimi"],
        nomod: ["CRM (Gelişmiş)", "Proje Takibi", "Native Bulut", "e-Ticaret"],
        pros: ["Yerinde kurulum + eğitim dahil", "Barkod/POS entegrasyonu güçlü", "Uygun fiyatlı lisans", "Seri/Lot takibi detaylı"],
        cons: ["Bulut/mobil desteği zayıf", "CRM modülü yetersiz", "Proje yönetimi yok"]
      },
      {
        id: "octoplus", label: "OctoPlus ERP", short: "OP", vendor: "AKINSOFT",
        olcek: "Küçük-KOBİ", tip: "On-premise", bulut: false,
        puan: { kullanim: 9.0, fiyat: 9.0, entegrasyon: 6.5, mobil: 6.0, destek: 7.5 },
        skor: 7.2, stars: "★★★½",
        moduller: ["Ön Muhasebe", "Stok Yönetimi", "Satış & Faturalama", "e-Fatura / e-Arşiv", "Kasa / Banka", "Cari Hesap"],
        nomod: ["Üretim", "İnsan Kaynakları", "CRM", "Proje Yönetimi", "Native Bulut", "Tedarik Zinciri"],
        pros: ["Çok kolay kullanım", "Uygun fiyat", "Küçük işletmeler için ideal", "Hızlı kurulum"],
        cons: ["Sınırlı modül", "Büyüme için yetersiz", "Mobil desteği yok", "Entegrasyon kısıtlı"]
      }
    ]
  },
  {
    name: "Mikro Yazılım", color: "#185FA5",
    products: [
      {
        id: "mikro-fly", label: "Mikro Fly", short: "MFly", vendor: "Mikro",
        olcek: "Küçük", tip: "On-premise / Bulut", bulut: true,
        puan: { kullanim: 8.8, fiyat: 9.0, entegrasyon: 6.5, mobil: 7.0, destek: 7.5 },
        skor: 7.2, stars: "★★★½",
        moduller: ["Temel Muhasebe", "Stok Yönetimi", "Satış", "e-Fatura / e-Arşiv", "Kasa / Banka", "Cari Hesap"],
        nomod: ["Üretim", "İnsan Kaynakları", "CRM", "Proje Yönetimi", "Tedarik Zinciri", "Çok Şirket"],
        pros: ["Çok kolay kullanım", "Esnaf/küçük işletme için ideal", "Uygun fiyat", "Hızlı başlangıç"],
        cons: ["Çok sınırlı modül", "Büyüme desteği yetersiz", "Entegrasyon zayıf"]
      },
      {
        id: "mikro-jump", label: "Mikro Jump", short: "MJump", vendor: "Mikro",
        olcek: "KOBİ", tip: "On-premise / Bulut", bulut: true,
        puan: { kullanim: 8.5, fiyat: 8.5, entegrasyon: 7.2, mobil: 7.5, destek: 7.8 },
        skor: 7.8, stars: "★★★★",
        moduller: ["Muhasebe & Finans", "Stok & Ürün Yönetimi", "Satış & Sipariş", "Satın Alma", "Bütçe Kontrolü", "e-Fatura / e-Defter", "Parti / Lot / Seri", "Hizmet Sözleşmeleri"],
        nomod: ["Üretim (Gelişmiş)", "İnsan Kaynakları", "CRM", "Proje Yönetimi", "e-Ticaret"],
        pros: ["KOBİ için dengeli çözüm", "Bütçe kontrolü güçlü", "Bulut seçeneği mevcut", "Türk mevzuatı uyumu"],
        cons: ["Üretim modülü zayıf", "CRM entegre değil", "Arayüz modernleşebilir"]
      },
      {
        id: "mikro-run", label: "Mikro Run (ERP)", short: "MRun", vendor: "Mikro",
        olcek: "Orta-Büyük", tip: "On-premise / Bulut", bulut: true,
        puan: { kullanim: 7.8, fiyat: 7.5, entegrasyon: 8.0, mobil: 7.8, destek: 8.0 },
        skor: 7.8, stars: "★★★★",
        moduller: ["Muhasebe & Finans", "Stok & Depo", "Satış & Sipariş", "Satın Alma", "Üretim (MRP II)", "İnsan Kaynakları", "Bütçe Yönetimi", "e-Dönüşüm", "Çok Şirket", "Gelişmiş Raporlama"],
        nomod: ["CRM (Gelişmiş)", "e-Ticaret", "Sektörel Modüller"],
        pros: ["35+ yıllık yerli deneyim", "MRP II üretim planlaması", "Ölçeklenebilir yapı", "Türk mevzuatı tam uyum"],
        cons: ["e-Ticaret entegrasyonu yok", "Gelişmiş CRM eksik", "Arayüz güncelleme gerekiyor"]
      }
    ]
  },
  {
    name: "Nebim", color: "#2D6A8F",
    products: [
      {
        id: "nebim-v3", label: "Nebim V3 ERP", short: "NV3", vendor: "Nebim",
        olcek: "Orta-Büyük", tip: "On-premise / Web", bulut: false,
        puan: { kullanim: 8.0, fiyat: 7.0, entegrasyon: 8.5, mobil: 7.8, destek: 8.5 },
        skor: 8.3, stars: "★★★★",
        moduller: ["Muhasebe & Finans", "Stok (Renk/Beden/Boyut)", "Satış & POS", "Satın Alma", "Perakende Yönetimi", "Mağaza Yönetimi", "CRM (Perakende)", "Çok Kanal Satış", "Çok Ülke Desteği", "Konsinye Yönetimi", "İnsan Kaynakları"],
        nomod: ["Üretim (Kapsamlı)", "Native Bulut", "Restoran Modülü"],
        pros: ["Perakende/mağazacılıkta Türkiye lideri", "Renk/beden/boyut takibi", "Çok kanallı satış desteği", "Çok ülke operasyonu"],
        cons: ["Üretim modülü sınırlı", "Native bulut yok", "Diğer sektörlerde sınırlı"]
      }
    ]
  },
  {
    name: "Uyumsoft", color: "#5B2D8E",
    products: [
      {
        id: "uyum-erp", label: "UyumERP", short: "UE", vendor: "Uyumsoft",
        olcek: "Orta", tip: "On-premise / Hibrit", bulut: false,
        puan: { kullanim: 7.8, fiyat: 7.5, entegrasyon: 8.0, mobil: 7.5, destek: 7.8 },
        skor: 7.7, stars: "★★★★",
        moduller: ["Muhasebe & Finans", "Stok & Depo", "Satış", "Satın Alma", "Üretim", "İnsan Kaynakları", "e-Dönüşüm", "Raporlama"],
        nomod: ["Native Bulut", "CRM (Gelişmiş)", "e-Ticaret", "Mobil Uygulama"],
        pros: ["e-Dönüşüm konusunda güçlü", "Uyumsoft mevzuat güncellemeleri", "Orta ölçek için uygun", "Fiyat/kalite dengesi"],
        cons: ["Bulut desteği sınırlı", "CRM yetersiz", "Mobil uygulama yok"]
      },
      {
        id: "liox", label: "ERP LioX", short: "LX", vendor: "Uyumsoft",
        olcek: "Orta", tip: "Bulut (SaaS)", bulut: true,
        puan: { kullanim: 8.5, fiyat: 8.0, entegrasyon: 8.5, mobil: 9.0, destek: 8.0 },
        skor: 8.3, stars: "★★★★",
        moduller: ["Muhasebe & Finans", "Stok & Depo", "Satış & Sipariş", "Satın Alma", "Üretim (Lot Takibi)", "İnsan Kaynakları", "API Entegrasyonu", "Mobil ERP", "İş Zekası (BI)", "Native Bulut", "Rol Bazlı Yetki Yönetimi"],
        nomod: ["Perakende / POS", "Sektörel Özel Modüller"],
        pros: ["Tam bulut SaaS mimarisi", "Güçlü API desteği", "İş zekası entegre", "Mobil uyumlu", "Ölçeklenebilir yapı"],
        cons: ["İnternet bağımlılığı", "Perakende POS desteği zayıf", "Yeni ürün — referans az"]
      }
    ]
  },
  {
    name: "DİA Yazılım", color: "#0F9B8E",
    products: [
      {
        id: "dia", label: "DİA Bulut ERP", short: "DİA", vendor: "DİA",
        olcek: "Tüm Ölçekler", tip: "Bulut (SaaS)", bulut: true,
        puan: { kullanim: 8.8, fiyat: 8.0, entegrasyon: 8.2, mobil: 9.5, destek: 7.8 },
        skor: 8.2, stars: "★★★★",
        moduller: ["Muhasebe & Finans", "Stok (Seri/Lot)", "Satış & Sipariş", "Satın Alma", "Üretim (Reçete/Emir)", "İnsan Kaynakları", "e-Ticaret Entegrasyonu", "Mobil Plasiyer", "Restoran Modülü", "Otel Modülü", "Süreç Yönetimi", "Excel Entegrasyonu", "Native Bulut"],
        nomod: ["Büyük Ölçek Üretim (Kapsamlı)"],
        pros: ["Tam bulut — kurulum gerektirmez", "Sektörel modüller (restoran, otel)", "Mobil uyumlu, her yerden erişim", "e-Ticaret entegrasyonu", "Hızlı implementasyon"],
        cons: ["İnternet bağımlılığı", "Büyük ölçekli üretim sınırlı", "Veri taşıma zaman alabilir"]
      }
    ]
  },
  {
    name: "IAS (caniasERP)", color: "#C0392B",
    products: [
      {
        id: "canias", label: "caniasERP", short: "CA", vendor: "IAS",
        olcek: "Orta-Büyük", tip: "On-premise / Bulut / Hibrit", bulut: true,
        puan: { kullanim: 6.5, fiyat: 6.5, entegrasyon: 9.5, mobil: 7.8, destek: 8.5 },
        skor: 8.5, stars: "★★★★½",
        moduller: ["Muhasebe & Finans", "Stok & Depo", "Satış & CRM", "Satın Alma", "Üretim (Gelişmiş)", "İnsan Kaynakları", "TROIA Geliştirme Platformu", "Açık Kaynak Kod", "IoT Entegrasyonu", "Yapay Zeka Desteği", "Çok Dilli / Çok Mevzuat", "Savunma / Havacılık Modülü", "On-premise / Bulut / Hibrit"],
        nomod: ["Kolay Öğrenme Eğrisi"],
        pros: ["TROIA açık kaynak platformu", "40+ sektörde referans", "30+ ülkede kullanım", "IoT ve AI entegrasyonu", "Kaynak kod seviyesinde özelleştirme"],
        cons: ["Öğrenme eğrisi çok dik", "Karmaşık konfigürasyon", "Yüksek uygulama maliyeti", "Küçük firmalar için fazla"]
      }
    ]
  },
  {
    name: "Workcube", color: "#E67E22",
    products: [
      {
        id: "workcube", label: "Workcube ERP+CRM+HR", short: "WC", vendor: "Workcube",
        olcek: "Orta", tip: "Bulut (SaaS)", bulut: true,
        puan: { kullanim: 8.3, fiyat: 7.8, entegrasyon: 8.8, mobil: 9.2, destek: 8.2 },
        skor: 8.4, stars: "★★★★",
        moduller: ["Muhasebe & Finans", "Stok & Depo (Lokasyon)", "Satış & Sipariş", "Online İhale / Satın Alma", "Üretim (MRP/MES)", "CRM (Gelişmiş)", "İnsan Kaynakları", "Proje Yönetimi", "Mobil", "Native Bulut", "e-Ticaret", "Fason Üretim", "Seri / Lot Takibi", "AutoCAD Entegrasyonu"],
        nomod: ["Perakende / POS (Gelişmiş)"],
        pros: ["ERP+CRM+HR tek platformda", "Tam bulut, kullanıcı sınırı yok", "Üretim + Fason desteği", "AutoCAD/TopSolid entegrasyonu", "Güçlü CRM modülü"],
        cons: ["Perakende/POS desteği sınırlı", "Fiyat orta-üst segment", "Yoğun özelleştirme zaman alır"]
      }
    ]
  },
  {
    name: "Abas ERP Türkiye", color: "#1ABC9C",
    products: [
      {
        id: "abas", label: "abas ERP", short: "AB", vendor: "Abas",
        olcek: "Orta-Büyük", tip: "On-premise / Bulut", bulut: true,
        puan: { kullanim: 7.2, fiyat: 6.8, entegrasyon: 8.5, mobil: 8.0, destek: 8.0 },
        skor: 8.0, stars: "★★★★",
        moduller: ["Muhasebe & Finans", "Stok & Depo", "Satış & CRM", "Satın Alma", "Üretim (Odaklı)", "İnsan Kaynakları", "Kalite Yönetimi", "Proje Takibi", "Mobil", "Uluslararası Mevzuat", "İş Zekası / BI"],
        nomod: ["Türkçe Yerel Destek (Sınırlı)", "Düşük Lisans Maliyeti"],
        pros: ["Alman mühendislik kalitesi", "Üretim odaklı güçlü yapı", "Uluslararası mevzuat uyumu", "Kalite yönetimi entegre"],
        cons: ["Türkçe yerel destek sınırlı", "Yüksek lisans maliyeti", "Yerli rakiplere göre pahalı", "Öğrenme eğrisi dik"]
      }
    ]
  },
  {
    name: "ERP12", color: "#8E44AD",
    products: [
      {
        id: "erp12", label: "ERP12", short: "E12", vendor: "ERP12",
        olcek: "KOBİ-Orta", tip: "Bulut (SaaS)", bulut: true,
        puan: { kullanim: 8.5, fiyat: 8.5, entegrasyon: 7.8, mobil: 8.8, destek: 7.5 },
        skor: 7.9, stars: "★★★★",
        moduller: ["Muhasebe & Finans", "Stok & Depo", "Satış & Sipariş", "Satın Alma", "CRM", "İnsan Kaynakları", "e-Fatura / e-Arşiv", "Mobil", "Native Bulut", "Gelişmiş Raporlama"],
        nomod: ["Üretim (Kapsamlı)", "Sektörel Modüller", "Büyük Ölçek Desteği"],
        pros: ["Modern bulut arayüzü", "Hızlı implementasyon", "Uygun fiyat", "Mobil öncelikli tasarım"],
        cons: ["Üretim modülü sınırlı", "Büyük ölçek için yetersiz", "Referans sayısı az"]
      }
    ]
  },
  {
    name: "Vega Yazılım", color: "#16A085",
    products: [
      {
        id: "vega", label: "Vega ERP", short: "VE", vendor: "Vega",
        olcek: "KOBİ-Orta", tip: "On-premise / Bulut", bulut: true,
        puan: { kullanim: 8.0, fiyat: 8.0, entegrasyon: 7.5, mobil: 7.8, destek: 7.8 },
        skor: 7.8, stars: "★★★½",
        moduller: ["Muhasebe & Finans", "Stok & Depo", "Satış & Sipariş", "Satın Alma", "Üretim (Temel)", "İnsan Kaynakları", "e-Fatura / e-Arşiv", "Cari Hesap Takibi", "Bulut Seçeneği"],
        nomod: ["CRM (Gelişmiş)", "IoT / AI Desteği", "Açık Kaynak", "Sektörel Modüller"],
        pros: ["KOBİ odaklı dengeli çözüm", "Türk mevzuatı uyumlu", "Uygun fiyatlandırma", "Bulut seçeneği mevcut"],
        cons: ["Gelişmiş CRM yok", "Referans sayısı az", "Büyük ölçek için sınırlı"]
      }
    ]
  }
];
