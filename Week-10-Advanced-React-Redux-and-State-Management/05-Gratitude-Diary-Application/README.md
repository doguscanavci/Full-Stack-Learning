### English

# Task: Weekend Project - Gratitude Diary Application

## Task Description
To clear out burnout and track personal motivation, you are building a custom "Gratitude Diary" application. The UI and backend endpoints are ready, and your task is to wire up the entire asynchronous state management layer using Redux Thunk, handle persistent browser caching via local helper methods, and trigger elegant pop-up notifications using React Toastify.

**Requirements:**
- Store & Middleware Architecture:
- In src/store/reducers/index.js, design the master reducer. Initialize its baseline state using the pre-configured baslangicNotlariniGetir() utility function.
- Inside store/store.js, setup the global store and inject redux-thunk as an active middleware alongside native dispatch sequences. Wrap the application tree within the Redux <Provider> inside main.jsx.
- Asynchronous Fetching (GET):
- In store/actions/index.js, write the asynchronous thunk function notlariAlAPI(). Upon a successful Axios request, dispatch the proper action creator to hit the NOTLARI_AL reducer case.
- Cache the incoming data array inside browser storage using the ready-made localStorageStateYaz() helper.
- In PostList.jsx, read notes directly from the global store using useSelector and dispatch notlariAlAPI() exactly once inside a useEffect layout hook (componentDidMount simulation).
- Asynchronous Record Creation (POST):
- Develop notEkle and its accompanying thunk worker notEkleAPI(). Ensure it expects a successful status code of 201 from the remote backend.
- Formulate the NOT_EKLE reducer node, syncing the update into localStorage. Connect it to PostForm.jsx and use React Router to navigate back to the "All Notes" section immediately post-dispatch.
- Asynchronous Purging (DELETE):
- Build the notSil and notSilAPI(id) thunk utility targeting the specific dynamic URL: https://nextgen-project.onrender.com/api/s10d5/gratitudes/${id}.
- Confirm the server responds with a 200 status flag before dispatching the NOT_SIL logic and updating localStorage. Fire this routine from Post.jsx.
- Visual Notifications (React Toastify):
- Embed <ToastContainer /> inside App.jsx.
- Success Notification (Creation): When a note is successfully submitted, toast a success banner printing "Notun başarıyla kaydedildi. Güzelliklerle dolu bir gün dileğiyle..." configured with a 2-second timeout window.
- Success Notification (Deletion): When a record is purged, display a success toast stating "Notunuz silindi...".
- Error Guardrails: If any Axios network failure intercepts the stream, display a warning toast indicating "Bir hata oluştu!".

**Working files:** src/components/Post.jsx, src/components/PostForm.jsx, src/components/PostList.jsx, src/store/actions/index.js, src/store/reducers/index.js, src/store/store.js, src/App.jsx, src/main.jsx

---

## My Learning Journey & Reflection
Asynchronous Actions with Thunk: I mastered how Redux Thunk empowers developers to write action creators that return functions rather than plain objects, making delayed or network-dependent dispatches straightforward.

Persistence Integration: Practiced reading and writing structural arrays to localStorage during active mutation lifecycles to preserve client states across device restarts.

Refined Toast Feedbacks: Gained hands-on experience orchestrating side-effect notifications (Toastify) inside asynchronous response blocks, tailoring specific timeout rules to boost UX.

---

## Tech Stack
- React.js & React Router
- Core Redux & React-Redux
- Redux Thunk (Asynchronous Middleware)
- Axios (HTTP Client)
- React Toastify

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Hafta Sonu Projesi - Şükran Günlüğü Uygulaması

## Görev Tanımı
Haftanın yoğun temposunun getirdiği zihinsel yükü azaltmak ve kişisel motivasyonu izlemek amacıyla bir "Şükran Günlüğü" uygulaması hayata geçiriyorsun. Projenin arayüz ve backend servisleri hazır durumdadır; senin sorumluluğun, uygulamanın tüm asenkron ağ ve veri akışını Redux Thunk ara yazılımı ile kurmak, verileri yerel yardımcı metotlarla localStorage üzerinde saklamak ve React Toastify kullanarak kullanıcıya bildirimler sunmaktır.

**Beklenenler:**
- Store ve Middleware Kurulumu:
- src/store/reducers/index.js içinde ana reducer'ı tanımla. Başlangıç state'ini hazır gelen baslangicNotlariniGetir() fonksiyonuyla besle.
- store/store.js içinde redux-thunkı middleware olarak bağlayarak global store'u oluştur. main.jsx dosyasında uygulamayı Redux <Provider> ile sarmala.
- Asenkron Veri Çekme (GET):
- store/actions/index.js içinde notlariAlAPI() adında bir thunk fonksiyonu yaz. Başarılı axios isteği sonucunda doğru action'ı dispatch ederek reducer'daki NOTLARI_AL case'ini tetikle.
- Gelen verileri hazır sunulan localStorageStateYaz() fonksiyonunu çağırarak lokal hafızaya kaydet.
- PostList.jsx içinde notları storedan çekip, bileşen yüklendiğinde (useEffect içinde) notlariAlAPI() fonksiyonunu bir kez tetikle.
- Asenkron Not Ekleme (POST):
- notEkle ve notEkleAPI() thunk yapılarını kurgula. İstekten gelen durum kodunun 201 (Created) olduğunu doğrula.
- Reducer'da NOT_EKLE case'ini yaz (ve yerel hafızayı güncelle). PostForm.jsx bileşeninde bu aksiyonu tetikle ve işlem bittiğinde kullanıcıyı anında "Tüm Notlar" sayfasına yönlendir.
- Asenkron Not Silme (DELETE):
- notSil ve notSilAPI(id) thunk yapısını, şu adrese DELETE isteği atacak şekilde kurgula: https://nextgen-project.onrender.com/api/s10d5/gratitudes/${id}.
- Sunucudan dönen durum kodunun 200 olduğunu teyit ederek reducer'da NOT_SIL case'ini çalıştır (ve yerel hafızayı güncelle). Bu tetiklemeyi Post.jsx bileşenine bağla.
- Kullanıcı Geri Bildirimleri (React Toastify):
- App.jsx içerisine <ToastContainer /> bileşenini dahil et.
- Ekleme Bildirimi: Not başarıyla eklendiğinde ekranda 2 saniye boyunca kalacak "Notun başarıyla kaydedildi. Güzelliklerle dolu bir gün dileğiyle..." başarı (success) mesajını göster.
- Silme Bildirimi: Bir not silindiğinde "Notunuz silindi..." şeklinde başarı toast bildirimi fırlat.
- Hata Yönetimi: İstekler sırasında bir ağ veya sunucu hatası (Axios error) oluşursa ekrana toast warning olarak "Bir hata oluştu!" uyarısını bas.

**Çalışma dosyaları:** src/components/Post.jsx, src/components/PostForm.jsx, src/components/PostList.jsx, src/store/actions/index.js, src/store/reducers/index.js, src/store/store.js, src/App.jsx, src/main.jsx

---

## Gelişim Süreci ve Notlarım
Thunk ile Yan Etki (Side-Effect) Yönetimi: Redux Thunk sayesinde aksiyon üreticilerin düz bir obje yerine fonksiyon döndürebileceğini, bu sayede ağ istekleri gibi zamana bağlı asenkron süreçleri kusursuz yönetebileceğimi öğrendim.

Kalıcı Hafıza Senkronizasyonu: Reducer içindeki state değişim anlarını localStorage API yardımcılarıyla destekleyerek, sayfa yenilense dahi kullanıcı verilerinin tarayıcıda güvenle korunmasını sağladım.

Profesyonel Toast Entegrasyonu: Asenkron API süreçlerinin yanıt durumlarına (başarı/hata) göre özelleştirilmiş zaman ayarlı bildirim mekanizmaları kurarak arayüz etkileşim kalitesini artırdım.

## Kullanılan Teknolojiler
- React.js & React Router
- Core Redux & React-Redux
- Redux Thunk (Asenkron Middleware)
- Axios (HTTP Client)
- React Toastify