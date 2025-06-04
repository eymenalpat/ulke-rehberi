import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

interface CountryCardProps {
  name: string;
  flag: string;
  isFavorite: boolean;
  onPress: () => void;
  onToggleFavorite: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, flag, isFavorite, onPress, onToggleFavorite }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const favScale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, { toValue: 0.97, useNativeDriver: true }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
  };
  const handleFavPress = () => {
    Animated.sequence([
      Animated.spring(favScale, { toValue: 1.3, useNativeDriver: true }),
      Animated.spring(favScale, { toValue: 1, useNativeDriver: true }),
    ]).start();
    onToggleFavorite();
  };

  return (
    <Animated.View style={[styles.card, { transform: [{ scale }] }]}> 
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
      >
        <Image source={{ uri: flag }} style={styles.flag} />
        <Text style={styles.name}>{name}</Text>
        <Animated.View style={{ transform: [{ scale: favScale }] }}>
          <TouchableOpacity onPress={handleFavPress} style={styles.favoriteBtn}>
            <Ionicons name={isFavorite ? 'star' : 'star-outline'} size={26} color={isFavorite ? Colors.secondary : Colors.muted} />
          </TouchableOpacity>
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: Colors.primary,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 3,
  },
  flag: {
    width: 54,
    height: 36,
    borderRadius: 6,
    marginRight: 18,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  name: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
  },
  favoriteBtn: {
    padding: 6,
  },
});

export default CountryCard; 