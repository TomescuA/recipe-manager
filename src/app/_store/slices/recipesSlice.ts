import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../rootReducer'
import { Recipe } from '@/app/_utils/types'

interface RecipesState {
  recipes: Recipe[]
  loading: boolean
  error: string | null
}

const initialState: RecipesState = {
  recipes: [],
  loading: false,
  error: null,
}

export const fetchRecipes = createAsyncThunk<
  Recipe[],
  { query: string },
  { state: RootState; rejectValue: string }
>('recipes/fetchRecipes', async ({ query }, { rejectWithValue }) => {
  try {
    const response = await fetch(`/api/recipes-proxy?${query}`)

    if (!response.ok) {
      throw new Error('Failed to fetch recipes')
    }

    const data = await response.json()
    return data.results
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message)
    }
    return rejectWithValue('An unknown error occurred')
  }
})

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes(state, action: PayloadAction<Recipe[]>) {
      state.recipes = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchRecipes.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
        state.loading = false
        state.recipes = action.payload
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? 'Failed to fetch recipes'
      })
  },
})

export const { setRecipes } = recipesSlice.actions

export default recipesSlice.reducer
