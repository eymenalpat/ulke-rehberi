import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CountryCard from '../../components/CountryCard';
import { useFavoritesStore } from '../../store/favoritesStore';
import { useRouter } from 'expo-router';

export default function FavoritesScreen() {
  const { favorites, removeFavorite, isFavorite } = useFavoritesStore();
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      {favorites.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 40 }}>
          Henüz favori ülke eklemediniz.
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.cca3}
          renderItem={({ item }) => (
            <CountryCard
              name={item.name}
              flag={item.flag}
              isFavorite={isFavorite(item.cca3)}
              onPress={() => router.push({ pathname: '/detail', params: { code: item.cca3 } })}
              onToggleFavorite={() => removeFavorite(item.cca3)}
            />
          )}
        />
      )}
    </View>
  );
} 