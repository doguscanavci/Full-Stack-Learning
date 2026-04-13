### English

# Task 1: Successful Login Toastify Notifications

## Task Description
Drawing from your recent experience with user notification systems in corporate projects, you are enhancing your personal application by integrating React-Toastify alongside form handling. This will provide real-time, visual feedback to users during the authentication process instead of relying on silent page redirects.

**Requirements:**
- Success Notification: Upon successful login, display a success toast message: "Merhaba {userName}, tekrar hoş geldin.".
- Error Notification: If the login attempt fails due to incorrect credentials, trigger an error toast message: "Girdiğiniz bilgilerle bir kullanıcı bulamadık.".
- API Connection: Connect the toast triggers directly to the authentication response handlers inside the Login logic.
- Testing: Verify the success flow using the test credentials (email: erdem.guntay@wit.com.tr, password: 9fxIH0GXesEwH_I).

**Working files:** src/components/Login.jsx, src/App.jsx

---

## My Learning Journey & Reflection
Asynchronous Feedback Loops: I learned how to intercept asynchronous API resolution states (resolve/reject) to trigger immediate, user-friendly toast notifications.

Contextual UI Messages: Practiced extracting dynamic server data (like the user's name) to inject directly into global UI notification components.

---

## Tech Stack
- React.js
- React-Toastify
- Axios

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 1: Başarılı Giriş Toastify Mesajı Entegrasyonu

## Görev Tanımı
Şirket projelerinde deneyimlediğin modern bildirim sistemlerini kendi projene uyguluyorsun. Amacın, React-Toastify kütüphanesini entegre ederek kullanıcı giriş işlemlerinde (Authentication) sadece düz bir sayfa yönlendirmesi yapmak yerine, kullanıcıya anlık ve görsel bir geri bildirim sağlamak.

**Beklenenler:**
- Başarı Bildirimi: Kullanıcı başarıyla giriş yaptığında ekranda yeşil bir başarı toast mesajı göster: "Merhaba {userName}, tekrar hoş geldin.".
- Hata Bildirimi: Giriş bilgileri hatalı olduğunda kırmızı bir hata toast mesajı fırlat: "Girdiğiniz bilgilerle bir kullanıcı bulamadık.".
- API Bağlantısı: Toast tetikleyicilerini Login mantığı içerisindeki asenkron API yanıt (resolve/reject) süreçlerine bağla.
- Test Süreci: Başarılı giriş senaryosunu test etmek için erdem.guntay@wit.com.tr ve 9fxIH0GXesEwH_I bilgilerini kullan.

**Çalışma dosyaları:** src/components/Login.jsx, src/App.jsx

---

## Gelişim Süreci ve Notlarım
Asenkron Geri Bildirim Döngüleri: API'den dönen asenkron yanıt durumlarını yakalayarak, kullanıcı arayüzünde anlık ve dinamik toast bildirimleri tetiklemeyi öğrendim.

Bağlamsal UI Mesajları: Sunucudan dönen dinamik verileri (kullanıcı adı gibi) ayıklayıp global bildirim bileşenlerinin içerisine güvenli bir şekilde gömme pratiği yaptım.

---

## Kullanılan Teknolojiler
- React.js
- React-Toastify
- Axios