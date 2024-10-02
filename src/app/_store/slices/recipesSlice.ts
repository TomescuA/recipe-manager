import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../rootReducer'

interface RecipesState {
  recipes: any[]
  loading: boolean
  error: string | null
}

const initialState: RecipesState = {
  recipes: [],
  loading: false,
  error: null,
}

export const fetchRecipes = createAsyncThunk<
  any[],
  { query: string },
  { state: RootState; rejectValue: string }
>('recipes/fetchRecipes', async ({ query }, { getState, rejectWithValue }) => {
  try {
    const response = await fetch(`/api/recipes-proxy?${query}`)

    if (!response.ok) {
      throw new Error('Failed to fetch recipes')
    }

    const data = await response.json()
    return data.results
  } catch (error: any) {
    return rejectWithValue(error.message)
  }
})

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes(state, action: PayloadAction<any[]>) {
      state.recipes = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchRecipes.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false
        state.recipes = action.payload
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { setRecipes } = recipesSlice.actions

export default recipesSlice.reducer
