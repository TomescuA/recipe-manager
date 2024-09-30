'use client'

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface CustomRecipe {
  id: string
  title: string
  description: string
  image: string | null
  ingredients: string
  cookingTime: string
  dietaryLabels: string[]
  instructions: string
}

const CustomRecipeDetailsPage: React.FC = () => {
  const params = useParams()
  const router = useRouter()
  const { id } = params

  const [recipe, setRecipe] = useState<CustomRecipe | null>(null)

  useEffect(() => {
    const storedRecipes = localStorage.getItem('customRecipes')
    if (storedRecipes) {
      try {
        const recipes: CustomRecipe[] = JSON.parse(storedRecipes)
        const foundRecipe = recipes.find((r) => r.id === id)
        if (foundRecipe) {
          setRecipe(foundRecipe)
        } else {
          console.error('Recipe not found')
        }
      } catch (error) {
        console.error('Failed to parse recipes from localStorage:', error)
      }
    } else {
      console.error('No custom recipes found in localStorage')
    }
  }, [id])

  const onDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe?')
    if (confirmed) {
      const storedRecipes = localStorage.getItem('customRecipes')
      if (storedRecipes) {
        try {
          const recipes: CustomRecipe[] = JSON.parse(storedRecipes)
          const updatedRecipes = recipes.filter((r) => r.id !== id)
          localStorage.setItem('customRecipes', JSON.stringify(updatedRecipes))
          router.push('/recipes?tab=custom')
        } catch (error) {
          console.error('Failed to delete recipe:', error)
        }
      }
    }
  }

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Recipe not found.</p>
        <Link href="/recipes">← Back to Recipes</Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-5">{recipe.title}</h1>

      {recipe.image && (
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={600}
          height={400}
          className="object-cover rounded-lg"
          unoptimized
        />
      )}

      <div className="mt-5">
        <h2 className="text-xl font-semibold">Description</h2>
        <p>{recipe.description}</p>
      </div>

      {recipe.ingredients && (
        <div className="mt-5">
          <h2 className="text-xl font-semibold">Ingredients</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients.split('\n').map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}

      {recipe.instructions && (
        <div className="mt-5">
          <h2 className="text-xl font-semibold">Instructions</h2>
          <p>{recipe.instructions}</p>
        </div>
      )}

      {recipe.cookingTime && (
        <div className="mt-5">
          <h2 className="text-xl font-semibold">Cooking Time</h2>
          <p>{recipe.cookingTime} minutes</p>
        </div>
      )}

      {recipe.dietaryLabels && recipe.dietaryLabels.length > 0 && (
        <div className="mt-5">
          <h2 className="text-xl font-semibold">Dietary Labels</h2>
          <ul className="list-disc list-inside">
            {recipe.dietaryLabels.map((diet, index) => (
              <li key={index}>{diet}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 flex space-x-2">
        <Link href={`/recipes/update/${recipe.id}`}>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Update Recipe</button>
        </Link>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => onDelete()}>
          Delete Recipe
        </button>
      </div>

      <div className="mt-5">
        <Link href="/recipes?tab=custom">← Back to Recipes</Link>
      </div>
    </div>
  )
}

export default CustomRecipeDetailsPage
