import { combineReducers } from '@reduxjs/toolkit'

import favoriteReducer from '@/app/_store/slices/favoriteReducer'
import searchReducer from '@/app/_store/slices/searchSlice'
import recipesReducer from '@/app/_store/slices/recipesSlice'

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  search: searchReducer,
  recipes: recipesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
