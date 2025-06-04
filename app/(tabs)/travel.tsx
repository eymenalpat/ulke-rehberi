import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFavoritesStore } from '../../store/favoritesStore';
import CountryCard from '../../components/organisms/CountryCard';

// Örnek turistik yer ve notlar
const countryTravelInfo: Record<string, { place: string; note: string }> = {
  TUR: { place: 'Kapadokya', note: 'Balon turları ve peri bacaları ile ünlü.' },
  FRA: { place: 'Eyfel Kulesi', note: 'Paris\'in simgesi, gece ışık gösterileriyle büyüleyici.' },
  ITA: { place: 'Kolezyum', note: 'Roma\'nın tarihi arenası.' },
  USA: { place: 'Grand Canyon', note: 'Doğal güzellikleriyle ünlü devasa kanyon.' },
  JPN: { place: 'Fuji Dağı', note: 'Japonya\'nın en yüksek dağı ve simgesi.' },
};

export default function TravelNotesScreen() {
  const { favorites } = useFavoritesStore();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {favorites.length === 0 ? (
        <Text style={styles.empty}>Favorilere ülke ekleyerek gezi notlarını görebilirsin.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.cca3}
          renderItem={({ item }) => {
            const info = countryTravelInfo[item.cca3] || { place: '-', note: 'Bilgi eklenmedi.' };
            return (
              <View style={styles.card}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.label}>Para Birimi:</Text>
                <Text style={styles.value}>{/* Para birimi detay ekranında API'den alınabilir */}Detay ekranda görebilirsin</Text>
                <Text style={styles.label}>En Turistik Yer:</Text>
                <Text style={styles.value}>{info.place}</Text>
                <Text style={styles.label}>Kısa Not:</Text>
                <Text style={styles.value}>{info.note}</Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f7f7f7',
    margin: 12,
    borderRadius: 10,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  label: {
    fontWeight: '500',
    marginTop: 6,
  },
  value: {
    fontSize: 15,
    marginBottom: 2,
  },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    color: '#888',
    fontSize: 16,
  },
}); 