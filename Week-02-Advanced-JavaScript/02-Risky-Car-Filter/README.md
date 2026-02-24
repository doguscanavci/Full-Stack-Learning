### English

# Task 02: Risky Inventory Analysis (Volvo)

## Task Description
Market conditions are changing, making some vehicles harder to sell. The sales department at Volvo needs an automated way to identify "high-risk" vehicles based on specific inventory data.

**Risk Criteria:**
- Mileage: km_driven is 250,000 or higher.
- Age: Vehicle age is 20 years or older.
- Ownership: The owner property is "Dördüncü veya Daha Fazla Sahibi" (Fourth or More Owner).

**Requirements:**
- Create a function named getRiskyCarList.
- Input: An array of car objects.
- Output: A filtered array containing only the risky cars.
- Strict Rule: Use the .filter() method with Arrow Functions to maintain clean code standards.

---

## My Learning Journey & Reflection
This project focused on data selection and logical operators in Functional Programming.

Data Filtering: I learned how to use the .filter() method to extract specific subsets of data without modifying the original array.

Logical Operators: I practiced combining multiple conditions using the OR (||) operator, allowing any of the risk factors to trigger a positive match.

Modern Syntax: Using arrow functions made the filtering logic much more concise and readable compared to traditional loops.

---

## Tech Stack
- JavaScript (ES6+)
- Higher-Order Functions (.filter)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 02: Satılamama Riski Bulunan Araçlar Listesi

## Görev Tanımı
Piyasa koşullarındaki değişimler nedeniyle bazı araçların satışı zorlaşmaktadır. Volvo satış ekibi için, stoktaki araçlardan "riskli" olanları belirli kriterlere göre ayıklayan bir uygulama geliştirilmesi istenmektedir.

**Risk Kriterleri:**
- Kilometre: km_driven 250.000 ve üzeri.
- Yaş: Aracın yaşı 20 ve üzeri.
- Sahiplik: owner özelliğinin "Dördüncü veya Daha Fazla Sahibi" olması.

**Beklenenler:**
- getRiskyCarList adında bir fonksiyon yazılması.
- Girdi: Araç nesnelerini içeren bir dizi.
- Çıktı: Sadece riskli araçları içeren filtrelenmiş bir dizi.
- Kural: Temiz kod prensipleri gereği klasik döngüler yerine .filter() metodu ve Arrow Function yapısı kullanılmalıdır.

---

## Gelişim Süreci ve Notlarım
Bu proje, veri seçimi ve mantıksal operatörlerin Fonksiyonel Programlama çatısı altında kullanımına odaklanmıştır.

Veri Filtreleme: Orijinal diziyi bozmadan, belirli şartlara uyan verileri .filter() ile nasıl ayıklayabileceğimi öğrendim.

Mantıksal Operatörler: VEYA (||) operatörünü kullanarak, risk faktörlerinden herhangi biri gerçekleştiğinde aracın listeye dahil edilmesini sağladım.

Modern Yazım: Arrow function kullanarak filtreleme mantığını geleneksel döngülere göre çok daha sade ve anlaşılır bir şekilde kurguladım.

---

## Kullanılan Teknolojiler
- JavaScript (ES6+)
- Higher-Order Functions (.filter)