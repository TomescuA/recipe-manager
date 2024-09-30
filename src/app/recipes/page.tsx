import { fetchRecipesList } from '@/app/recipes/api'
import RecipesPageClient from '@/app/recipes/RecipesPageClient'
import React from 'react'

export default async function Recipes({
  searchParams,
}: {
  searchParams: { page: string }
}): Promise<JSX.Element> {
  const apiRecipes = await fetchRecipesList()

  return <RecipesPageClient apiRecipes={apiRecipes} />
}
