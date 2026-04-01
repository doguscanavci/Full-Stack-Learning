### English

# Task 2: Day Project - Form Validation and Error Handling

## Task Description
To prevent unnecessary backend requests and reduce costs, you are tasked with implementing robust client-side validation. The application must identify incorrect inputs in real-time and provide clear feedback to the user before allowing form submission.

**Requirements:**
- Email Validation: Ensure the input follows a valid email format.
- Password Constraints: The "Sign In" process should only be available if the password is at least 4 characters long.
- Consent Enforcement: Prevent signing in unless the "Terms" checkbox is checked (handled within handleSubmit).
- Dynamic Error Messages: Use Reactstrap error components to display specific messages from the provided errorMessages constant.
- Conditional Rendering: Error message components should only be rendered when an actual error exists.
- Global Validation State: Define an isValid state to manage the "Sign In" button's disabled/enabled status.
- Reactstrap Integration: Pay close attention to the invalid prop on Reactstrap Input components for visual feedback.

**Working files:** src/components/Login.jsx

---

## My Learning Journey & Reflection
Proactive Error Handling: I learned how to save server resources by validating data before it leaves the browser.

UI Feedback Loops: I practiced creating a reactive UI where button states and error visibility change instantly based on user input.

---

## Tech Stack
- React.js 
- Reactstrap 
- JavaScript 

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 2: Gün Projesi - Form Validasyonu ve Hata Yönetimi

## Görev Tanımı
Hatalı kullanıcı girişleri nedeniyle backend sunucusuna giden gereksiz istekleri engellemek ve maliyetleri düşürmek amacıyla kapsamlı bir istemci taraflı (client-side) validasyon yapısı kuruyorsun. Uygulama, kullanıcı verilerini anlık olarak kontrol etmeli ve form gönderilmeden önce hataları bildirmelidir.

**Beklenenler:**
- Email Validasyonu: Girişin gerçek bir e-posta formatında olduğunu kontrol et.
- Şifre Kısıtlamaları: Şifre en az 4 karakter olduğunda "Sign In" işlemine izin ver.
- Onay Kontrolü: "Terms" (Şartlar) kabul edilmeden formun gönderilmesini engelle (mantığı handleSubmit içinde kur).
- Dinamik Hata Mesajları: Sağlanan errorMessages sabitini kullanarak Reactstrap hata bileşenleri ile kullanıcıya geri bildirim ver.
- Koşullu Render: Hata olmayan durumlarda hata mesajı bileşenlerini ekranda gösterme.
- Global Validasyon State'i: "Sign In" butonunun aktif/pasif durumunu yönetmek için bir isValid state'i tanımla.
- Reactstrap Entegrasyonu: Görsel geri bildirim için Reactstrap Input bileşenindeki invalid prop'unu doğru şekilde kullan.

**Çalışma dosyaları:** src/components/Login.jsx

---

## Gelişim Süreci ve Notlarım
Proaktif Hata Yönetimi: Verileri tarayıcıdan çıkmadan kontrol ederek sunucu kaynaklarını nasıl verimli kullanacağımı öğrendim.

UI Geri Bildirim Döngüleri: Kullanıcı etkileşimine göre buton durumlarının ve hata mesajlarının anlık değiştiği reaktif bir arayüz oluşturma pratiği yaptım.

---

## Kullanılan Teknolojiler
- React.js 
- Reactstrap 
- JavaScript 