### English

# Task 2: Day Project - Shopping Site Functionality

## Task Description
After successfully fetching categories, the next step is to make the shopping site fully functional. You will implement the product listing and filtering logic by following the requirements outlined in the Products, App, and SideBar components.

**Requirements:**
- Initial Data Fetching: When the application starts, fetch all products from the API and store them in the main state.
- Dynamic Category Filtering: Implement a mechanism in the SideBar where clicking a category filters the displayed products accordingly.
- Product Listing: Render the products in the Products component, ensuring all details (title, price, image) are displayed correctly.
- Refinement: Ensure that clicking "All Products" or a specific category updates the UI state seamlessly using useEffect.

**Working files:** src/App.jsx, src/components/Products.jsx, src/components/SideBar.jsx

---

## My Learning Journey & Reflection
Dependency Arrays in useEffect: I learned how to use the dependency array to trigger new API calls or filter logic whenever a selected category changes.
Lifting State Up: I practiced lifting the shared state (selected category) to the App.jsx level to synchronize the SideBar and Products components.

---

## Tech Stack
- React.js (Hooks & State Management)
- Fetch API / Axios
- Fake Store API

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 2: Gün Projesi - Alışveriş Sitesi Fonksiyonelliği

## Görev Tanımı
Kategorileri başarıyla çektikten sonra, siteyi daha kullanışlı hale getirmek için detaylara iniyorsun. Products, App ve SideBar bileşenlerindeki notları takip ederek ürün listeleme ve filtreleme özelliklerini tamamlayacaksın.

**Beklenenler:**
- İlk Veri Yüklemesi: Uygulama açıldığında tüm ürünleri API'den çek ve ana state'e aktar.
- Dinamik Kategori Filtreleme: SideBar içindeki kategorilere tıklandığında, seçilen kategoriye göre ürünlerin süzülmesini sağla.
- Ürün Listeleme: Products bileşeninde ürünlerin başlık, fiyat ve resim gibi detaylarını düzgün bir şekilde render et.
- Senkronizasyon: "Tüm Ürünler" veya spesifik bir kategori seçildiğinde, useEffect kullanarak arayüzün güncel veriyi anlık yansıtmasını sağla.

**Çalışma dosyaları:** src/App.jsx, src/components/Products.jsx, src/components/SideBar.jsx

---

## Gelişim Süreci ve Notlarım
useEffect Bağımlılık Dizisi: Bağımlılık dizisinin (dependency array) gücünü kullanarak, seçilen kategori her değiştiğinde doğru API çağrısının nasıl tetikleneceğini öğrendim.
State Lifting (State'i Yukarı Taşıma): SideBar ve Products bileşenlerini senkronize etmek için ortak state'i (seçilen kategori) App.jsx seviyesine taşıma pratiği yaptım.

---

## Kullanılan Teknolojiler
- React.js (Hooks & State Yönetimi)
- Fetch API / Axios
- Fake Store API