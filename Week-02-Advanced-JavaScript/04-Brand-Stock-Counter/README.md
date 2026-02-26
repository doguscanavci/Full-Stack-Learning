### English

# Task 04: Brand Stock Analysis by Model Year (Volvo)

## Task Description
To liquidate inventory through targeted advertising, the marketing department needs to know the distribution of specific brands across different model years. The goal is to generate a report showing exactly how many units of a given brand exist for each production year.

**Requirements:**
- Create a function named countStock.
- Input: An array of car objects and a brand string (to be matched within the name property).
- Output: An object where the keys are the model years and the values are the counts of cars for that year.
- Strict Rule: Follow Volvo's clean code standards using .filter() and .forEach() with arrow functions.

---

## My Learning Journey & Reflection
This project focused on transforming a raw data list into a structured summary object.

String Matching: I utilized the .includes() method to filter cars based on partial name matches, allowing the function to be flexible with brand names.

Dynamic Object Keys: I learned how to use an object as a frequency map, dynamically checking for existing keys and incrementing values.

Data Structuring: This task improved my ability to reorganize array data into key-value pairs for faster data lookup and reporting.

---

## Tech Stack
- JavaScript (ES6+)
- Array Methods (.filter, .forEach)
- Dynamic Object Mapping

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 04: Marka ve Model Yılına Göre Stok Analizi

## Görev Tanımı
Pazarlama departmanı, stokları eritmek amacıyla reklamları model yılına göre özelleştirmek istemektedir. Bu doğrultuda, belirli bir markaya ait araçların hangi üretim yılından kaçar adet olduğunun hesaplanması gerekmektedir.

**Beklenenler:**
- countStock adında bir fonksiyon yazılması.
- Girdi: Araç nesnelerini içeren bir dizi ve arama yapılacak marka adı (brand).
- Çıktı: Anahtarların (key) model yılı, değerlerin (value) ise o yıla ait araç sayısı olduğu bir nesne (object).
- Kural: Volvo temiz kod prensipleri gereği klasik döngüler yerine .filter() ve .forEach() metodlarının kullanılması.

---

## Gelişim Süreci ve Notlarım
Bu proje, ham bir veri listesini yapılandırılmış bir özet nesnesine dönüştürme mantığına odaklanmıştır.

Metin Eşleştirme: .includes() metodunu kullanarak markaya göre filtreleme yaptım; bu sayede fonksiyonun marka isimlerini esnek bir şekilde yakalamasını sağladım.

Dinamik Nesne Yönetimi: Bir nesneyi "frekans haritası" olarak kullanmayı, mevcut anahtarları kontrol edip sayıları dinamik olarak artırmayı öğrendim.

Veri Yapılandırma: Dizideki verileri, raporlama ve hızlı veri okuma için anahtar-değer (key-value) çiftlerine dönüştürme yeteneğimi geliştirdim.

---

## Kullanılan Teknolojiler
- JavaScript (ES6+)
- Array Methods (.filter, .forEach)
- Dinamik Nesne Eşleme (Object Mapping)