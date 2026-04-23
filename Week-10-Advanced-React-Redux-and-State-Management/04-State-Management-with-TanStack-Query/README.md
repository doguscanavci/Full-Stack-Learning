### English

# Task: Day Project - Contacts App Server State with TanStack Query

## Task Description
The company's internal Contacts application suffers from severe UX sync synchronization flaws: newly added contacts do not appear in the sidebar registry, and deleted contacts persist in the layout until a manual browser refresh occurs. To manage server state professionally, eliminate obsolete useEffect data-fetching loops, and configure automated cache revalidation, you will integrate @tanstack/react-query.

**Requirements:**
- Provider Injection: Wrap the application node hierarchy with QueryClientProvider and feed it a globally configured QueryClient instance inside App.jsx.
- Refactoring Fetches (Queries):
- In SideBar.jsx, completely purge the legacy useEffect fetch hook. Replace it with a TanStack useQuery hook to request the entire contact registry.
- In Contact.jsx, look up the dynamic contactId param fetched from the URL path. Wipe out its useEffect block and map it to a parameterized useQuery containing a distinct dependency key array.
- State Mutations & Cache Invalidation:
- Implement a useMutation hook inside Contact.jsx to process contact deletions via API.
- Centralize custom Axios fetch/mutation helper utilities inside src/services/tanStack.js.
- CRITICAL UX SYNC: Upon successful mutations (adding a contact or deleting a contact), invoke queryClient.invalidateQueries to instantly force the sidebar cache to reload fresh data from the server.
- Routing Guardrails: Ensure that once a contact is successfully created through the form or permanently purged from the details page, the application triggers an immediate redirect back to the Home (/) route.

**Working files:** src/services/tanStack.js, src/components/SideBar.jsx, src/components/Form.jsx, src/components/Contact.jsx, src/App.jsx, src/main.jsx

---

## My Learning Journey & Reflection
Client State vs. Server State: I learned to distinguish between local UI states and remote server states, realizing why dedicated caching tools outperform traditional local store mechanisms for API tracking.

Cache Invalidation: Mastered the invalidateQueries pattern to trigger smart UI updates seamlessly across detached layout nodes (like syncing details mutations directly into a sidebar) without full page reloads.

Declarative Fetch Declarations: Experienced writing much cleaner components by stripping away verbose useState, useEffect, and custom error/loading flags in favor of TanStack Query's native status states.

---

## Tech Stack
- React.js
- TanStack Query (@tanstack/react-query)
- Axios / REST API
- React Router

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Gün Projesi - TanStack Query ile Fihrist Uygulaması

## Görev Tanımı
Şirket içinde kullanılan fihrist (Contacts) uygulamasında ciddi bir senkronizasyon ve kullanıcı deneyimi (UX) hatası tespit edilmiştir: Yeni bir kişi eklendiğinde soldaki yan menü güncellenmemekte, bir kişi silindiğinde ise manuel sayfa yenilenene kadar listeden düşmemektedir. Sunucu durumunu (server state) profesyonelce yönetmek, bileşenleri hantal useEffect döngülerinden kurtarmak ve otomatik önbellek yönetimini kurgulamak adına projeye @tanstack/react-query entegrasyonu yapıyorsun.

**Beklenenler:**
- Provider Kurulumu: App.jsx dosyası içinde uygulamanın kök dizinini QueryClientProvider ile sarmala ve oluşturduğun QueryClient örneğini (instance) buraya bağla.
- Veri Çekme Mantığının Dönüşümü (Queries):
- SideBar.jsx içindeki eski useEffect veri çekme bloklarını tamamen sil. Tüm kişileri sunucudan çekmek için TanStack useQuery kurgusunu ekle.
- Contact.jsx içinde, url rotasından aldığın dinamik contactId parametresine ait kişi detay verisini çekmek için yine useEffect yapısını kaldırıp, parametrik bir useQuery yapısı kur.
- Veri Değişimi ve Önceki Önbelleği Geçersiz Kılma (Mutations):
- Contact.jsx içinde kişiyi silme işlemini tetikleyecek useMutation yapısını entegre et.
- İlgili API istek fonksiyonlarını ve ayarlarını temiz bir şekilde src/services/tanStack.js dosyası altında topla.
- UX SENKRONİZASYONU: Yeni kişi eklendiğinde veya mevcut kişi silindiğinde, yan menünün anında güncellenmesi için queryClient.invalidateQueries metodunu kullanarak ilgili sorgu önbelleğini (cache) geçersiz kıl ve otomatik tetiklenmesini sağla.
- Yönlendirme Kuralları: Yeni kişi ekleme işlemi başarılı olduğunda veya bir kişi detay sayfasından silindiğinde kullanıcıyı anında Ana Sayfaya (Home rotasına) yönlendir.

**Çalışma dosyaları:** src/services/tanStack.js, src/components/SideBar.jsx, src/components/Form.jsx, src/components/Contact.jsx, src/App.jsx, src/main.jsx

---

## Gelişim Süreci ve Notlarım
Client State ve Server State Ayrımı: Yerel arayüz durumları ile uzak sunucudan gelen verilerin yönetim modelleri arasındaki farkı kavradım; uzak veri yönetiminde caching (önbellekleme) kütüphanelerinin neden Redux gibi araçlara göre daha optimize çözümler sunduğunu deneyimledim.

Önbellek Geçersiz Kılma (Cache Invalidation): Bir mutasyon (ekleme/silme) gerçekleştiğinde, tamamen bağımsız bir bileşendeki (Sidebar) veriyi otomatik tazelemek için invalidateQueries stratejisini kullanmayı öğrendim.

Deklaratif Veri Yönetimi: Bileşenleri kalabalık useState, useEffect, loading ve error state satırlarından arındırarak TanStack Query'nin kendi durum değişkenleri sayesinde çok daha temiz kod yazmayı alışkanlık haline getirdim.

## Kullanılan Teknolojiler
- React.js
- TanStack Query (@tanstack/react-query)
- Axios / REST API
- React Router