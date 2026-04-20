### English

# Task: Day Project - Simple Calculator useReducer Prototype

## Task Description
Following the success of last week's GridGame, you are tasked with completing a semi-finished prototype of a Simple Calculator. Instead of standard digit-by-digit append calculations, this version operates on a simplified prototype level where selected full numbers are applied directly to the current state. You will implement the core state machine from scratch using immutable state practices, action creators, and custom reducers via the useReducer hook.

**Requirements:**
- Reducer Integration: Inside App.jsx, import the useReducer hook along with the reducer and initialState from ./store/reducers.jsx. Do not modify pre-styled UI components (TotalDisplay, CalcButton).
- UI State Binding: Bind UI elements dynamically to read from the state object. Replace hardcoded values with state.operation, state.memory, and state.total. Update the initialState to the official blueprint layout (all fields starting at 0, default operation +).
- Action Dispatching (APPLY_NUMBER): Import the applyNumber action creator into App.jsx. Create an event handler that accepts a number as an argument and dispatches it. Map this handler carefully to all digit buttons (onClick={() => handleNumberClick(number)}).
- Operation Swapping (CHANGE_OPERATION): In store/actions.jsx, define a CHANGE_OPERATION action constant and creator that accepts an operator string (+, -, *). Import and bind it to the respective operator buttons in the UI to handle state transformation accurately.
- Display Cleansing (CLEAR_DISPLAY): Create a new case in the reducer and a corresponding action creator to reset state.total back to 0. Connect this handler to the "CE" button.
- Equal Operator Logic (=): Follow the exact patterns established for the CE button to register an action for the = button, verifying its execution flow.
- Memory Management: Implement full memory manipulation capabilities:
- M+: Add and store the current total into state.memory.
- MR: Retrieve the value currently residing inside the memory state and apply it directly onto the total screen.
- MC: Fully reset the memory register back to 0.

**Working files:** src/store/actions.jsx, src/store/reducers.jsx, src/App.jsx

---

## My Learning Journey & Reflection
The Power of Reducers: I mastered decoupling UI logic from pure state transformations by routing all explicit user changes through dispatch actions and action creators.

Immutability Mastery: Practiced updating complex JavaScript state structures securely without directly mutating old values, ensuring high reliability across re-renders.

Stateful UI Binding: Enhanced my understanding of dynamic attribute assignment and event binding when wiring standalone functional components to centralized application state.

---

## Tech Stack
- React.js (useReducer hook)
- JavaScript (ES6+ Architecture)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Gün Projesi - Basit Hesap Makinası useReducer Prototipi

## Görev Tanımı
Geçen hafta geliştirdiğin GridGame projesinin beğenilmesinin ardından, sana teslim edilen yarıda kalmış bir Basit Hesap Makinesi uygulamasını tamamlıyorsun. Bu uygulama basamak basamak sayı eklemek yerine, seçilen tam sayıyı mevcut state üzerine uygulayan bir prototiptir. useReducer hook'u, action creator'lar ve reducer mimarisini kullanarak uygulamanın state yönetimini "değişmezlik" (immutability) kurallarına bağlı kalarak sıfırdan inşa edeceksin.

**Beklenenler:**
- Reducer'ı Bağlamak: App.jsx içerisine useReducer hook'unu dahil et. ./store/reducers.jsx dosyasından reducer ve initialState yapılarını import ederek kurulumu tamamla. Hazır şablon stil bileşenlerine (TotalDisplay, CalcButton) dokunma.
- State'i Arayüze Bağlamak: Arayüzdeki statik alanları dinamik hale getir. Sabit değerleri state.operation, state.memory ve state.total referanslarıyla değiştir. initialState değerini tüm alanlar sıfır olacak şekilde resmi prototip ayarlarına çek.
- Butonlara Sayı Aksiyonu Tanımlamak (APPLY_NUMBER): applyNumber action creator'ını App.jsx içerisine import et. Dışarıdan sayı argümanı alan bir event handler yazarak bu fonksiyonu tüm rakam butonlarının onClick olaylarına doğru şekilde bağla (onClick={() => handleNumberClick(1)} v.b.).
- Operatör Yönetimi (CHANGE_OPERATION): store/actions.jsx dosyasında CHANGE_OPERATION adında bir sabit ve operatör alan bir action creator oluştur. Reducer içinde bu operatörü state'e aktaracak logic'i kur ve +, -, * butonlarına bağla.
- Ekranı Sıfırlama (CLEAR_DISPLAY): Reducer içinde state.total değerini 0 yapan CLEAR_DISPLAY case'ini ve buna ait action creator'ı tanımlayıp "CE" butonuna entegre et.
- Eşittir Mantığı (=): CE butonu için kurduğun temizleme ve işletme mimarisinin aynısını = butonu için de bir reducer case'i ve action creator oluşturarak uygula, doğru çalıştığını doğrula.
- Hafıza Fonksiyonları (Memory): Hesap makinesine tam donanımlı hafıza özellikleri kazandır:
- M+: Tıklandığında, anlık total değerini memory state'ine kaydetsin.
- MR: Hafızadaki güncel değeri alıp anlık total değerine aktarsın.
- MC: Hafıza değerini sıfırlayarak 0 yapsın.

**Çalışma dosyaları:** src/store/actions.jsx, src/store/reducers.jsx, src/App.jsx

---

## Gelişim Süreci ve Notlarım
Reducer Mimarisinin Gücü: Arayüz mantığı ile saf state değişimlerini birbirinden tamamen ayırmayı, tüm kullanıcı etkileşimlerini dispatch action'ları üzerinden yönetmeyi öğrendim.

Değişmezlik (Immutability) İlkesi: Mevcut state verisini doğrudan mutasyona uğratmadan, her adımda kopyalayarak güvenli bir şekilde güncellemeyi deneyimledim.

Merkezi Durum Yönetimi: Fonksiyonel bileşenleri merkezi bir state mekanizmasına dinamik attribute'lar ve event handler'lar ile pürüzsüzce bağlama yetkinliği kazandım.

---

##Kullanılan Teknolojiler
- React.js (useReducer hook'u)
- JavaScript (ES6+)