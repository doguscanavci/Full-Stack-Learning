### English

# Task: Dark Mode Toggle Implementation

## Task Description
In this task, you are challenged to implement a dynamic 'Dark Mode' feature as shown in this design example "https://i.ibb.co/3RBzVMv/s5d2-task1-design.png". You must follow specific instructions to complete the requirements.

**Requirements:**
- Define a function named karanlikTemayiAcKapa.
- This function must perform two actions:
- Toggle the dark class on the body element (add/remove).
- Update the button text between 'Karanlık temayı aç' (Open dark theme) and 'Karanlık temayı kapat' (Close dark theme).
- Create a button element programmatically and set its ID to acKapa.
- Append this button as the last child of the div with the .description class.

**Tips:**
- Use createElement to generate the new button.
- Research append vs appendChild to insert the element into the DOM.
- Use the setAttribute() method or direct property assignment for the ID.

**Working files:** index.js

---

## My Learning Journey & Reflection
Dynamic Element Creation: I learned how to generate HTML elements entirely within JavaScript and inject them into specific locations in the DOM tree.State Management & Toggling: By creating the toggle function, I practiced conditional logic to update UI text and apply global CSS classes (.dark) based on user interaction.

---

## Tech Stack
- JavaScript (DOM Creation & Toggling)
- HTML5 / CSS3

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Karanlık Tema Uygulaması

## Görev Tanımı
Şimdi kendini biraz daha zorlayacak bir görev ile karşı karşıyasın. Bu görevde bu tasarım "https://i.ibb.co/3RBzVMv/s5d2-task1-design.png" örneğinde olduğu gibi bir 'Karanlık Temayı Aç' butonu ekleyerek, isterleri tam bir şekilde yapmaya çalışacaksın.

**Beklenenler:**
- karanlikTemayiAcKapa isimli bir fonksiyon tanımlamalısın.
- Bu fonksiyon 2 şey yapacak:
- body'e dark classını ekleyip kaldıracak.
- Button'un metnini 'Karanlık temayı aç', 'Karanlık temayı kapat' olarak güncelleyecek.
- Bir button elementi yaratıp, id'sini acKapa yapacaksın.
- Bu button elementini description class'ına sahip div'in içine son child olarak ekleyeceksin.

**İpuçları:**
- Yeni butonu oluşturmak için createElement kullanabilirsin.
- Elementi DOM'a yerleştirmek için append ve appendChild metotlarına bakabilirsin.
- ID ataması için setAttribute() metoduna bakabilirsin.

**Çalışma dosyaları:** index.js

---

## Gelişim Süreci ve Notlarım
Dinamik Element Oluşturma: HTML elementlerini tamamen JavaScript içinde oluşturmayı ve DOM ağacındaki belirli bir konuma enjekte etmeyi öğrendim.Durum Yönetimi ve Toggle: Toggle fonksiyonu ile kullanıcı etkileşimine göre arayüz metinlerini güncelleme ve global CSS class'larını (.dark) uygulama konusunda mantıksal deneyim kazandım.

---

##Kullanılan Teknolojiler
- JavaScript (DOM Oluşturma & Toggle)
- HTML5 / CSS3