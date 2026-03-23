### English

# Day Project: Active Square Game

## Task Description
In this task, we are building a small interactive game. There will be 4 squares on the screen. When a square is clicked, it should turn green. If a square is clicked a second time, it should toggle back to its original state (turn off).

**Requirements:**
- Implement the logic inside Kareler.jsx.
- Use the .map() function to render the squares dynamically from an array.
- Manage the "active" state of each square.

**Tip:** 
- Think about whether you need one state (an array of active IDs) or two separate states to track the game.
- Use conditional class assignment (e.g., active class) to change colors based on the state.

**Working files:** src/components/Kareler.jsx

---

## My Learning Journey & Reflection
List Rendering: I practiced using the .map() function to transform a data array into a collection of React elements, ensuring each element has a unique key.
Toggle Logic: I learned how to implement "toggle" functionality within a state array—adding an item if it's not present and removing it if it is—to track multiple active elements simultaneously.

---

## Tech Stack
- React.js (useState, .map)
- JavaScript (Array manipulation: includes, filter, spread operator)
- CSS (Conditional Styling)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Gün Projesi: Aktif Kare Oyunu

## Görev Tanımı
Şimdiki görevinde ufak bir interaktif oyun yazacağız. Ekranda 4 adet kare olacak; tıklanan kare yeşil renge bürünecek, aynı kareye tekrar tıklandığında ise eski haline dönecek (sönecek).

**Beklenenler:**
- Kareler.jsx içerisindeki mantığı isterlere göre kurmak.
- Kareleri ekrana dinamik olarak basmak için .map() fonksiyonunu kullanmak.
- Her bir karenin "aktif" olup olmadığını takip eden bir state yapısı oluşturmak.

**İpucu:** 
- Bu uygulama için tek bir state (aktif karelerin ID'lerini tutan bir dizi) mi yoksa iki ayrı state mi kullanmanın daha mantıklı olduğunu düşün.
- State'e bağlı olarak renk değiştirmek için şartlı class ataması (örneğin active class'ı) kullanabilirsin.

**Çalışma dosyaları:** src/components/Kareler.jsx

---

## Gelişim Süreci ve Notlarım
Liste Render Etme: Bir veri dizisini .map() kullanarak React elementlerine dönüştürme ve her elemente benzersiz bir key atama pratiği yaptım.
Toggle (Aç-Kapa) Mantığı: State içindeki bir dizide, bir eleman varsa çıkarma yoksa ekleme mantığını kurarak birden fazla öğenin aktiflik durumunu aynı anda yönetmeyi öğrendim.

---

## Kullanılan Teknolojiler
- React.js (useState, .map)
- JavaScript (Dizi manipülasyonu: includes, filter, spread operatörü)
- CSS (Şartlı Stil Verme)