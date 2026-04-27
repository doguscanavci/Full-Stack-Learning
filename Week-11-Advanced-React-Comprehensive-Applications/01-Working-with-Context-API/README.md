### English

# Task: Day Project - Book Store Refactoring with Context API

## Task Description
As an experienced developer in your company, you are acting as a "buddy" (mentor) to a newly hired intern. Together, you are assigned to build a comprehensive Book Store e-commerce application. The intern successfully drafted the layout and component structure using standard local useState hooks. However, to prevent prop-drilling as the app scales, your task is to refactor the entire state architecture using React's native Context API, while the intern pairs with you to learn the pattern.

**Requirements:**
- Product Context Implementation:
- Create src/contexts/ProductContext.jsx. Initialize ProductContext using createContext.
- Build and export a functional ProductContextProvider component that maintains a products state array and feeds it directly into the context provider value wrapper.
- Wrap the application layout root within App.jsx using this new provider. Completely strip away obsolete props being passed down to the <Products /> component tree.
- Consume the shared database inside Products.jsx utilizing the useContext(ProductContext) hook.
- Cart Context & Action Pipeline:
- Create src/contexts/CartContext.jsx. Initialize and export CartContext.
- Build a CartContextProvider wrapping a local cart state array alongside functional handlers for addItem (pushing a selected book into the basket) and removeItem (filtering a book asset out by its identifier). Pass cart, addItem, and removeItem through the provider value.
- Nest the application nodes inside App.jsx within this second provider layer. Wipe out top-level props previously sent to <Navigation /> and <ShoppingCart />.
- Consume context across the ecosystem:
- Navigation.jsx & ShoppingCart.jsx: Read the global cart array to count items and display overall statistics.
- ShoppingCartItem.jsx: Extract the removeItem trigger to allow users to evict specific row entries.
- Products.jsx: Extract the addItem handler and map it to the "Add to cart" interactive button.
- State Persistence (localStorage Integration):
- Bind the global basket state to browser memory using the custom useLocalStorage hook located under src/hooks/useLocalStorage.jsx.
- Persist all reactive modifications using the explicit storage key parameter "s11d1".

**Working files:** src/contexts/CartContext.jsx, src/contexts/ProductContext.jsx, src/hooks/useLocalStorage.jsx, src/components/Navigation.jsx, src/components/Products.jsx, src/components/ShoppingCart.jsx, src/components/ShoppingCartItem.jsx, src/App.jsx  

---

## My Learning Journey & Reflection
Defeating Prop-Drilling: I experienced how Context API completely frees intermediate components from acting as mere data-passers, keeping component interfaces modular and clean.

Context Modularization: Practiced decoupling data domains by structuring independent semantic context boundaries (Products vs. Basket/Cart) instead of relying on a singular bloated state object.

Custom Hooks Integration: Enhanced my engineering stack by combining core React state providers with custom persistence hooks (useLocalStorage), resulting in zero-loss state reloads for end users.

---

## Tech Stack
- React.js (Context API: createContext, useContext, Custom Providers)
- JavaScript (ES6+)
- LocalStorage Persistence Architecture

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Gün Projesi - Context API ile Kitap Alışveriş Sitesi Dönüşümü

## Görev Tanımı
Şirkette stajyer bir geliştiriciye rehberlik (buddy) yaptığın bu senaryoda, birlikte kapsamlı bir Kitap Alışveriş Sitesi projesi geliştiriyorsunuz. Stajyer arkadaşın uygulamanın arayüzünü ve temel elemanlarını useState kullanarak belirli bir seviyeye getirdi. Projenin gelecekte daha fazla büyüyüp karmaşıklaşacağını öngörerek, prop-drilling (katmanlı veri taşıma) kirliliğini önlemek amacıyla tüm mimariyi React'in yerel Context API yapısına dönüştürüyorsun. Stajyerin de bu süreci yanından izleyerek kıdemli bir yazılımcının refactoring yaklaşımını öğrenecek.

**Beklenenler:**
- Ürün Yönetimi (Product Context):
- src/contexts/ProductContext.jsx dosyasını oluştur. createContext fonksiyonunu import ederek ProductContext yapısını kur.
- İçinde products state'ini barındıran ve bunu value olarak dışarıya açan bir ProductContextProvider bileşeni yaz ve export et.
- App.jsx içinde uygulamayı bu yeni sağlayıcı (provider) ile sarmala. Eski halinde <Products /> bileşenine yollanan tüm yapay propları temizle.
- Products.jsx bileşeni içinde useContext(ProductContext) kancasını (hook) kullanarak ürün listesini dinamik olarak çek.
- Sepet Yönetimi (Cart Context):
- src/contexts/CartContext.jsx dosyasını oluştur, CartContext nesnesini kur ve dışarıya aç.
- İçinde cart state'ini, sepet ekleme (addItem) ve sepetten çıkarma (removeItem) metotlarını barındıran bir CartContextProvider kurgula. Bu metotları ve sepet dizisini value olarak dağıt.
- App.jsx içinde uygulamayı bu sepet sağlayıcısıyla da sarmala. <Navigation /> ve <ShoppingCart /> bileşenlerine üstten geçilen eski propları tamamen kaldır.
- Tüketim (Consume) noktalarını bağla:
- Navigation.jsx ve ShoppingCart.jsx: Küresel cart bilgisini çekerek sepet sayısını ve özetini göster.
- ShoppingCartItem.jsx: useContext ile removeItem fonksiyonunu alıp silme butonuna bağla.
- Products.jsx: addItem metodunu context'ten çekerek "Add to cart" butonunun aktif çalışmasını sağla.
- Kalıcı Hafıza Entegrasyonu (localStorage):
- Sepet verilerinin sayfa yenilense dahi kaybolmaması için src/hooks/useLocalStorage.jsx altında yer alan özel hook'u kullan.
- Sepet state'ini yerel hafızaya kaydederken benzersiz anahtar kelime olarak "s11d1" değerini ata.

**Çalışma dosyaları:** src/contexts/CartContext.jsx, src/contexts/ProductContext.jsx, src/hooks/useLocalStorage.jsx, src/components/Navigation.jsx, src/components/Products.jsx, src/components/ShoppingCart.jsx, src/components/ShoppingCartItem.jsx, src/App.jsx  

---

## Gelişim Süreci ve Notlarım
Prop-Drilling Kirliliğine Son: Context API sayesinde ara bileşenleri veri taşıma hamallığından kurtarmayı, bileşen arayüzlerini bağımsız ve tertemiz tutmayı pekiştirdim.

Modüler Context Tasarımı: Tüm verileri tek bir devasa global eyalete yığmak yerine, sorumluluk alanlarına göre (Ürünler ve Sepet) bağımsız context yapıları kurarak modülerliği artırdım.

Özel Kancalar (Custom Hooks) ile Uyum: Sağlayıcı (Provider) mimarilerini özel tarayıcı hafıza kancalarıyla (useLocalStorage) evlendirerek kullanıcıya kesintisiz bir eyalet deneyimi sunmayı uyguladım.

---

## Kullanılan Teknolojiler
- React.js (Context API: createContext, useContext, Custom Providers)
- JavaScript (ES6+)
- LocalStorage Kalıcı Veri Yönetimi