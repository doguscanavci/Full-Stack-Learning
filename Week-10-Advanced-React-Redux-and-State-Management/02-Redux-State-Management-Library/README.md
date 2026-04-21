### English

# Task: Day Project - IMDb Movie Database Redux Integration

## Task Description
The legacy IMDb Movie Database application has become difficult to maintain due to complex prop-drilling and scattered state. To handle scaling and deeply nested data structures smoothly, you will refactor the entire state management layer by implementing core Redux, combining multiple reducers (movieReducer and a brand new favoritesReducer), and subscribing components via hooks.

**Requirements:**
- Redux Store Setup: In src/store/store.js, create a central store using createStore named myStore and export it. Wrap the root application inside <Provider store={myStore}> within main.jsx.
- Slicing with combineReducers: Build a clean multi-reducer tree inside src/store/reducers/index.js utilizing combineReducers to pair movieReducer and favoritesReducer. Update component selectors (useSelector) across MovieList, Movie, and MovieHeader to handle the new nested state structure (e.g., changing from state.movies to state.movieReducer.movies).
- Movie Actions Execution: Connect useDispatch inside Movie.jsx to dispatch deleteMovie and handle browser redirection to /movies using React Router. Write the ADD_MOVIE reducer logic and pair it with an addMovie action creator inside AddMovieForm.jsx.
- Favorites Reducer from Scratch: Establish favoritesReducer.js with an initialState containing an array of favorites and a boolean flag displayFavorites. Connect this state cleanly to FavoriteMovieList.jsx.
- Robust Favorites Actions: Complete the action constants, creators, and handlers for:
- toggleFavorites: Switches displayFavorites. When active, hides the "Add to Favorites" button inside the Movie component.
- addFavorites: Pushes a movie object into the list. Edge Case Guardrail: Update the action logic so the same movie cannot be added to favorites multiple times if it already exists.
- removeFavorite: Filters out a movie object from the favorites collection using its unique id.
- Cross-Reducer Synced Deletion: Ensure that when a movie is permanently deleted from the main movies store, it is also automatically scrubbed from the favorites list if present.

**Working files:** src/store/actions/movieActions.js, src/store/actions/favoritesActions.js, src/store/reducers/favoritesReducer.js, src/store/reducers/index.js, src/store/reducers/movieReducer.js, src/store/store.js, src/components/AddMovieForm.jsx, src/components/FavoriteMovieList.jsx, src/components/Movie.jsx, src/components/MovieHeader.jsx, src/components/MovieList.jsx, src/App.jsx, src/main.jsx  

---

## My Learning Journey & Reflection
Centralized Single Source of Truth: I learned how to move away from local component states into a unified global store, dramatically eliminating prop-drilling patterns.

Slicing Complex Architectures: Gained deep hands-on experience using combineReducers to manage decoupled features (Movies vs. Favorites) within the same global tree.

Data Consistency & Intercepting State: Practiced business logic validation directly within reducers to avoid duplicate items and synchronized cross-slice actions (like wiping out a favorite when the main asset is deleted).

---

## Tech Stack
- React.js
- Redux (Core Library)
- React-Redux (Provider, useSelector, useDispatch)
- React Router

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Gün Projesi - IMDb Film Veri Tabanı Redux Entegrasyonu

## Görev Tanımı
Mevcut IMDb Film Veritabanı uygulaması büyüdükçe prop-drilling ve dağınık state yapısı yüzünden yönetilemez hale gelmiştir. Projenin artan karmaşıklığını kontrol altına almak amacıyla, uygulamanın tüm eyalet yönetimini merkezi Redux mimarisine geçiriyorsun. Film yönetiminin yanı sıra favori yönetimini de sıfırdan kurarak birden fazla reducer'ı bir arada koordine edeceksin.

**Beklenenler:**
- Redux Store Kurulumu: src/store/store.js içinde createStore metodunu kullanarak myStore adıyla bir store oluştur. main.jsx içinde tüm uygulamayı <Provider store={myStore}> ile sarmala.
- Reducer Birleştirme (combineReducers): src/store/reducers/index.js içinde combineReducers kullanarak movieReducer ve yeni açacağın favoritesReducerı birleştir. Durum ağacı değiştiği için MovieList, Movie ve MovieHeader bileşenlerindeki useSelector erişim yollarını yeni hiyerarşiye (state.movieReducer.movies v.b.) göre güncelle.
- Film Aksiyonları: Movie.jsx bileşeninde useDispatch tanımlayarak deleteMovie aksiyonunu bağla ve silme sonrası kullanıcıyı /movies rotasına yönlendir. ADD_MOVIE case'ini yaz, movieActions.js içinde creator'ını oluştur ve AddMovieForm.jsx bileşenine bağla.
- Favoriler Reducer'ı (Sıfırdan): favoritesReducer.js dosyasını oluştur. favorites (dizi) ve displayFavorites (boolean) alanlarını içeren initialState tanımla ve bu verileri FavoriteMovieList.jsx bileşenine bağla.
- Favori Aksiyon Yönetimi: Aşağıdaki senaryolar için constant, creator ve reducer mantıklarını eksiksiz kur:
- toggleFavorites: displayFavorites durumunu tersine çevirir. Değer true ise detay sayfasındaki "Favorilere Ekle" butonu gizlenmeli.
- addFavorites: Listeye yeni film ekler. Mükerrer Kontrolü: Aynı filmin favorilere birden fazla kez eklenmesini engelleyecek koruma mantığını yaz.
- removeFavorite: Gelen benzersiz id bilgisine göre filmi favoriler listesinden temizler.
- Senkronize Silme Operasyonu: Eğer bir film ana listeden tamamen silinirse, favoriler arasındaysa oradan da otomatik olarak kaldırılmasını sağlayacak lojiği kurgula.

**Çalışma dosyaları:** src/store/actions/movieActions.js, src/store/actions/favoritesActions.js, src/store/reducers/favoritesReducer.js, src/store/reducers/index.js, src/store/reducers/movieReducer.js, src/store/store.js, src/components/AddMovieForm.jsx, src/components/FavoriteMovieList.jsx, src/components/Movie.jsx, src/components/MovieHeader.jsx, src/components/MovieList.jsx, src/App.jsx, src/main.jsx  

---

## Gelişim Süreci ve Notlarım
Merkezi Tek Güven Kaynağı (Store): Bileşenlerin kendi içindeki durum yönetimini tek bir küresel store'a taşıyarak prop-drilling kirliliğine tamamen son vermeyi öğrendim.

Modüler State Ayrımı: combineReducers kullanarak filmler ve favoriler gibi farklı sorumluluk alanlarını bağımsız dilimler (slices) halinde yönetmeyi deneyimledim.

Veri Tutarlılığı ve İlişkisel Eylemler: Reducer yapısı içinde veri doğrulaması yapmayı ve bir kaynaktan veri silindiğinde ilişkili diğer state dilimini de senkronize şekilde temizleme mantığını kavradım.

---

## Kullanılan Teknolojiler
- React.js
- Redux (Core Mimari)
- React-Redux (Provider, useSelector, useDispatch)
- React Router