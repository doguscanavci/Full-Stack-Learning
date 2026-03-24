### English

# Task 4: Day Project - Debugging Gonderiler Component

## Task Description
In a collaborative environment, accidental code changes can break the UI. An intern has modified the Gonderiler component, and now the posts are not appearing correctly. Your job is to restore functionality by fixing the iteration logic.

**Requirements:**
- Fix Iteration: Inspect the .map() method in Gonderiler.jsx. Ensure it correctly iterates over the state array and returns a Gonderi component for each item.
- Key Prop: Assign a unique key attribute to the Gonderi component inside the loop to fix console errors and optimize rendering.
- Component Integrity: Verify that Gonderi.jsx and BegenBolumu.jsx are receiving and using their props correctly after the map fix.

**Working files:** src/components/Gonderiler/Gonderiler.jsx, src/components/Gonderiler/Gonderi.jsx, src/components/Gonderiler/BegenBolumu.jsx

---

## My Learning Journey & Reflection
Debugging Collections: I learned how to troubleshoot rendering issues in lists. I realized that if the .map() function doesn't return anything, the UI will remain blank regardless of the data quality.
The Power of Keys: I understood that key props help React identify which items have changed, been added, or removed, which is vital for performance and state stability.

---

## Tech Stack
- React.js (Lists & Keys)
- JavaScript (Array.map)
- Debugging & Code Review

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev 4: Gün Projesi - Gönderiler Component'inde Bug Tamiri

## Görev Tanımı
Takım çalışmasında bazen izinler hatalı ayarlanabilir ve ekibe yeni katılan biri yanlışlıkla çalışan kodları bozabilir. Stajyerin yaptığı hatalı değişiklik sonucu gönderiler şu an render edilmiyor. Senin görevin bu döngü mantığını düzelterek uygulamayı eski haline getirmek.

**Beklenenler:**
- Döngü Tamiri: Gonderiler.jsx içindeki .map() metodunu incele. Her bir öğe için Gonderi bileşeninin doğru şekilde return edildiğinden (döndürüldüğünden) emin ol.
- Key Attribute: Map edilen elemente benzersiz bir key ekleyerek konsol hatalarını temizle.
- Bileşen Kontrolü: Döngü düzeldikten sonra verilerin Gonderi.jsx ve BegenBolumu.jsx bileşenlerine doğru akıp akmadığını teyit et.

**Çalışma dosyaları:** src/components/Gonderiler/Gonderiler.jsx, src/components/Gonderiler/Gonderi.jsx, src/components/Gonderiler/BegenBolumu.jsx

---

## Gelişim Süreci ve Notlarım
Koleksiyonlarda Hata Ayıklama: Listelerin neden render edilmediğini analiz etmeyi öğrendim. .map() fonksiyonunda return yazılmadığında, veri ne kadar doğru olursa olsun arayüzün boş kalacağını fark ettim.
Key Propunun Önemi: key prop'unun sadece bir uyarıyı susturmak için değil, React'in DOM güncellemelerini verimli yapması için ne kadar kritik olduğunu öğrendim.

---

## Kullanılan Teknolojiler
- React.js (Listeler & Key'ler)
- JavaScript (Array.map)
- Hata Ayıklama (Debugging)