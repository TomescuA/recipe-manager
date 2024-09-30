import { fetchRecipesList } from '@/app/recipes/api'
import RecipesPageClient from '@/app/recipes/RecipesPageClient'
import React from 'react'

interface RecipesPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Recipes({ searchParams }: RecipesPageProps): Promise<JSX.Element> {
  const initialRecipes = await fetchRecipesList()

  return <RecipesPageClient initialRecipes={initialRecipes} />
}
