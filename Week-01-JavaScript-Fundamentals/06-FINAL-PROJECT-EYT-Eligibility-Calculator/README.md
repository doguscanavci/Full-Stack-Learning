### English

# Task: EYT (Early Retirement) Eligibility Calculator

## Task Description
The HR department requires an application to process employee data based on the temporary "Early Retirement" (EYT) regulation. The goal is to identify eligible employees, update the active staff list, and calculate the remaining monthly payroll cost.

**EYT Eligibility Criteria:**
- Employment start date must be 1999 or earlier.
- Minimum premium days: 5000.
- Insurance years: At least 20 years for Women, 25 years for Men.

**Requirements:**
- Create a function named eytDetaylari that accepts an array of employee records.
- Input Format: [EmployeeName, Gender, StartYear, InsuranceYears, PremiumDays, CurrentSalary]
- Output Format: A 3-element array: [eligibleList, currentStaffList, totalRemainingSalary]

---

## My Learning Journey & Reflection
This capstone project for the first week was a comprehensive exercise in multi-layered logic and data filtering.

Conditional Complexity: I implemented specific logic to differentiate eligibility based on gender-specific insurance years while maintaining universal checks for start dates and premium days.

Data Management: I practiced managing three different outputs (two filtered name arrays and one mathematical sum) within a single function execution.

Array Manipulation: Navigating through nested arrays and extracting specific indices helped me master data traversal in JavaScript.

---

## Tech Stack
- JavaScript (ES6+)
- Node.js (CommonJS)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: EYT (Emeklilikte Yaşa Takılanlar) Hesaplama

## Görev Tanımı
İnsan Kaynakları departmanı, yeni yürürlüğe giren EYT düzenlemesine göre çalışan verilerini analiz edecek bir uygulama talep etmektedir. Bu uygulama ile emekli olabilecekler belirlenmeli, güncel çalışan listesi oluşturulmalı ve şirketin kalan toplam maaş yükü hesaplanmalıdır.

**EYT Şartları:**
- İşe giriş tarihi 1999 ve öncesi.
- Prim gün sayısı: 5000 ve üzeri.
- Sigortalılık süresi: Kadınlarda 20 yıl, Erkeklerde 25 yıl.

**Beklenenler:**
- eytDetaylari adında, çalışan dizisini parametre alan bir fonksiyon yazılması.
- Girdi Formatı: [EmployeeName, Gender, StartYear, InsuranceYears, PremiumDays, CurrentSalary]
- Çıktı Formatı: 3 elemanlı bir dizi: [eligibleList, currentStaffList, totalRemainingSalary]

---

## Gelişim Süreci ve Notlarım
Birinci haftanın bu final projesi, çok katmanlı mantık yürütme ve veri filtreleme üzerine kapsamlı bir çalışma oldu.

Koşul Karmaşıklığı: İşe giriş yılı ve prim günü gibi genel şartların yanına, cinsiyete göre değişen sigortalılık süresi şartını entegre ederek detaylı bir algoritma kurguladım.

Veri Yönetimi: Tek bir fonksiyon içinde üç farklı sonucu (iki isim dizisi ve bir sayısal toplam) aynı anda yönetme ve doğru formatta dönme pratiği yaptım.

Dizi Manipülasyonu: İç içe geçmiş diziler arasında gezinerek (indexing) doğru veriye ulaşma ve bu verileri işleme yeteneğimi geliştirdim.

---

## Kullanılan Teknolojiler
- JavaScript (ES6+)
- Node.js (CommonJS)