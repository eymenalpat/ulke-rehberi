import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { fetchCountryByCode } from '../utils/api';
import { useFavoritesStore } from '../store/favoritesStore';
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen() {
  const { code } = useLocalSearchParams<{ code: string }>();
  const [country, setCountry] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchCountryByCode(code!);
        setCountry(data);
      } catch (e) {
        setError('Ülke detayları yüklenemedi.');
      } finally {
        setLoading(false);
      }
    };
    if (code) load();
  }, [code]);

  const handleFavorite = useCallback(() => {
    if (!country) return;
    if (isFavorite(country.cca3)) {
      removeFavorite(country.cca3);
    } else {
      addFavorite({
        cca3: country.cca3,
        name: country.name.common,
        flag: country.flags?.png || country.flags?.svg || '',
      });
    }
  }, [country, isFavorite, addFavorite, removeFavorite]);

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1, marginTop: 40 }} />;
  }
  if (error || !country) {
    return <Text style={{ color: 'red', textAlign: 'center', marginTop: 40 }}>{error || 'Ülke bulunamadı.'}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: country.flags?.png || country.flags?.svg || '' }} style={styles.flag} />
      <Text style={styles.name}>{country.name.common}</Text>
      <TouchableOpacity onPress={handleFavorite} style={styles.favoriteBtn}>
        <Ionicons name={isFavorite(country.cca3) ? 'star' : 'star-outline'} size={28} color={isFavorite(country.cca3) ? '#FFD700' : '#888'} />
      </TouchableOpacity>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Başkent:</Text>
        <Text style={styles.value}>{country.capital?.[0] || '-'}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Nüfus:</Text>
        <Text style={styles.value}>{country.population?.toLocaleString() || '-'}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Bölge:</Text>
        <Text style={styles.value}>{country.region || '-'}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Para Birimi:</Text>
        <Text style={styles.value}>{country.currencies ? Object.values(country.currencies).map((c: any) => c.name).join(', ') : '-'}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Diller:</Text>
        <Text style={styles.value}>{country.languages ? Object.values(country.languages).join(', ') : '-'}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  flag: {
    width: 120,
    height: 80,
    borderRadius: 8,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  favoriteBtn: {
    marginBottom: 16,
  },
  infoBox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  label: {
    fontWeight: '500',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
  },
}); 