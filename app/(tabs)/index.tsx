import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import CountryCard from '../../components/CountryCard';
import SearchBar from '../../components/SearchBar';
import { fetchAllCountries } from '../../utils/api';
import { useFavoritesStore } from '../../store/favoritesStore';

export default function HomeScreen() {
  const [countries, setCountries] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchAllCountries();
        setCountries(data);
        setFiltered(data);
      } catch (e) {
        setError('Ülkeler yüklenirken hata oluştu.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (!search) {
      setFiltered(countries);
    } else {
      setFiltered(
        countries.filter((c) =>
          c.name.common.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, countries]);

  const handleFavorite = useCallback((country: any) => {
    if (isFavorite(country.cca3)) {
      removeFavorite(country.cca3);
    } else {
      addFavorite({
        cca3: country.cca3,
        name: country.name.common,
        flag: country.flags?.png || country.flags?.svg || '',
      });
    }
  }, [addFavorite, removeFavorite, isFavorite]);

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1, marginTop: 40 }} />;
  }
  if (error) {
    return <Text style={{ color: 'red', textAlign: 'center', marginTop: 40 }}>{error}</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <SearchBar value={search} onChangeText={setSearch} />
      {filtered.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 40 }}>Ülke bulunamadı.</Text>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.cca3}
          renderItem={({ item }) => (
            <CountryCard
              name={item.name.common}
              flag={item.flags?.png || item.flags?.svg || ''}
              isFavorite={isFavorite(item.cca3)}
              onPress={() => {}}
              onToggleFavorite={() => handleFavorite(item)}
            />
          )}
        />
      )}
    </View>
  );
}
