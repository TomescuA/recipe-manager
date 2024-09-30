'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import RecipeForm, { type FormValues } from '@/app/recipes/_components/ManageRecipesForm'

const NewRecipePage: React.FC = () => {
  const router = useRouter()

  const handleSubmit = (values: FormValues): void => {
    const storedRecipes = localStorage.getItem('customRecipes')
    const customRecipes = storedRecipes ? JSON.parse(storedRecipes) : []

    const newRecipe = {
      id: Date.now().toString(),
      ...values,
    }

    const updatedRecipes = [...customRecipes, newRecipe]

    try {
      localStorage.setItem('customRecipes', JSON.stringify(updatedRecipes))
      router.push('/recipes?tab=custom')
    } catch (error) {
      if (error instanceof DOMException && error.name === 'QuotaExceededError') {
        console.error('Cannot save recipe: Storage limit exceeded.')
      } else {
        console.error('Error saving recipe:', error)
      }
    }
  }

  return (
    <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Add a New Recipe</h1>
      <RecipeForm onSubmit={handleSubmit} isLoading={false} />
    </div>
  )
}

export default NewRecipePage
