### English

# Task: Palindrom Checker

## Task Description
A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward (e.g., "Kabak", "Kayak", "Yapay"). The goal is to create a function that identifies these patterns.

**Requirements:**
- Write a function named isPalindrom.
- The function should take a string as a parameter.
- Return true if the word is a palindrome, and false otherwise.

*Note: The check should be case-insensitive (e.g., "Yapay" should be true).

**Examples:**
- isPalindrom("Yapay") -> true
- isPalindrom("Teğet") -> true
- isPalindrom("Kasım") -> false

---

## My Learning Journey & Reflection
This task introduced me to the concept of reversing data and comparing original vs. modified strings.

Case Sensitivity: I learned that for a successful comparison, I must first convert the entire string to a uniform case (lowercase) using .toLowerCase().

Logic: I explored how to "flip" a string by splitting it into an array, reversing it, and joining it back together, or by using a reverse loop to check characters one by one.

---

## Tech Stack
- JavaScript (ES6+)
- Node.js (CommonJS)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Palindrom Kontrolü

## Görev Tanımı
Palindrom, tersten okunuşu da aynı olan cümle, sözcük veya sayılara denir (Örn: "Kabak", "Kayak", "Yapay"). Bu görevde, verilen bir kelimenin palindrom olup olmadığını tespit eden bir uygulama geliştirilmesi istenmektedir.

**Beklenenler:**
- isPalindrom adında bir fonksiyon yazılması.
- Fonksiyonun parametre olarak bir string alması.
- Kelime palindrom ise true, değilse false dönmesi.

*Not: Büyük-küçük harf ayrımı gözetilmemelidir (Örn: "Yapay" palindrom sayılmalıdır).

**Örnekler:**
- isPalindrom("Yapay") -> true
- isPalindrom("Teğet") -> true
- isPalindrom("Kasım") -> false

---

## Gelişim Süreci ve Notlarım
Bu görev, metinleri ters çevirme ve orijinal veriyle karşılaştırma mantığını kavramamı sağladı.

Harf Duyarlılığı: Karşılaştırmanın sağlıklı olması için önce tüm harfleri .toLowerCase() ile küçük harfe çevirmem gerektiğini deneyimledim.

Mantık: Bir kelimeyi tersten okumak için dizi metodlarını (split, reverse, join) kullanmayı veya bir döngü yardımıyla karakterleri sondan başa doğru kontrol etmeyi öğrendim.

---

## Kullanılan Teknolojiler
- JavaScript (ES6+)
- Node.js (CommonJS)