import { fetchRecipesList } from '@/app/recipes/api'
import RecipesPageClient from '@/app/recipes/RecipesPageClient'
import React from 'react'

export default async function Recipes(): Promise<JSX.Element> {
  const initialRecipes = await fetchRecipesList()

  return <RecipesPageClient initialRecipes={initialRecipes} />
}
