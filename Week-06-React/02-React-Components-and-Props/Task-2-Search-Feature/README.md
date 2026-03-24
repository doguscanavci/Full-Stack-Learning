### English

# Task 2: Activating the Search Functionality

## Task Description
The UI for the AramaCubugu (Search Bar) has been prepared by the team, and your goal is to make it functional. You will implement a live search feature by managing a search state in App.jsx and passing it down to the search bar component.

**Requirements:**
- Change Handler (App.jsx): Write a function that captures the event, accesses the input value, updates the aramaKriteri state, and filters sahteVeri into the gonderiler state.
- Implementation (AramaCubugu.jsx): Receive the search state and handler as props and correctly bind them to the input field.
- Controlled Component: Use the value attribute for aramaKriteri and the onChange event for the handler function to ensure React controls the input.

**Working files:** src/App.jsx, src/components/AramaCubugu/AramaCubugu.jsx

---


## My Learning Journey & Reflection
Controlled Inputs: I learned how to synchronize a form input with React state, ensuring the UI remains the "single source of truth" for user data.
Dynamic Filtering: I practiced using the .filter() method to create a subset of data in real-time, providing an interactive user experience.

---


## Tech Stack
- React.js (State Management)
- JavaScript (Array.filter)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 2: Arama Özelliğinin Uygulanması

## Görev Tanımı
Bir ekip tarafından hazırlanan AramaCubugu bileşenine hayat verme zamanı. App.jsx içindeki arama kriteri state'ini kullanarak ve bir "change handler" fonksiyonu yazarak arama özelliğini aktif hale getireceğiz.

**Beklenenler:**
- Change Handler (App.jsx): Event üzerinden input değerine erişen, aramaKriteri state'ini güncelleyen ve sahteVeri'yi süzüp gonderiler state'ine aktaran bir fonksiyon yaz.
- Uygulama (AramaCubugu.jsx): Arama state'ini ve fonksiyonunu prop olarak karşıla; input alanına doğru şekilde bağla.
- Kontrollü Bileşen: Input alanına value olarak aramaKriteri'ni ve onChange olayına yazdığın fonksiyonu ekleyerek React'in inputu kontrol etmesini sağla.

**Çalışma dosyaları:** src/App.jsx, src/components/AramaCubugu/AramaCubugu.jsx

---

## Gelişim Süreci ve Notlarım
Kontrollü Inputlar: Bir form girişini React state'i ile nasıl senkronize edeceğimi ve arayüzün kullanıcı verisi için "tek güvenilir kaynak" olmasını nasıl sağlayacağımı öğrendim.
Dinamik Filtreleme: Kullanıcı yazdıkça verileri gerçek zamanlı süzmek için .filter() metodunu kullanarak interaktif bir kullanıcı deneyimi oluşturma pratiği yaptım.

---

## Kullanılan Teknolojiler
- React.js (State Yönetimi)
- JavaScript (Array.filter)