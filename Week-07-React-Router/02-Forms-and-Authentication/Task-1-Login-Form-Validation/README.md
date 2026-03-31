### English

# Task 1: Login Form Implementation

## Task Description
To prevent bots from accessing site content and consuming server resources, you are implementing a secure Login feature. You will build a controlled form in Login.jsx that authenticates users against a mock API before granting access to the main site.

**Requirements:**
- State Management: Define a state to hold the form data (email and password).
- HandleChange: Create a function to update the state as the user types, using the spread operator to preserve existing data.
- HandleSubmit: Implement a submission handler that prevents the default page refresh.
- API Authentication: Use axios to send a GET request to the mock API endpoint.
- Navigation Logic: If the credentials match a user in the API response, navigate to the /main page; otherwise, redirect to /error.
- Testing: Use the provided test credentials (email: erdem.guntay@wit.com.tr, password: 9fxIH0GXesEwH_I).

**Working files:** src/components/Login.jsx

---

## My Learning Journey & Reflection
Controlled Components: I mastered the concept of "Single Source of Truth" by binding form inputs directly to the React state.

Programmatic Navigation: I practiced using the useHistory (or useNavigate) hook to move users through different routes based on logic.

---

## Tech Stack
- React.js
- Axios
- React Router

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 1: Login Formu Uygulaması

## Görev Tanımı
Siteni bot saldırılarından korumak ve sunucu kaynaklarını optimize etmek amacıyla bir Giriş (Login) özelliği ekliyorsun. Login.jsx bileşeni içinde, kullanıcıyı bir API üzerinden doğrulayan ve başarılı giriş sonrası siteye yönlendiren kontrollü bir form yapısı kuracaksın.

**Beklenenler:**
- State Yönetimi: Form bilgilerini (email ve şifre) tutmak için bir state tanımla.
- HandleChange: Form elemanlarındaki değişiklikleri takip eden ve state'i spread operatörü ile güncelleyen bir fonksiyon yaz.
- HandleSubmit: Form gönderildiğinde sayfanın yenilenmesini engelleyen mantığı kur.
- API Doğrulama: axios kullanarak belirtilen mock API adresine GET isteği at.
- Yönlendirme Mantığı: Gelen listede kullanıcı bilgileri eşleşiyorsa kullanıcıyı /main sayfasına, eşleşmiyorsa /error sayfasına yönlendir.
- Test Verileri: Test işlemleri için erdem.guntay@wit.com.tr ve 9fxIH0GXesEwH_I bilgilerini kullan.

**Çalışma dosyaları:** src/components/Login.jsx

---

## Gelişim Süreci ve Notlarım
Kontrollü Bileşenler: Form inputlarını doğrudan React state'ine bağlayarak verinin kontrolünü tamamen React'e devretmeyi öğrendim.

Programatik Navigasyon: useHistory (veya useNavigate) kullanarak, işlem sonucuna göre kullanıcıyı farklı sayfalara kod üzerinden nasıl yönlendireceğimi deneyimledim.

---

## Kullanılan Teknolojiler
- React.js
- Axios
- React Router 