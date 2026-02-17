### English

# Task: Password Security Update (Corporate Compliance)

## Task Description
As the company grows, security requirements are becoming more stringent. To mitigate risks, a new password policy has been implemented. We need a system to identify users who need to reset their passwords because they don't meet the new criteria.

**New Rules:**
- Must be at least 8 characters long.
- Must contain at least one uppercase and one lowercase letter.

**Expected:**
- Write a function named resetNeeded.
- The function should take an array of passwords as a parameter.
- It should return a list of passwords that do not comply with the new rules.

**Example:**
- resetNeeded(["Axy1", "aytemiz123", "eRDeM1234", "Hatice12"]) -> Output: ["Axy1", "aytemiz123"]

---

## My Learning Journey & Reflection
This task focused on string manipulation and array operations during my first week.

Logic: I used a creative approach to check for case sensitivity without using Regex. By comparing the password to its lowercase and uppercase versions (password === password.toLowerCase()), I was able to determine if a required case was missing.

Note: I practiced using .push() to collect the invalid results into a new array, reinforcing my understanding of array methods and loops.

---

## Tech Stack
- JavaScript (ES6+)
- Node.js (CommonJS)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Şifre Güvenliği Güncellemesi (Kurumsal Uyumluluk)

## Görev Tanımı
Şirketin büyümesiyle birlikte güvenlik risklerini azaltmak adına yeni şifre kuralları getirilmiştir. Bu kurallara uymayan kullanıcıları tespit edip şifrelerini sıfırlamalarını isteyecek bir sisteme ihtiyaç vardır.

**Yeni Kurallar:**
- En az 8 karakter uzunluğunda olmalı.
- En az 1 büyük harf ve 1 küçük harf içermeli.

**Beklenen:**
- Adı resetNeeded olan bir fonksiyon yazılması.
- Bu fonksiyonun şifrelerden oluşan bir array'i parametre olarak alması.
- Yeni kurallara uymayan şifreleri bir liste olarak dönmesi.

**Örnek Kullanım:**
- resetNeeded(["Axy1", "aytemiz123", "eRDeM1234", "Hatice12"]) -> Sonuç: ["Axy1", "aytemiz123"]

---

## Gelişim Süreci ve Notlarım
Bu görev, ilk haftamda string (metin) manipülasyonu ve array (dizi) işlemlerine odaklanmamı sağladı.

Mantık: Henüz Regex (Düzenli İfadeler) öğrenmediğim bir aşamada, büyük/küçük harf kontrolünü yapmak için yaratıcı bir yöntem kullandım. Şifreyi kendisinin tamamen küçük veya tamamen büyük haliyle karşılaştırarak (password === password.toLowerCase()), eksik olan kriteri tespit ettim.

Not: Geçersiz sonuçları yeni bir diziye toplamak için .push() metodunu kullanarak dizi metodları ve döngüler üzerindeki hakimiyetimi artırdım.

---

## Kullanılan Teknolojiler
- JavaScript (ES6+)
- Node.js (CommonJS)