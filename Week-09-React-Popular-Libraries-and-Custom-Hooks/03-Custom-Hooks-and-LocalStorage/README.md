### English

# Task: Login Page UX Enhancement

## Task Description
To balance security and user experience (UX), you need to optimize the login flow. While keeping users permanently logged in poses security risks, forcing them to re-type everything is tedious. You will implement a smart login form that remembers the user's email safely via localStorage and dynamically shifts focus to the correct field.

**Requirements:**
- Data Persistence: Upon a successful login attempt, securely store only the user's email address in localStorage under the key 'email'. Do not store the password.
- Smart Initialization: Modify the form's initial state logic. If an email exists in localStorage, pre-populate the email input field with this stored value instead of starting with an empty string.
- Dynamic Auto-Focus: Utilize the HTML autoFocus attribute conditionally:
- If no email is stored in localStorage (first-time visitor), set autoFocus to true on the email input.
- If an email is already stored and pre-filled, set autoFocus to true on the password input so the user can immediately type their password without clicking.
- Context: Apply this user experience pattern which mimics behavior found in professional multi-channel e-commerce platforms.

**Working files:** src/components-1/Login.jsx

---

## My Learning Journey & Reflection
Browser Storage API: I practiced utilizing localStorage to persist non-sensitive user data across browser sessions.

Focus Management: I learned how to manipulate accessibility and focus attributes dynamically based on persistent data states to streamline user workflows.

---

## Tech Stack
- React.js (useState, useEffect)
- Web Storage API (localStorage)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Login Sayfasında UX Geliştirmesi

## Görev Tanımı
Güvenlik ve kullanıcı deneyimi (UX) arasındaki hassas dengeyi korumak adına giriş akışını optimize ediyorsun. Kullanıcıları sürekli içeride tutmak güvenlik açığı yaratırken, her seferinde tüm bilgileri yazmalarını istemek deneyimi kötüleştirir. Bu doğrultuda, kullanıcının e-posta adresini localStorage ile güvenli bir şekilde hatırlayan ve odağı (focus) dinamik olarak doğru alana kaydıran akıllı bir form yapısı kuruyorsun.

**Beklenenler:**
- Veri Kalıcılığı: Başarılı bir giriş işleminin ardından, kullanıcının sadece e-posta adresini localStorage içinde 'email' key'i ile sakla. Şifreyi kesinlikle kaydetme.
- Akıllı Başlangıç (Initial State): Formun başlangıç state mantığını güncelle. Eğer localStorage içinde kayıtlı bir e-posta varsa, email alanını boş string yerine bu kayıtlı veriyle başlat.
- Dinamik Otomatik Odaklanma (autoFocus): HTML autoFocus özniteliğini form elemanlarına koşullu olarak uygula:
- Eğer localStorage boşsa (kullanıcı ilk kez geliyorsa), sayfa açıldığında odak doğrudan email input alanında olsun.
- Eğer e-posta zaten kayıtlı ve alan dolu gelmişse, odak doğrudan password input alanına geçsin; böylece kullanıcı fareyle tıklamadan direkt şifresini yazabilsin.
- Bağlam: Bu UX modelini, daha önce geliştirdiğin ya da yönetiminde bulunduğun profesyonel e-ticaret çözümlerindeki kullanıcı alışkanlıklarına uygun şekilde entegre et.

**Çalışma dosyaları:** src/components-1/Login.jsx

---

## Gelişim Süreci ve Notlarım
Tarayıcı Depolama Yönetimi: Hassas olmayan kullanıcı verilerini oturumlar arasında korumak için localStorage API'sini etkili bir şekilde kullanmayı deneyimledim.

Odak Noktası Yönetimi: Kullanıcı etkileşim adımlarını azaltmak ve form doldurma hızını artırmak için autoFocus niteliğini kalıcı veri durumuna göre dinamik yönetmeyi öğrendim.

---

## Kullanılan Teknolojiler
- React.js (useState, useEffect)
- Web Storage API (localStorage)
