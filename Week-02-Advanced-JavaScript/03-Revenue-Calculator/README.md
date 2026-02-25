### English

# Task 03: Seller-Based Revenue Calculation (Volvo)

## Task Description
The company acquires vehicles from different sources: Individual sellers ("Sahibinden") or Dealers ("Galeri"). Assuming all vehicles in the current inventory are sold, the finance department needs to calculate the total potential revenue based on the source of purchase.

**Requirements:**
- Create a function named calculateRevenue.
- Input: An array of car objects and the sellerType string.
- Output: The total sum of selling_price for cars matching the given seller type.
- Strict Rule: Follow Volvo's clean code standards by utilizing .filter() and .reduce() higher-order functions.

---

## My Learning Journey & Reflection
In this task, I combined two powerful array methods to perform complex data analysis.

Method Chaining: I practiced filtering data first and then reducing it to a single value. This pipeline approach makes the code highly readable and maintainable.

The Power of Reduce: I learned how the .reduce() method works with an accumulator to sum up property values within an array of objects.

Precision: Following specific business logic (filtering by seller type before calculation) helped me understand how to handle targeted financial reporting in code.

---

## Tech Stack
- JavaScript (ES6+)
- Array Methods (.filter, .reduce)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 03: Satıcı Türüne Göre Gelir Analizi

## Görev Tanımı
Şirket, stoktaki araçları "Sahibinden" veya "Galeri" aracılığıyla temin etmektedir. Finans departmanı, tüm araçların satıldığı varsayımıyla, araçların kimden alındığına göre elde edilecek toplam satış gelirini (selling_price) hesaplamak istemektedir.

**Beklenenler:**
- calculateRevenue adında bir fonksiyon yazılması.
- Girdi: Araç nesnelerini içeren bir dizi ve satıcı türü (sellerType).
- Çıktı: Belirtilen satıcı türüne uyan araçların toplam satış geliri.
- Kural: Volvo temiz kod standartlarına uygun olarak .filter() ve .reduce() metodlarının kullanılması.

---

## Gelişim Süreci ve Notlarım
Bu görevde, iki güçlü dizi metodunu birleştirerek karmaşık bir veri analizi gerçekleştirdim.

Metod Zincirleme (Chaining): Önce veriyi filtreleyip ardından tek bir sonuca indirgeme (reduce) sürecini deneyimledim. Bu yaklaşım, kodun bir "boru hattı" (pipeline) gibi akıcı olmasını sağlıyor.

İndirgeme Mantığı: .reduce() metodunun bir biriktirici (accumulator) yardımıyla nesne dizileri içindeki sayısal değerleri nasıl topladığını kavradım.

Hassas Veri İşleme: Belirli bir kriteri (satıcı türü) baz alarak finansal raporlama yapma pratiği kazandım.

---

## Kullanılan Teknolojiler
- JavaScript (ES6+)
- Array Methods (.filter, .reduce)