import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FavoriteState {
  elements: any[]
}

const initialState: FavoriteState = {
  elements: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<any>) {
      const isAlreadyFavorite = state.elements.some((fav) => fav.id === action.payload.id)
      if (!isAlreadyFavorite) {
        state.elements.push(action.payload)
      }
    },
    removeFavorite(state, action: PayloadAction<any>) {
      state.elements = state.elements.filter((fav) => fav.id !== action.payload.id)
    },
  },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
