### English

# Task: Total Area Calculator

## Task Description
A carpenter needs to calculate the total surface area of rectangular wooden pieces to determine material costs. Each piece's dimensions are provided as a pair of numbers (height and width).

**Requirements:**
- Write a function named totalArea.
- The function should take an array of dimension arrays (e.g., [[h1, w1], [h2, w2]]) as a parameter.
- Calculate the area for each rectangle and return the cumulative total.

**Examples:**
- totalArea([[3,5], [2,8], [3,12]]) -> 67 (15 + 16 + 36)
- totalArea([[1,100], [2,10], [3,40]]) -> 240

---

## My Learning Journey & Reflection
This task focused on handling multi-dimensional arrays and mathematical summation in a loop.

Nested Data: I practiced accessing values inside nested arrays using double indices (e.g., arr[i][0] for height and arr[i][1] for width).

Alternative Loops: I explored the for...of loop as a cleaner way to iterate through collections, making the code more readable by destructuring the dimensions directly.

Real-World Logic: It was a great exercise in converting a physical problem (area calculation) into a programmatic solution.

---

## Tech Stack
- JavaScript (ES6+)
- Node.js (CommonJS)

------------------------------------------------------------------------------------------------------------------------------------------

### Türkçe

# Görev: Toplam Alan Hesabı

## Görev Tanımı
Bir marangozun hazırladığı dikdörtgen parçaların toplam yüzey alanını hesaplayarak malzeme giderini bulan bir uygulama geliştirilmesi istenmektedir. Her bir parçanın ölçüleri (yükseklik ve genişlik) birer sayı çifti olarak sunulmaktadır.

**Beklenenler:**
- totalArea adında bir fonksiyon yazılması.
- Fonksiyonun, ölçü dizilerini içeren bir listeyi ([[y1, g1], [y2, g2]]) parametre olarak alması.
- Her dikdörtgenin alanını hesaplayıp toplam alanı dönmesi.

**Örnekler:**
- totalArea([[3,5], [2,8], [3,12]]) -> 67
- totalArea([[1,100], [2,10], [3,40]]) -> 240

---

## Gelişim Süreci ve Notlarım
Bu görev, çok boyutlu dizilerle çalışma ve bir döngü içerisinde veri toplama mantığını kavramamı sağladı.

İç İçe Diziler: Dizinin her bir elemanının da bir dizi olduğu durumlarda verilere erişmeyi (örneğin: parca[0] ve parca[1]) deneyimledim.

Yazım Alternatifleri: Standart for döngüsünün yanı sıra, koleksiyonlar üzerinde daha temiz bir yazım sunan for...of döngüsünü araştırarak kodun okunabilirliğini nasıl artırabileceğimi öğrendim.

Gerçek Hayat Mantığı: Fiziksel bir problemi (alan hesabı) matematiksel bir algoritma ile koda dökme pratiği yaptım.

---

## Kullanılan Teknolojiler
- JavaScript (ES6+)
- Node.js (CommonJS)