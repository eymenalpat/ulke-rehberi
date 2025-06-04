import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CountryCardProps {
  name: string;
  flag: string;
  isFavorite: boolean;
  onPress: () => void;
  onToggleFavorite: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, flag, isFavorite, onPress, onToggleFavorite }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: flag }} style={styles.flag} />
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity onPress={onToggleFavorite} style={styles.favoriteBtn}>
        <Ionicons name={isFavorite ? 'star' : 'star-outline'} size={24} color={isFavorite ? '#FFD700' : '#888'} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  flag: {
    width: 48,
    height: 32,
    borderRadius: 4,
    marginRight: 16,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  favoriteBtn: {
    padding: 4,
  },
});

export default CountryCard; 