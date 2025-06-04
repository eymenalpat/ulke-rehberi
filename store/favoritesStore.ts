import { create } from 'zustand';

interface FavoriteCountry {
  cca3: string;
  name: string;
  flag: string;
}

interface FavoritesState {
  favorites: FavoriteCountry[];
  addFavorite: (country: FavoriteCountry) => void;
  removeFavorite: (cca3: string) => void;
  isFavorite: (cca3: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],
  addFavorite: (country) =>
    set((state) => ({
      favorites: [...state.favorites, country],
    })),
  removeFavorite: (cca3) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav.cca3 !== cca3),
    })),
  isFavorite: (cca3) => get().favorites.some((fav) => fav.cca3 === cca3),
})); 