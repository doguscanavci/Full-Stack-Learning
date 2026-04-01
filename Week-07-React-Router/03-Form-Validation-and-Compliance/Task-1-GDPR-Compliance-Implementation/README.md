### English

# Task 1: GDPR/KVKK Compliance Integration

## Task Description
Due to legal regulations such as GDPR and KVKK, you must implement a mandatory consent mechanism before allowing users to sign in. This ensures that personal data usage is legally authorized by the user.

**Requirements:**
- Consent Checkbox: Add a checkbox with the label "I agree to terms of service and privacy policy".
- Identification: The checkbox must have both name and id attributes set to terms.
- Accessibility: Ensure the label uses htmlFor="terms" for proper association.
- Conditional Logic: The "Sign In" button must remain disabled until the checkbox is checked.
- Value Handling: Update the handleChange function to capture the checked property specifically for the checkbox.
- Testing: Use credentials erdem.guntay@wit.com.tr and 9fxIH0GXesEwH_I for verification.

**Working files:** src/components/Login.jsx

---

## My Learning Journey & Reflection
Input Specificity: I learned how to handle Boolean values in forms by targeting the checked attribute instead of value for checkboxes.

Form Constraints: I practiced using state to dynamically enable or disable UI elements based on user interaction.

---

## Tech Stack
- React.js (useState)
- JavaScript (ES6+)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 1: GDPR/KVKK Uyumluluğu Entegrasyonu

## Görev Tanımı
GDPR ve KVKK gibi yasal düzenlemeler gereği, kullanıcıların giriş yapmadan önce veri kullanımına onay vermesini sağlayacak bir mekanizma kuruyorsun. Bu adım, uygulamanın yasal standartlara uygun hale gelmesi için kritiktir.

**Beklenenler:**
- Onay Checkbox'ı: "I agree to terms of service and privacy policy" metnine sahip bir checkbox ekle.
- Kimliklendirme: Checkbox'ın name ve id değerlerini terms olarak ayarla.
- Erişilebilirlik: Etiket (label) kısmında htmlFor="terms" kullanarak doğru ilişkilendirmeyi sağla.
- Koşullu Mantık: Kullanıcı checkbox'ı işaretlemeden "Sign In" butonunu aktif hale getirme.
- Değer Yönetimi: handleChange fonksiyonunu, checkbox için değeri checked özelliğinden alacak şekilde güncelle.
- Test Verileri: Doğrulama için erdem.guntay@wit.com.tr ve 9fxIH0GXesEwH_I bilgilerini kullan.

**Çalışma dosyaları:** src/components/Login.jsx

---

## Gelişim Süreci ve Notlarım
Input Özelleştirme: Checkbox'lar için value yerine checked özelliğini hedefleyerek formlarda Boolean (true/false) değerleri yönetmeyi öğrendim.

Form Kısıtlamaları: Kullanıcı etkileşimine göre UI elemanlarını (buton aktifliği gibi) dinamik olarak nasıl kontrol edeceğimi deneyimledim.

---

## Kullanılan Teknolojiler
- React.js (useState)
- JavaScript (ES6+)