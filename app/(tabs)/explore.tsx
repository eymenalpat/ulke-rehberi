import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const infoCountries = ['Türkiye', 'Fransa', 'İtalya', 'Amerika Birleşik Devletleri', 'Japonya'];

export default function UsageScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Ionicons name="help-circle" size={64} color="#4F8EF7" style={{ marginBottom: 16 }} />
      <Text style={styles.title}>Uygulamayı Nasıl Kullanırım?</Text>
      <Text style={styles.text}>
        • Ana ekranda tüm ülkelerin bayraklarını ve isimlerini görebilirsin.
      </Text>
      <Text style={styles.text}>
        • Arama alanına ülke ismi yazarak hızlıca filtreleme yapabilirsin.
      </Text>
      <Text style={styles.text}>
        • Bir ülkeye tıkladığında detay ekranında başkent, nüfus, bölge, para birimi ve konuşulan dilleri görebilirsin.
      </Text>
      <Text style={styles.text}>
        • Favori eklemek için yıldız ikonuna dokunabilirsin. Favoriler sekmesinden eklediğin ülkelere hızlıca ulaşabilirsin.
      </Text>
      <Text style={styles.text}>
        • Yükleniyor göstergesi ve hata mesajları ile uygulama seni bilgilendirir.
      </Text>
      <Text style={styles.text}>
        • Sekmeler arasında kolayca geçiş yapabilirsin.
      </Text>
      <Text style={[styles.text, { color: '#4F8EF7', marginTop: 16 }]}>Not: Gezi Notları sekmesinde şu ülkeler için ekstra bilgi görebilirsin: {infoCountries.join(', ')}.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 18,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'left',
    width: '100%',
  },
});
