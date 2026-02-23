### English

# Task 01: Currency Converter (Volvo Exchange Project)

## Task Description
As part of the final handover at Volvo, you are tasked with updating the car data analysis tool. Due to new government regulations, all car prices listed in USD must be converted to Turkish Lira (TRY) for listing purposes.

**Requirements:**
- Create a function named convertCurrency.
- Input: An array of car objects and the current USD exchange rate (number).
- Transformation: Update the selling_price to its TRY equivalent using the exchange rate.
- Strict Rule: Use the .map() method with Arrow Functions instead of traditional for loops to comply with Volvo's clean code standards.

**Example:**
- Input: selling_price: 250000, Rate: 28.45 -> Output: selling_price: 7112500

---

## My Learning Journey & Reflection
This project marks my transition from basic loops to Functional Programming concepts in JavaScript.

Immutable Data: Using .map() allowed me to create a new transformed version of the array without mutating the original data structure unnecessarily.

ES6+ Standards: I practiced using Arrow Functions and Object Spreading (...) to keep the code concise and modern.

Industry Standards: Following Volvo's "Clean Code" rules helped me understand why senior developers prefer higher-order functions over basic loops for readability.

---

## Tech Stack
- JavaScript (ES6+)
- Higher-Order Functions (.map)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 01: Kur Çevirici (Volvo Takas Projesi)

## Görev Tanımı
Volvo'daki son günlerinizde, takas yoluyla gelen araç verilerini analiz eden uygulamayı tamamlamanız isteniyor. Yeni düzenlemeler gereği, dolar bazlı listelenen fiyatların güncel kur üzerinden TL'ye çevrilmesi gerekmektedir.

**Beklenenler:**
- convertCurrency adında bir fonksiyon yazılması.
- Girdi: Araç nesnelerini (object) içeren bir dizi (array) ve güncel dolar kuru (sayı).
- Dönüşüm: selling_price değerini kur ile çarparak TL karşılığıyla güncellemek.
- Kural: Volvo temiz kod standartları gereği klasik döngüler yerine .map() metodu ve Arrow Function yapısı kullanılmalıdır.

---

## Gelişim Süreci ve Notlarım
Bu proje, temel döngülerden Fonksiyonel Programlama kavramlarına geçişimi temsil ediyor.

Veri Dönüşümü: .map() metodunu kullanarak dizideki her bir elemanı nasıl yeni bir forma sokabileceğimi öğrendim.

Modern Yazım: Arrow function yapısı ile daha az satırda daha işlevsel kod yazma pratiği yaptım.

Kurumsal Standartlar: Volvo'nun "Temiz Kod" kurallarını uygulayarak, büyük projelerde okunabilirliğin neden hayati önem taşıdığını kavradım.

---

## Kullanılan Teknolojiler
- JavaScript (ES6+)
- Higher-Order Functions (.map)