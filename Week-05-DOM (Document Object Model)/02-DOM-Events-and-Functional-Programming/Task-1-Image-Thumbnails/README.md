### English

# Task: Dynamic Image Thumbnails

## Task Description
Today, you are working on making websites more dynamic. You will start with a few fundamental features. There are 4 thumbnails in the header section. Your goal is to change the image in the center of the page (with the ID main-image) to match any thumbnail when a user hovers over it.

**Requirements:**
- Use the mouseenter event to detect when the mouse enters a thumbnail's area.
- Utilize event.target to retrieve the source link of the hovered image.
- Apply a forEach loop to efficiently attach event listeners to all thumbnail images at once.
- Explore the differences between mouseenter, mouseleave, and mouseover events for better event handling.

**Working files:** index.js

---

## My Learning Journey & Reflection
Event Handling: I practiced attaching event listeners to multiple elements using forEach, which is a much cleaner and more scalable approach than manual assignment.
Interactive UI: I learned how to manipulate the DOM in real-time based on user interaction (hovering), specifically updating the src attribute of a primary image using data from a secondary source.

---

## Tech Stack
- JavaScript (DOM Events)
- HTML5 / CSS3

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Dinamik Görsel Thumbnailleri (Küçük Resimler)

## Görev Tanımı
Bugün sitelerin dinamik olmasını sağlamak için bazı çalışmalar yapıyorsun. İlk başta temel 1-2 özellik ile başlayacaksın. Yukarıda (header bölümünde) 4 tane thumbnail var. Bu thumbnaillerden herhangi birinin üzerine gelince sayfanın ortasındaki main-image id'li resmin o resim ile değişmesini sağlamalısın.

**Beklenenler:**
- Fare bir thumbnail üzerine geldiğinde tetiklenmesi için mouseenter eventini kullanmak.
- Üzerine gelinen resmin linkini (src) almak için event.target yapısından faydalanmak.
- Her image'a tek tek event eklemek yerine forEach kullanarak işlemi otomatize etmek.
- Araştırma: mouseenter, mouseleave ve mouseover eventleri arasındaki farkları inceleyerek doğru kullanımı kavramak.

**Çalışma dosyaları:** index.js

---

## Gelişim Süreci ve Notlarım
Event Yönetimi: Birden fazla elemente forEach ile event listener ekleme pratiği yaptım. Bu yöntem, kodun daha temiz ve sürdürülebilir olmasını sağlayan temel bir yaklaşımdır.
Etkileşimli Arayüz: Kullanıcı etkileşimine (üzerine gelme/hover) göre DOM'u gerçek zamanlı olarak güncellemeyi ve bir görselin src niteliğini başka bir elementten gelen veriyle değiştirmeyi öğrendim.

---

## Kullanılan Teknolojiler
- JavaScript (DOM Events)
- HTML5 / CSS3