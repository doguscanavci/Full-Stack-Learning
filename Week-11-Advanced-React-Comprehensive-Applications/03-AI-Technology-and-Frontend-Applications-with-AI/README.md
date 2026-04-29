### English

# Task: Day Project - Movie Database v3 Full CRUD and Dark Mode

## Task Description
Following up on the initial version of the Movie Database app, the client has requested a major version upgrade (v3). During this iteration, you will act as a senior architect leveraging modern AI development tools to accelerate workflow and write bulletproof asynchronous logic. Your goal is to engineer full RESTful CRUD capability (implementing GET, POST, PUT, and DELETE methods), establish state-synchronized favorites, and implement a persistent, dark mode theme system.

**Requirements:**
- Movie Editing Pipeline (PUT):
- Map a dynamic editing route under /movies/edit/:id within App.jsx. Extract the entry reference key using useParams inside EditMovieForm.jsx.
- Fetch targeted records via an asymmetric GET call upon mount, passing the data straight into the local component state.
- Wire the submission routine to dispatch a PUT request to https://nextgen-project.onrender.com/api/s11d3/movies/:id. Refresh the global master state pool with the complete response payload and redirect the client straight to /movies/:id.
- Movie Purging Pipeline (DELETE):
- Complete the asynchronous deleteMovie pipeline inside App.jsx pointing to the cloud DELETE endpoint. Synchronize the returned clean list array straight back into the global movies state tree.
- Pass this routine down into Movie.jsx. Render a specialized delete action button styled with a tailored background (bg-red-600), including active hover metrics. Trigger a programmatic push straight back to /movies upon completion.
- Movie Insertion Pipeline (POST):
- Duplicate and refactor the form architecture layout to spawn AddMovieForm.jsx. Route it gracefully via /movies/add.
- Tie an outbound event listener to forward form parameters as a structured POST payload to https://nextgen-project.onrender.com/api/s11d3/movies. Commit successful payloads back into the global state array and redirect back to /movies.
- Synchronized Favorites Shielding:
- Intercept incoming favorite registration triggers. Add safe algorithmic array containment checks to ensure duplicate entries of the same film object are fully blocked.
- Implement downstream sync triggers; if an asset is permanently deleted from the main catalog database, immediately search and scrub its matching footprint from the favorites queue.
- Persistent Dark Mode Interface:
- Activate the pre-styled navigation switch. Initialize a darkMode state using the custom useLocalStorage utility hook bounded to the key "s11d3" (default value true).
- Use an onChange callback on the switch to flip values dynamically. When enabled, conditionalize the root element inside App.jsx to append dark bg-slate-900 h-screen. Dynamically toggle the action labels between "DarkMode On" and "DarkMode Off", keeping the input checked state synchronized.

**Working files:** src/components/AddMovieForm.jsx, src/components/EditMovieForm.jsx, src/components/Movie.jsx, src/App.jsx

---

## My Learning Journey & Reflection
Asynchronous CRUD Architecture: I mastered orchestrating all four fundamental REST API endpoints (GET, POST, PUT, DELETE) within a modern React view layout, maintaining full client-server parity.

AI-Assisted Scaffolding: Experienced using AI design suggestions to rapidly clone, adapt, and refactor existing form modules (transforming Edit to Add layouts) while minimizing manual boilerplates.

Global Theme Injection: Learned to couple local browser memory trackers (localStorage) with cascading utility stylesheets (Tailwind CSS dark: classes) to create unified app-wide dark mode behaviors.

---

## Tech Stack
- React.js (Hooks, Parametric Routing, Controlled Forms)
- Axios (Full RESTful Stack: GET, POST, PUT, DELETE)
- Tailwind CSS (Custom Dark Mode Engine Integration)
- Browser LocalStorage API

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Gün Projesi - Film Veritabanı v3 Tam CRUD ve Dark Mode Entegrasyonu

## Görev Tanımı
Daha önce bir şirket için geliştirdiğin Film Veritabanı uygulamasının, alınan yeni toplantı kararları doğrultusunda v3 sürümünü hazırlıyorsunuz. Bu süreçte modern AI (Yapay Zeka) araçlarından da mimari destek alarak geliştirme hızını artıracak; uygulamaya tam donanımlı RESTful CRUD yetenekleri (GET, POST, PUT, DELETE istekleri) kazandıracak, mükerrer kaydı önleyen favori sistemini entegre edecek ve localStorage destekli kalıcı bir darkMode yapısı kuracaksın.

**Beklenenler:**
- Film Düzenleme Döngüsü (PUT):
- App.jsx içinde /movies/edit/:id rotasını tanımla. EditMovieForm.jsx bileşeninde url parametresini useParams ile yakala.
- Bileşen yüklendiğinde ilgili filmin güncel verisini API'den GET isteğiyle çekip yerel state'e aktar.
- Düzenleme formu onaylandığında https://nextgen-project.onrender.com/api/s11d3/movies/:id adresine PUT isteği gönder. API'den gelen güncel film listesini ana state'e aktar ve kullanıcıyı anında /movies/:id detay sayfasına yönlendir.
- Film Silme Döngüsü (DELETE):
- App.jsx içerisindeki deleteMovie fonksiyonunu tamamla; ilgili film kimliği için bulut API'sine DELETE isteği fırlat ve dönen yeni listeyi movies state'ine yaz.
- Bu metodu Movie.jsx bileşenine prop olarak aktar. Bileşene Tailwind kurallarına uygun, arka planı kırmızı (bg-red-600) ve hover efektleri olan şık bir "Sil" butonu ekle. Silme işlemi bitiminde kullanıcıyı /movies sayfasına yönlendir.
- Yeni Film Ekleme Döngüsü (POST):
- EditMovieForm.jsx dosyasını model alarak sıfırdan AddMovieForm.jsx bileşenini üret. Bu bileşene /movies/add rotasından erişim sağla.
- Form submit edildiğinde verileri https://nextgen-project.onrender.com/api/s11d3/movies adresine POST et. Başarılı yanıttan sonra ana state'i güncelle ve /movies rotasına yönlendirmeyi tamamla.
- Güvenli Favori Mekanizması:
- Detay sayfasındaki favori ekleme butonunu aktifleştir. Aynı filmin listeye iki kez eklenmesini engelleyecek dizi kontrol lojiğini yaz.
- İlişkisel veri bütünlüğü kuralını işlet; eğer bir film ana listeden tamamen silinirse, favoriler arasındaysa oradan da otomatik olarak temizlenmesini sağla.
- Kalıcı Temalandırma (Dark Mode Yapısı):
- Arayüzdeki Dark Mode anahtarını çalışır hale getir. useLocalStorage hook'unu kullanarak "s11d3" anahtarıyla bir state oluştur (başlangıç değeri true olsun).
- Switch bileşenine onChange olayı ekleyerek state'i tersine çevir. Tema aktifken App.jsx en üst sarmalayıcı div'ine dark bg-slate-900 h-screen sınıflarını ekle; kapalıyken kaldır. Buton metnini duruma göre "DarkMode On" veya "DarkMode Off" yap, checked özelliğini state ile senkronize et.

**Çalışma dosyaları:** src/components/AddMovieForm.jsx, src/components/EditMovieForm.jsx, src/components/Movie.jsx, src/App.jsx

---

## Gelişim Süreci ve Notlarım
Bütünsel Asenkron CRUD Yönetimi: Bir web uygulamasının ihtiyaç duyduğu tüm temel HTTP veri mutasyon metotlarını (GET, POST, PUT, DELETE) tek bir çatı altında, veri tutarlılığını bozmadan yönetmeyi pekiştirdim.

AI Destekli Kod İskeletleme: Mevcut karmaşık form yapılarını (Edit Form), AI asistanı yönergeleriyle hızlıca yeni ihtiyaçlara (Add Form) uyarlamayı ve boilerplate kod yazım süreçlerini optimize etmeyi deneyimledim.

Cascading Tema Yönetimi: Tarayıcı lokal hafızası ile Tailwind CSS'in dark: seçici (variant) yeteneklerini evlendirerek, tüm uygulamayı kapsayan kalıcı arayüz deneyimleri tasarladım.

---

## Kullanılan Teknolojiler
- React.js (Hooks, Dinamik Rotalar, Kontrollü Form Yönetimi)
- Axios (RESTful API Mimari: GET, POST, PUT, DELETE)
- Tailwind CSS (Dark Mode Varyant Yapılandırması)
- Browser LocalStorage API