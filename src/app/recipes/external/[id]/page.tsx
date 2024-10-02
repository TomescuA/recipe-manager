import React from 'react'
import { fetchRecipeDetails } from './api'
import { fetchRecipesList } from '@/app/recipes/api'
import DetailsComponent from './DetailsComponent'

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  const recipes = await fetchRecipesList()
  return recipes.map((recipe: any) => ({ id: recipe.id.toString() }))
}

export default async function RecipeDetailsPage({
  params,
}: {
  params: { id: string }
}): Promise<React.JSX.Element> {
  const recipeId = params.id
  const recipe: any = await fetchRecipeDetails(recipeId)

  return <DetailsComponent recipe={recipe} />
}
