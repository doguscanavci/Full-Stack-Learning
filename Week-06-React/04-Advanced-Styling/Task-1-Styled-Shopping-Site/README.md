### English

# Task 1: Styled Shopping Site - UI Modernization

## Task Description
The initial version of the shopping site was functional but lacked a modern UI structure. To make the project more scalable and maintainable, you are transitioning from classic CSS to styled-components. You will refactor the Product.jsx component by converting existing CSS classes into styled components.

**Requirements:**
- Refactor to Styled Components: Convert CSS classes into component names (e.g., .price-tag becomes PriceTag, .description becomes Description).
- Semantic Components: Use property names for tag-based styling, such as creating an Image component for product.image and a Title component for product.title.
- Interactivity: Implement pseudo-classes like hover directly within the styled components.
- Dynamic Styling: Utilize props within your styled components to create dynamic styling rules (e.g., changing colors or padding based on passed values).

**Working files:** src/components/Product.jsx

---

## My Learning Journey & Reflection
CSS-in-JS Philosophy: I learned the benefits of co-locating styles with components, which prevents class name collisions and makes the code more modular.
Dynamic UI Elements: I practiced passing props to styled components, allowing for a more flexible UI where styles can change based on component state or data.

---

## Tech Stack
- React.js
- Styled-components
- JavaScript (ES6+)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 1: Styled Alışveriş Sitesi - Arayüz Modernizasyonu

## Görev Tanımı
Alışveriş sitesinin ilk versiyonu çalışıyordu ancak modern bir arayüz yapısından yoksundu. Projeyi daha ölçeklenebilir ve sürdürülebilir hale getirmek için klasik CSS'ten styled-components kütüphanesine geçiş yapıyorsun. Product.jsx bileşenini, mevcut CSS sınıflarını styled component'lere dönüştürerek yeniden yapılandıracaksın.

**Beklenenler:**
- Styled Component Dönüşümü: CSS sınıflarını bileşen isimlerine dönüştür (örneğin: .price-tag yerine PriceTag, .description yerine Description).
- Semantik Bileşenler: Tag bazlı stillendirmeler için özellik isimlerini kullan; product.image için Image, product.title için Title bileşenleri oluştur.
- Etkileşim: hover gibi pseudo-class'ları doğrudan styled component yapıları içinde tanımla.
- Dinamik Stiller: Styled component'lere prop göndererek, gelen verilere göre değişen dinamik stil kuralları oluşturma pratiği yap.

**Çalışma dosyaları:** src/components/Product.jsx

---

## Gelişim Süreci ve Notlarım
CSS-in-JS Felsefesi: Stilleri bileşenlerle aynı yerde tutmanın, sınıf ismi çakışmalarını nasıl önlediğini ve kodu nasıl daha modüler hale getirdiğini öğrendim.
Dinamik Arayüz Elemanları: Styled component'lere prop aktararak, bileşen state'ine veya veriye göre stilin nasıl esnek bir şekilde değişebileceğini deneyimledim.

---

## Kullanılan Teknolojiler
- React.js
- Styled-components
- JavaScript (ES6+)