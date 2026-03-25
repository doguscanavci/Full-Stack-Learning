### English

# Task 1: Shopping Site - Dynamic Categories

## Task Description
To support your fitness coach’s new e-commerce venture, you are tasked with fetching product categories from a real API. You will implement a data-fetching mechanism within the SideBar component and pass this data down to organize the UI.

**Requirements:**
- Data Fetching: Use the useEffect hook to fetch category data from [https://fakestoreapi.com/products/categories](https://fakestoreapi.com/products/categories) when the SideBar component mounts.
- State Management: Store the fetched categories in a local state.
- Prop Passing: Pass the category list as a prop to the CategoryList component.
- UI Rendering: Ensure that the categories are rendered correctly within the CategoryList component as seen in the design.
- Working files: src/components/CategoryList.jsx, src/components/SideBar.jsx

---

## My Learning Journey & Reflection
Fetching Real Data: I practiced using the useEffect hook with an empty dependency array to perform a side effect (API call) exactly once when the component is first rendered.
Asynchronous Operations: I deepened my understanding of handling promises and asynchronous data flow in React, ensuring the UI waits for the API response before rendering the list.

---

## Tech Stack
- React.js (useEffect, useState)
- Fetch API
- Fake Store API

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 1: Alışveriş Sitesi - Kategoriler

## Görev Tanımı
Spor hocanın yeni kuracağı e-ticaret sitesine destek olmak amacıyla, ürün kategorilerini gerçek bir API'den çekmen gerekiyor. SideBar bileşeni içinde bir veri çekme mekanizması kurarak, bu verilerin alt bileşenlerde organize bir şekilde gösterilmesini sağlayacaksın.

**Beklenenler:**
- Veri Çekme: SideBar bileşeni yüklendiğinde, useEffect hook'unu kullanarak [https://fakestoreapi.com/products/categories](https://fakestoreapi.com/products/categories) adresinden kategorileri çek.
- State Yönetimi: API'den gelen kategori verilerini bir state içinde sakla.
- Prop Aktarımı: Kategori listesini CategoryList bileşenine prop olarak gönder.
- Arayüz Render: Kategorilerin CategoryList içinde, tasarımda öngörüldüğü şekilde listelenmesini sağla.

**Çalışma dosyaları:** src/components/CategoryList.jsx, src/components/SideBar.jsx

---

## Gelişim Süreci ve Notlarım
Gerçek Veriyle Çalışma: useEffect hook'unun boş bağımlılık dizisi (empty dependency array) ile kullanımını pekiştirdim; böylece bileşen ilk yüklendiğinde API çağrısının sadece bir kez yapılmasını sağladım.
Asenkron İşlemler: React'te promise yapısını ve asenkron veri akışını yönetmeyi, API'den cevap gelene kadar arayüzün nasıl davranması gerektiğini deneyimledim.

---

## Kullanılan Teknolojiler
- React.js (useEffect, useState)
- Fetch API
- Fake Store API