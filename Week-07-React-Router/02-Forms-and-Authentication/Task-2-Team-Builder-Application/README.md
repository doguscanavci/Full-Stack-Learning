### English

# Task 2: Day Project - Team Builder

## Task Description
To solve task tracking issues within the team, your manager has requested a "Team Builder" application. You will create a system where new team members can be registered and displayed in a real-time list.

**Requirements:**
- Form UI: Build a registration form using Reactstrap, following the design at the provided reference link.
- State Management: Maintain a state to hold the list of all team members.
- AddUser Function: Write an addUser function to handle adding new members to your state.
- API Integration: Send a POST request to [https://reqres.in/api/users](https://reqres.in/api/users) upon form submission.
- Response Handling: If the API response is successful, append the new user to the state and reset the form.
- User Listing: Display the registered users inside a div.side-container within the SideBar, ensuring the list updates dynamically as new users are added.
- Modular Components: Organize your code by creating UserList and FormContainer components.

**Working files:** src/components/UserList.jsx, src/components/FormContainer.jsx, src/App.jsx

---

## My Learning Journey & Reflection
POST Requests: I learned how to send data to a server and handle the resulting response to update the local UI.

Component Composition: I improved my ability to break down a complex UI into manageable, reusable components like Sidebar and Form containers.

---

## Tech Stack
- React.js
- Reactstrap
- Axios
- JavaScript (ES6+)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 2: Gün Projesi - Team Builder

## Görev Tanımı
Ekip içindeki görev aksamalarını önlemek adına yöneticin senden bir "Team Builder" uygulaması geliştirmeni istedi. Bu uygulamada yeni ekip üyeleri kaydedilecek ve anlık olarak bir listede sergilenecek.

**Beklenenler:**
- Form Arayüzü: Paylaşılan referans tasarıma uygun olarak Reactstrap ile bir kayıt formu oluştur.
- State Yönetimi: Tüm ekip üyelerini tutacak bir merkezi state tanımla.
- AddUser Fonksiyonu: Yeni kayıt olan kullanıcıyı mevcut listeye eklemek için addUser fonksiyonunu yaz.
- API Entegrasyonu: Form submit edildiğinde [https://reqres.in/api/users](https://reqres.in/api/users) adresine bir POST isteği gönder.
- Yanıt Yönetimi: API yanıtı başarılı dönerse, kullanıcıyı state'e ekle ve formu tamamen sıfırla.
- Kullanıcı Listeleme: Kayıtlı kullanıcıları SideBar içindeki div.side-container yapısında listele; her yeni kullanıcı eklendiğinde listenin güncellendiğinden emin ol.
- Modüler Yapı: Projeyi UserList ve FormContainer isimli yeni bileşenlere ayırarak yönet.

**Çalışma dosyaları:** src/components/UserList.jsx, src/components/FormContainer.jsx, src/App.jsx

---

## Gelişim Süreci ve Notlarım
POST İstekleri: Sunucuya veri göndermeyi ve dönen yanıtı kullanarak arayüzü (UI) dinamik olarak güncellemeyi öğrendim.

Bileşen Kompozisyonu: Karmaşık bir arayüzü, FormContainer ve UserList gibi yönetilebilir ve tekrar kullanılabilir parçalara bölme becerimi geliştirdim.

---

## Kullanılan Teknolojiler
- React.js
- Reactstrap
- Axios
- JavaScript (ES6+)