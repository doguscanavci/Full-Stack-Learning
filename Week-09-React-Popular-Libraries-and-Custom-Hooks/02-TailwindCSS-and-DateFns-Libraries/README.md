### English

# Task 1: Day Project - Task Management Tailwind CSS Migration

## Task Description
As part of the company's sprint goal to modernize legacy codebases and replace old styling methods, you are tasked with migrating the Task Management application's styling to Tailwind CSS (v3) and integrating date-fns for smart date localization.

**Requirements:**
- Tailwind CSS Setup: Complete steps 2 and 3 of the Tailwind installation guide for Vite. Ensure you configure tailwind.config.js properly.
- Custom Theme Colors: Define custom colors under the theme object in tailwind.config.js for .urgent and .normal classes using the exact hex codes from the old task.css. Name them urgent and normal.
- Component Migration (Task.jsx): Convert all CSS rules from task.css into Tailwind utility classes. Use arbitrary values (e.g., bg-[#ccc]) if standard Tailwind classes do not match the exact design.
- Cleanup: Remove the import lines for task.css and reset.css once the migration is complete and no longer needed.
- Date-fns Localization: Replace the raw deadline data with dynamic, relative strings like "1 gün sonra" or "4 gün kaldı" using formatDistanceToNow and differenceInDays with Turkish localization configuration.
- Conditional Urgent Styling: If the deadline is less than 3 days away, dynamically change the background color of the deadline text to your custom urgent color. If it is 3 or more days away, use the normal color.

**Working files:** src/components/Task.jsx, tailwind.config.js, src/index.css

---

## My Learning Journey & Reflection
Utility-First Styling: I learned how to completely deconstruct traditional stylesheets into atomic Tailwind classes, improving maintainability.

Tailwind Configuration: Practiced extending the default Tailwind theme to include project-specific custom color variables.

Time Formatting: Mastered processing JavaScript dates into localized, human-readable relative text strings using date-fns.

---

## Tech Stack
- React.js
- Tailwind CSS (v3)
- date-fns (with TR locale)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 1: Gün Projesi - Task Yönetimi Tailwind CSS Geçişi

## Görev Tanımı
Şirketin eski kod yapılarını modernize etme ve daha performanslı kütüphanelere geçiş yapma sprint hedefi doğrultusunda, Task Yönetimi uygulamasını Tailwind CSS (v3) yapısına geçiriyor ve date-fns kütüphanesi ile akıllı tarih yerelleştirmesi entegre ediyorsun.

**Beklenenler:**
- Tailwind CSS Kurulumu: Vite için Tailwind dokümantasyonundaki 2. ve 3. adımları tamamla. tailwind.config.js içeriğini doğru şekilde yapılandır.
- Custom Tema Renkleri: Eski task.css dosyasındaki .urgent ve .normal renk kodlarını, tailwind.config.js içindeki theme alanı altında urgent ve normal isimleriyle custom (özel) renk olarak tanımla.
- Bileşen Dönüşümü (Task.jsx): task.css içindeki tüm class'ları Tailwind class'larına dönüştür. Tam karşılamayan özel durumlar için arbitrary (örn: bg-[#ccc]) değerler kullan.
- Temizlik: Dönüşüm bittikten sonra ihtiyaç kalmayan task.css ve reset.css import satırlarını projeden tamamen kaldır.
- Date-fns Yerelleştirme: Doğrudan veriden gelen ham deadline değerlerini, date-fns içindeki formatDistanceToNow ve differenceInDays metotlarını Türkçe lokalizasyon ayarıyla kullanarak "1 gün sonra", "4 gün kaldı" gibi insan diline uygun metinlere dönüştür.
- Koşullu Urgent Renk Yönetimi: Eğer deadline'a 3 günden az kaldıysa, deadline metninin arka planını dinamik olarak custom tanımladığın urgent rengi yap; 3 günden fazla varsa normal rengini ata.

**Çalışma dosyaları:** src/components/Task.jsx, tailwind.config.js, src/index.css

---

## Gelişim Süreci ve Notlarım
Utility-First CSS Mantığı: Geleneksel CSS dosyalarını atomik Tailwind sınıflarına dönüştürerek stil yönetimini nasıl daha sürdürülebilir kılacağımı öğrendim.

Tailwind Temasını Genişletme: Projenin kurumsal renk ihtiyaçlarına göre Tailwind'in varsayılan temasını custom renk değişkenleriyle genişletmeyi deneyimledim.

Zaman ve Tarih Manipülasyonu: date-fns kullanarak ham tarih verilerini yerelleştirilmiş ve kullanıcı dostu dinamik metinlere dönüştürme becerisi kazandım.

---

## Kullanılan Teknolojiler
- React.js
- Tailwind CSS (v3)
- date-fns (TR lokalizasyonu ile)