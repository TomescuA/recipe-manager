import { combineReducers } from '@reduxjs/toolkit'

import favoriteReducer from '@/app/_store/slices/favoriteReducer'

const rootReducer = combineReducers({
  favorite: favoriteReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
