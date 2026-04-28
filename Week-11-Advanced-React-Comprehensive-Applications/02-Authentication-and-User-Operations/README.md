### English

# Task: Day Project - Friends Database and Authentication Flow

## Task Description
An enthusiastic new developer from the Workintech community has reached out to you for guidance on building a specialized social networking platform. While they successfully initiated the basic layouts, they lack the implementation knowledge required for token-based authentication, private routing, and secure API networking. Your goal is to guide them by refactoring the codebase to introduce a global Authentication Context, customized storage persistence, dynamic header states, and restricted route protection.

**Requirements:**
- Routing Architecture: Wrap the root node with BrowserRouter inside main.jsx. Configure declarative page mapping inside App.jsx:
- /login rendering <LoginForm />
- /friends and / rendering <FriendsList />
- /friends/add rendering <AddFriend />
- Login Pipeline & Controlled Form: Build a controlled input structure within LoginForm.jsx. Embed placeholders "Username" and "Password" respectively alongside a "SUBMIT" trigger button. Upon submission, POST credentials to the auth endpoint: https://nextgen-project.onrender.com/api/s11d2/login.
- Global Authentication Context:
- Create src/contexts/AuthContext.jsx initializing an AuthContext and an AuthContextProvider.
- Centralize states like isLoggedIn, authUserInfo (token registry), and the processing async POST submission routine. Inject them cleanly into the provider values. Wrap the application tree with this provider inside App.jsx.
- State Persistence & Storage: Track user session headers safely across page refreshes by connecting the local useLocalStorage custom hook under the designated storage key "s11d2".
- Dynamic Navigation States: Restructure Header.jsx. If the user is unauthenticated, expose only the LOGIN navigation button. Once a valid token payload maps to active state, display FRIENDS LIST, ADD FRIEND, and LOGOUT navigation links.
- Authorized Networking Requests:
- In FriendsList.jsx, execute an authorized GET call targeting https://nextgen-project.onrender.com/api/s11d2/friends. Inject the token payload securely under the Authorization header property.
- In AddFriend.jsx, patch the outbound payload generation to forward this exact authentication token to avoid access restriction errors.
- Security Shield (PrivateRoute): Design a wrapper component named PrivateRoute.jsx. Inspect current global authentication statuses. If an unverified client attempts to breach /friends or /friends/add, intercept the pipeline and redirect them straight to the /login portal.

**Working files:** src/contexts/AuthContext.jsx, src/components/PrivateRoute.jsx, src/components/AddFriend.jsx, src/components/FriendsList.jsx, src/components/Header.jsx, src/components/LoginForm.jsx, src/App.jsx, src/main.jsx

---

## My Learning Journey & Reflection
Token-Based Session Guards: I learned how modern web networks secure access tokens to authenticate detached UI components against protected cloud servers.

Route Interception Logic: Mastered creating conditional route shields (PrivateRoute) to secure confidential layouts from unauthorized guests, bolstering overall platform architecture.

Contextual Security Centers: Experienced utilizing Context API as an access-control gateway, propagating reactive conditional states downward across layout elements like navigation menus seamlessly.

---

## Tech Stack
- React.js (Context API)
- React Router (Route Guards, Redirects)
- Axios (Authorized Header Interceptors)
- Browser LocalStorage API

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Gün Projesi - Arkadaş Veritabanı ve Kimlik Doğrulama Akışı

## Görev Tanımı
Workintech topluluğuna yeni katılan heyecanlı bir yazılımcı adayı, hayalindeki arkadaşlık ve mesajlaşma platformunu kurmak için senden destek talep etti. Temel tasarımları hazırlamış olsa da token tabanlı kimlik doğrulama, korumalı rotalar ve güvenli API istekleri konularında eksikleri bulunuyor. Ona rehberlik ederek projenin eyalet yönetimini merkezi bir AuthContext yapısına taşıyacak, tarayıcı hafızasını entegre edecek, dinamik header kontrollerini kuracak ve yetkisiz erişimleri engelleyen bir PrivateRoute kalkanı inşa edeceksin.

**Beklenenler:**
- Yönlendirme (Routing) Altyapısı: main.jsx içinde uygulamayı BrowserRouter ile sarmala. App.jsx içinde deklaratif rota haritasını çıkar:
- /login rotasında <LoginForm /> bileşeni,
- /friends ve / rotalarında <FriendsList /> bileşeni,
- /friends/add rotasında <AddFriend /> bileşeni çalışmalı.
- Giriş Formu (LoginForm): LoginForm.jsx içinde kontrollü input yapıları oluştur. Kullanıcı adı için "Username", şifre için "Password" placeholder'larını ekle ve buton metnini "SUBMIT" yap. Form gönderildiğinde verileri https://nextgen-project.onrender.com/api/s11d2/login adresine POST et.
- Merkezi Kimlik Doğrulama Merkezi (AuthContext):
- src/contexts/AuthContext.jsx dosyasını oluşturup AuthContext ve AuthContextProvider bileşenlerini yaz.
- Oturum durumu (isLoggedIn), token ve kullanıcı bilgileri (authUserInfo) ile giriş/çıkış fonksiyonlarını bu merkezde toplayıp value olarak dağıt. App.jsx içinde tüm uygulamayı bu sağlayıcı ile sarmala.
- Kalıcı Oturum Yönetimi: Sayfa yenilendiğinde giriş durumunun kaybolmaması için hooks klasöründeki useLocalStorage kancasını "s11d2" anahtarıyla entegre et.
- Dinamik Menü Yönetimi: Header.jsx bileşenini yetki durumuna göre koşullandır. Kullanıcı giriş yapmadıysa sadece LOGIN butonu gözüksün; giriş yaptıysa FRIENDS LIST, ADD FRIEND ve LOGOUT butonları listelensin ve ilgili sayfalara yönlendirsin.
- Korumalı API İstekleri (Authorization Header):
- FriendsList.jsx içinde https://nextgen-project.onrender.com/api/s11d2/friends adresine GET isteği atarken, isteğin header kısmına Authorization anahtarı ile girişten aldığın token bilgisini ekle ve gelen listeyi ekrana bas.
- AddFriend.jsx içinde yeni arkadaş ekleme isteği atılırken de aynı şekilde header'a token bilgisini eklemeyi unutma.
- Rota Güvenlik Kalkanı (PrivateRoute): component klasörü içinde PrivateRoute.jsx adında bir korumalı rota bileşeni yaz. Eğer kullanıcı giriş yapmamışsa, korumalı sayfalara (/friends, /friends/add) erişmeye çalıştığında onu otomatik olarak /login sayfasına yönlendir.

**Çalışma dosyaları:** src/contexts/AuthContext.jsx, src/components/PrivateRoute.jsx, src/components/AddFriend.jsx, src/components/FriendsList.jsx, src/components/Header.jsx, src/components/LoginForm.jsx, src/App.jsx, src/main.jsx

---

## Gelişim Süreci ve Notlarım
Token Tabanlı Oturum Güvenliği: Modern web uygulamalarında sunucu güvenliğinin nasıl JWT (JSON Web Token) ile sağlandığını, istemci tarafında bu jetonların istek başlıklarına (Authorization Headers) nasıl eklendiğini kavradım.

Rotaların Yetkilendirilmesi: Giriş yapmamış kullanıcıların gizli sayfalara erişmesini engelleyen ve onları güvenli limana püskürten ara katman rota koruma (PrivateRoute) mantığını başarıyla uyguladım.

Durumsal Arayüz Şekillendirme: Context mimarisini bir güvenlik kapısı gibi kullanarak, kullanıcının oturum durumuna göre menü elemanlarını dinamik olarak gizleme ve gösterme pratiklerimi pekiştirdim.

---

## Kullanılan Teknolojiler
- React.js (Context API)
- React Router (PrivateRoute, Rota Kontrolleri)
- Axios (Korumalı İstek Başlıkları)
- Browser LocalStorage API