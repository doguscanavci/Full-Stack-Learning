### English

# Task: Day Project - Contact Form Test Suite Implementation

## Task Description
Following the new manager's directive to enforce strict automated testing across all legacy and current projects, you are responsible for covering the Contact Form component. You need to transform the template structures into robust, executable test cases while ensuring clean, non-repetitive test code.

**Requirements:**
- Test Blueprint Completion: Implement and define all 9 placeholder test cases pre-arranged within the test file.
- Adherence to Guidelines: Pay strict attention to specific comments and notes embedded inside individual test shells to meet precise assertion goals.
- Code Refactoring (DRY Principle): Identify repetitive setup actions (such as rendering the component or querying common elements) and abstract them using the appropriate test lifecycle hooks (e.g., beforeEach).
- Validation Coverage: Ensure tests cover input mutations, form validation triggers, error message renderings, and successful form submissions.

**Working files:** src/components/IletisimFormu.test.jsx

---

## My Learning Journey & Reflection
Test-Driven Confidence: I learned how to structure comprehensive unit tests using React Testing Library to simulate real user interactions reliably.

Lifecycle Hooks Optimization: Practiced utilizing hooks like beforeEach to adhere to the DRY (Don't Repeat Yourself) principle, maintaining an isolated yet efficient test environment.

---

## Tech Stack
- React.js
- React Testing Library
- Jest / Vitest

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Gün Projesi - İletişim Formu Testleri

## Görev Tanımı
Kurum içi projelere test kültürünü getirmeyi hedefleyen yeni yöneticinin direktifi doğrultusunda, paylaşılan görevlerden sana düşen İletişim Formu bileşeninin test kapsamını tamamlıyorsun. Şablon halinde bırakılmış test planlarını çalışan dinamik assertion'lara dönüştürürken temiz ve kendini tekrar etmeyen bir test yapısı kurman bekleniyor.

**Beklenenler:**
- Test Planlarının Tanımlanması: Dosya içerisinde yer tutucu (placeholder) olarak planlanmış 9 ayrı test senaryosunun tamamını işlevsel hale getir.
- Özel Notların Takibi: Bazı testlerin içerisine bırakılmış özel yönlendirmeleri ve kuralları dikkate alarak test mantığını kurgula.
- Tekrarı Önleme (DRY Prensibi): Testleri yazarken sürekli tekrar ettiğin ortak satırları (bileşenin render edilmesi gibi) tespit et ve bu mantığı test yapısına uygun bir yaşam döngüsü hook'u (beforeEach gibi) içine taşıyarak kod tekrarını engelle.
- Validasyon Kontrolleri: Input değişimlerini, form doğrulama mekanizmalarını, hata mesajlarının ekrana basılma durumlarını ve formun başarıyla gönderilmesini test senaryolarıyla doğrula.

**Working files:** src/components/IletisimFormu.test.jsx

---

## Gelişim Süreci ve Notlarım
Test Odaklı Güven: React Testing Library kullanarak gerçek kullanıcı etkileşimlerini simüle etmeyi ve arayüz bileşenlerini güvenle doğrulamayı öğrendim.

Yaşam Döngüsü Hook Optimizasyonu: beforeEach gibi yapıları kullanarak kod kalitesini artırmayı, temiz ve okunabilir test blokları yazmayı deneyimledim.

---

## Kullanılan Teknolojiler
- React.js
- React Testing Library
- Jest / Vitest