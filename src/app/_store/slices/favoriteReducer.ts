import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Recipe } from '@/app/_utils/types'

interface FavoriteState {
  elements: Recipe[]
}

const initialState: FavoriteState = {
  elements: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Recipe>) {
      const isAlreadyFavorite = state.elements.some((fav) => fav.id === action.payload.id)
      if (!isAlreadyFavorite) {
        state.elements.push(action.payload)
      }
    },
    removeFavorite(state, action: PayloadAction<{ id: string }>) {
      state.elements = state.elements.filter((fav) => fav.id !== action.payload.id)
    },
  },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
