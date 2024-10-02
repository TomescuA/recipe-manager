import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Recipe {
  instructions: string
  cookingTime: number
  id: string
  title: string
  image: string
  description: string
  ingredients: string
  dietaryLabels: string[]
}

interface RecipesState {
  recipes: Recipe[]
}

const initialState: RecipesState = {
  recipes: [],
}

const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export const customRecipesSlice = createSlice({
  name: 'customRecipes',
  initialState,
  reducers: {
    createRecipe: (state, action: PayloadAction<Omit<Recipe, 'id'>>) => {
      const newRecipe: Recipe = { id: generateId(), ...action.payload }
      state.recipes.push(newRecipe)
    },
    updateRecipe: (state, action: PayloadAction<Recipe>) => {
      const { id, ...updatedData } = action.payload
      const recipeIndex = state.recipes.findIndex((recipe) => recipe.id === id)
      if (recipeIndex !== -1) {
        state.recipes[recipeIndex] = { ...state.recipes[recipeIndex], ...updatedData }
      }
    },
    deleteRecipe: (state, action: PayloadAction<string>) => {
      state.recipes = state.recipes.filter((recipe) => recipe.id !== action.payload)
    },
  },
})

export const { createRecipe, updateRecipe, deleteRecipe } = customRecipesSlice.actions

export default customRecipesSlice.reducer
