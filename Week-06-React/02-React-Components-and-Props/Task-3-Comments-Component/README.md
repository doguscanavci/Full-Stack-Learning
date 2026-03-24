### English

# Task 3: Comments Component Styling & Structure

## Task Description
The comments are not rendering exactly as requested in the design. We need to modify the Yorum.jsx component to fix the layout and ensure it matches the provided design specifications. Additionally, ensure that Yorumlar.jsx correctly passes the data to each individual comment. "https://i.ibb.co/2F40Jjj/s6d2-task3-design.png"

**Requirements:**
- In Yorum.jsx: Update the JSX structure to display the username and the comment text side-by-side or as specified in the design.
- In Yorumlar.jsx: Map through the comments array and render the Yorum component for each entry.
- Props: Ensure the comment object is passed correctly as a prop to Yorum.jsx.
- Key Attribute: Don't forget to add a unique key to each Yorum component within the map function.

**Working files:** src/components/Yorumlar/Yorum.jsx, src/components/Yorumlar/Yorumlar.jsx

---

## My Learning Journey & Reflection
UI Fidelity: I practiced translating a visual design into a React component structure, ensuring that the HTML elements align with the CSS classes provided by the design team.
Nested Mapping: I learned how to handle nested data structures by mapping through a comments array that exists within a larger post object.

---

## Tech Stack
- React.js (Component Composition)
- CSS (Flexbox / Typography for comments)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 3: Yorumlar Componenti Düzenlemesi

## Görev Tanımı
Yorumlar şu an ekranda istenen tasarım standartlarında görünmüyor. Tasarıma sadık kalmak için Yorum.jsx bileşeninde yapısal değişiklikler yapmamız gerekiyor. Ayrıca Yorumlar.jsx bileşeninin verileri alt bileşene doğru şekilde aktardığından emin olmalıyız. "https://i.ibb.co/2F40Jjj/s6d2-task3-design.png"

**Beklenenler:**
- Yorum.jsx içinde: Kullanıcı adı ve yorum metnini tasarımda belirtilen hiyerarşiye göre (genellikle yan yana ve kalın/normal font ayrımıyla) düzenlemek.
- Yorumlar.jsx içinde: Yorumlar dizisini map'leyerek her bir öğe için Yorum bileşenini çağırmak.
- Proplar: Her bir yorum objesini Yorum bileşenine prop olarak eksiksiz aktarmak.
- Key Attribute: Map fonksiyonu içinde her bir Yorum bileşenine benzersiz bir key atamak.

**Çalışma dosyaları:** src/components/Yorumlar/Yorum.jsx, src/components/Yorumlar/Yorumlar.jsx

---

## Gelişim Süreci ve Notlarım
Arayüz Sadakati: Görsel bir tasarımı React bileşen yapısına dönüştürme pratiği yaptım. HTML öğelerinin tasarım ekibi tarafından sağlanan CSS sınıflarıyla tam uyumlu olmasını sağladım.
İç İçe Döngüler: Büyük bir gönderi objesi içindeki yorumlar dizisi gibi iç içe geçmiş veri yapılarını nasıl işleyeceğimi ve render edeceğimi öğrendim.

---

## Kullanılan Teknolojiler
- React.js (Bileşen Kompozisyonu)
- CSS (Yorumlar için Flexbox / Tipografi)