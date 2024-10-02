import { combineReducers } from '@reduxjs/toolkit'

import favoriteReducer from '@/app/_store/slices/favoriteReducer'
import searchReducer from '@/app/_store/slices/searchSlice'
import recipesReducer from '@/app/_store/slices/recipesSlice'
import customRecipesSlice from './slices/customRecipesSlice'

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  search: searchReducer,
  recipes: recipesReducer,
  customRecipes: customRecipesSlice,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
