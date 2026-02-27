### English

# Task: Executive Summary Final Project (Volvo)
Task Description
As your final contribution to Volvo, you've been asked to create a high-level reporting tool. This tool filters inventory by brand and year, then generates a natural language summary including the unit count and total market value.

**Requirements:**
- Create a function named analyzeData.
- Input: An array of car objects, a brand string, and a year number.
- Output:
- If matches exist: "Model yılı {year} olan {brand} marka {count} arabanın toplam piyasa değeri {revenue} TL'dir."
- If no matches: "Model yılı {year} olan {brand} marka araba stoklarda bulunamamıştır!"
- Strict Rule: Use Template Literals (backticks) for strings and Higher-Order Functions (.filter, .reduce) for data processing.

---

## My Learning Journey & Reflection
This final project of the second week served as a "Executive Summary" of my own progress.

Template Literals: I replaced old-fashioned string concatenation (+) with backticks (`), making the output text much easier to manage and read.

Complex Logic Flow: I implemented a logical check using .length to handle cases where no data is found, preventing the code from returning empty summaries.

Advanced Data Aggregation: Combining .filter() to narrow down results and .reduce() to calculate total revenue in a clean, chained manner.

---

## Tech Stack
- JavaScript (ES6+)
- Template Literals
- Array Chaining (.filter().reduce())

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Executive Summary (Final Projesi)

## Görev Tanımı
Volvo'daki tüm projelerini tamamladın! Kapanış görevi olarak, stoktaki araçları marka ve yıla göre süzüp, adet ve toplam piyasa değerini anlamlı bir metin olarak raporlayan bir uygulama hazırlaman isteniyor.

**Beklenenler:**
- analyzeData adında bir fonksiyon yazılması.
- Girdi: Araç dizisi, marka adı (string) ve model yılı (sayı).
- Çıktı: - Araç varsa: "Model yılı {yil} olan {marka} marka {adet} arabanın toplam piyasa değeri {revenue} TL'dir."
- Araç yoksa: "Model yılı {yil} olan {marka} marka araba stoklarda bulunamamıştır!"
- Kural: String birleştirmeleri için Template Literals (backtick), veri işleme için ise Arrow Functions ve modern dizi metodlarının kullanılması.

---

## Gelişim Süreci ve Notlarım
İkinci haftanın bu final projesi, kendi gelişimimin de bir "Özeti" niteliğindeydi.

Template Literals: Eski usul artı (+) operatörü yerine backtick (`) kullanarak metinleri daha profesyonel ve hatasız bir şekilde kurguladım.

Hata Yönetimi: .length özelliğini kullanarak, aranan kriterlerde araç bulunamadığında kullanıcının boş bir ekran yerine anlamlı bir hata mesajı almasını sağladım.

Veri İşleme Zinciri: .filter() ve .reduce() metodlarını birbirine bağlayarak (chaining), veriyi önce süzüp sonra toplama işlemini tek bir akışta bitirmeyi öğrendim.

---

## Kullanılan Teknolojiler
- JavaScript (ES6+)
- Template Literals
- Array Chaining