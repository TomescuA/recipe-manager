import React from 'react'
import { fetchRecipeDetails } from './api'
import { fetchRecipesList } from '@/app/recipes/api'

export async function generateStaticParams (): Promise<Array<{ id: string }>> {
  const recipes = await fetchRecipesList()
  return recipes.map((recipe: any) => ({ id: recipe.id.toString() }))
}

export default async function RecipeDetailsPage ({ params }: { params: { id: string } }): Promise<React.JSX.Element> {
  const recipeId = params.id
  const recipe: any = await fetchRecipeDetails(recipeId)

  if (recipe === null || recipe === undefined) {
    return <div>Recipe not found.</div>
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} width={300} height={200} />
      <p>{recipe.summary.replace(/<[^>]*>?/gm, '')}</p>

      <h2>Ingredients</h2>
      <ul>
        {recipe.extendedIngredients.map((ingredient: any) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  )
}
