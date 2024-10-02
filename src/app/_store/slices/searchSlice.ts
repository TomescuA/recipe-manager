import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Recipe } from '@/app/_utils/types'

interface SearchState {
  data: Recipe[]
  isLoading: boolean
  error: string | null
}

const initialState: SearchState = {
  data: [],
  isLoading: false,
  error: null,
}

export const fetchSuggestions = createAsyncThunk<
  Recipe[],
  { query: string; number: string },
  { rejectValue: string }
>('search/fetchSuggestions', async (params, { rejectWithValue }) => {
  try {
    const queryString = new URLSearchParams(params).toString()
    const response = await fetch(`/api/recipes-proxy?${queryString}`)

    if (!response.ok) {
      throw new Error('Failed to fetch suggestions')
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

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clear: (state) => {
      state.data = []
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuggestions.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchSuggestions.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchSuggestions.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const { clear } = searchSlice.actions

export default searchSlice.reducer
