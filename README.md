# Dünya Rehberi Mobil Uygulaması

## Proje Açıklaması
Dünya Rehberi, dünya üzerindeki ülkelerin güncel bilgilerini kullanıcıya sunan, hem görsel (bayrak) hem de metinsel içerik sağlayan bir mobil uygulamadır. Kullanıcılar ülkeleri listeleyebilir, arayabilir, detaylarını görebilir ve favorilerine ekleyebilir. Ayrıca favori ülkeler için gezginlere yönelik kısa notlar ve öneriler de sunulmaktadır. Uygulama, Expo ve React Native ile geliştirilmiş olup, modern ve kullanıcı dostu bir arayüze sahiptir.

## Kullanılan API
Tüm ülke verileri [REST Countries API](https://restcountries.com/) üzerinden çekilmektedir. API'den alınan bilgiler şunlardır:
- Ülke adı
- Bayrak
- Ülke kodu
- Başkent
- Nüfus
- Bölge
- Para birimi
- Konuşulan diller

API Örnekleri:
- Tüm ülkeler: `https://restcountries.com/v3.1/all?fields=name,flags,cca3,capital,population,region`
- Ülke detayı: `https://restcountries.com/v3.1/alpha/{code}`

## Uygulamanın Nasıl Çalıştığı

### 1. Ülkeler Listesi
- Ana ekranda tüm ülkeler bayrak ve isimleriyle listelenir.
- Arama alanı ile ülke ismine göre filtreleme yapılabilir.
- Her ülke kartında favori ekle/çıkar butonu bulunur.
- Bir ülkeye tıklandığında detay ekranına geçiş yapılır.

### 2. Detay Ekranı
- Seçilen ülkenin başkenti, nüfusu, bölgesi, para birimi ve konuşulan dilleri gösterilir.
- Ülkenin bayrağı büyük olarak görüntülenir.
- Favori ekleme/çıkarma işlemi yapılabilir.

### 3. Favoriler
- Kullanıcı favorilere eklediği ülkeleri ayrı bir sekmede görebilir.
- Favori ülkelerden detay ekranına geçiş yapılabilir.

### 4. Gezi Notları
- Favorilere eklenen bazı ülkeler için gezginlere yönelik kısa bilgiler (en turistik yer, kısa not) gösterilir.
- Hangi ülkeler için bilgi olduğu kullanım sekmesinde belirtilmiştir.

### 5. Kullanım Rehberi
- Uygulamanın nasıl kullanılacağına dair açıklamalar ve ipuçları bu sekmede yer alır.

### 6. Kullanıcı Geri Bildirimleri
- Yükleniyor göstergesi ve hata mesajları ile kullanıcı bilgilendirilir.
- Boş liste durumunda bilgilendirici mesajlar gösterilir.

## Atomic Design Component Yapısı
- **/components/atoms:** Temel, küçük ve tekrar kullanılabilir bileşenler (ör. Icon, Text)
- **/components/molecules:** Birkaç atomun birleşiminden oluşan bileşenler (ör. SearchBar)
- **/components/organisms:** Moleküllerin birleşimiyle oluşan daha büyük bileşenler (ör. CountryCard)

## Kurulum ve Çalıştırma
1. Bu repoyu klonlayın:
   ```bash
   git clone https://github.com/kullaniciadi/ulke-rehberi.git
   cd ulke-rehberi
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Expo geliştirme sunucusunu başlatın:
   ```bash
   npx expo start
   ```
4. QR kodu Expo Go uygulaması ile okutun veya simülatörde açın.

## Katkı
Pull request ve issue açarak katkıda bulunabilirsiniz.

---

**Hazırlayan:** [Senin Adın]
