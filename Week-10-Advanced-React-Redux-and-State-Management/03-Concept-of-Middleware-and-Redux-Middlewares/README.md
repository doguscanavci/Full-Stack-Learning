### English

# Task: Day Project - Favorite Movies Archive with Redux Middleware

## Task Description
Following the successful refactoring of the multi-slice movie store, you are assigned to complete a standalone "Favorite Movies Archive" dashboard. The application cycles through a set of 20 films from a static array. While cycling works, the "Add to My List" and "Remove" functionalities are fully un-wired. Additionally, to deliver a high-quality user experience (UX), you will introduce bi-directional navigation, dynamic pool filtering, and integrate redux-logger as an operation tracking middleware.

**Requirements:**
- Architecture Planning: Audit the application pool. Establish which values must sit globally inside the central store (e.g., current movie cursor index, master movie list array, and custom watchlist collection).
- Store & Hook Setup: Build the master reducer inside src/store/reducers/index.js. Initialize the central store under myStore inside store.js and bridge it via <Provider> inside main.jsx. Fetch data triggers across Movie.jsx, FavMovie.jsx, and App.jsx using useSelector.
- Middleware Integration: Configure and embed the redux-logger middleware into the Redux store via applyMiddleware during store creation. Ensure state mutations print smoothly onto the developer tools console during runtime.
- Feature Enhancements & Navigation Constraints:
- Bi-directional Navigation: Create a "Previous" button. Dynamically hide the "Previous" button when the cursor is on the first item (index 0) and hide the "Next" button once the user reaches the final entry of the active list.
- Dynamic Pool Filtering: When a movie object is added to the watchlist, immediately filter it out of the active main browse pool. If removed from the watchlist, return it back to the available browse registry.
- Empty State Handling: When all 20 films are successfully moved into the watchlist (leaving the main browse registry completely empty), override the default view inside App.jsx and render:
<div className="text-center">Eklenecek yeni film bulunamadı...</div>

**Working files:** src/store/actions/index.js, src/store/reducers/index.js, src/store/store.js, src/components/FavMovie.jsx, src/components/Movie.jsx, src/App.jsx, src/main.jsx

---

## My Learning Journey & Reflection
Interceptors with Middleware: I mastered how Redux middlewares act as an intermediary layer, capturing dispatched actions to log state transitions seamlessly before they update the store.

Complex Store Filtering: Gained hands-on proficiency in writing mutual state deletion/insertion logic where moving an object into one array dynamically updates the lengths and navigation bound calculations of adjacent indices.

Conditional UI Masking: Practiced designing responsive empty-state screens and clean edge-case constraints based on shifting global array sizes.

---

## Tech Stack
- React.js
- Core Redux
- Redux Logger (Middleware Entegrasyonu)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Gün Projesi - Favori Filmler Arşivi ve Redux Middleware

## Görev Tanımı
Daha önce yaptığın dönüşüm projelerinin beğenilmesinin ardından, sana teslim edilen 20 filmlik "Favori Filmler Arşivi" uygulamasını tamamlıyorsun. İncelemelerin sonucunda filmler arasında ilerleme çalışırken, listeye ekleme ve çıkarma mekanizmalarının eksik olduğunu fark ettin. Kullanıcı deneyimini (UX) üst seviyeye çıkarmak adına geri yönlü navigasyon ekleyecek, listeye eklenen filmlerin havuzdan dinamik düşmesini sağlayacak ve redux-logger ara yazılımını (middleware) entegre edeceksin.

**Beklenenler:**
- Mimari Planlama ve Keşif: Uygulama yapısını incele. Hangi verilerin (mevcut film indeksi, ana film havuzu, favori listesi) global store'da tutulacağını belirle ve aksiyonları tasarla.
- Store ve Hook Kurulumu: src/store/reducers/index.js içinde initialState ve varsayılan caseleri içeren reducer'ı yaz. store.js içinde myStoreu tanımlayıp main.jsx altında uygulamayı <Provider> ile sarmala. Bileşenlerdeki verileri useSelector ve useDispatch ile store'a bağla.
- Middleware (Redux-Logger) Entegrasyonu: Projede yüklü halde bulunan redux-logger kütüphanesini store oluşturma aşamasında applyMiddleware metoduyla zincire dahil et. Konsoldaki state değişimlerini takip etilebilir kıl.
- Yeni Özellikler ve Navigasyon Sınırları:
- Çift Yönlü Navigasyon: Kullanıcının filmler arasında geri dönebilmesi için bir "Önceki" butonu ekle. İlk filmdeyken (index 0) "Önceki" butonunu, son filmdeyken ise "Sıradaki" butonunu arayüzde dinamik olarak gizle.
- Dinamik Havuz Filtreleme: Bir film izleme listesine (favorilere) eklendiğinde, ana gezinme listesinden anında gizlensin; favorilerden çıkarıldığında ise ana listeye geri dönsün.
- Boş Durum (Empty State) Yönetimi: Tüm filmler listeye eklenip gezinme havuzunda hiç film kalmadığında, App.jsx bileşeninde şu elementi render et:
<div className="text-center">Eklenecek yeni film bulunamadı...</div>

**Çalışma dosyaları:** src/store/actions/index.js, src/store/reducers/index.js, src/store/store.js, src/components/FavMovie.jsx, src/components/Movie.jsx, src/App.jsx, src/main.jsx

---

## Gelişim Süreci ve Notlarım
Middleware Katmanının Mantığı: Aksiyonların reducer'a ulaşmadan önce araya giren middleware yapısını, özellikle redux-logger üzerinden state geçişlerini konsolda anlık izleyerek derinlemesine kavradım.

İlişkisel Dizi Yönetimi: Bir diziden eleman çıkarıldığında navigasyon sınırlarının, aktif indislerin ve bağlı diğer dizilerin veri bütünlüğünü bozmadan güncellenmesi mantığını çözdüm.

Koşullu Arayüz Maskeleme: Dinamik veri havuzunun boyutuna göre buton gizleme kuralları koymayı ve havuz tamamen boşaldığında kullanıcı dostu "boş durum" ekranları tasarlamayı deneyimledim.

---

## Kullanılan Teknolojiler
- React.js
- Core Redux
- Redux Logger (Middleware Entegrasyonu)