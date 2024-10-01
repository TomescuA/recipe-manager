'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import RecipeForm, { type FormValues } from '@/app/recipes/_components/ManageRecipesForm'
import {
  InnerContainer,
  OuterContainer,
  Title,
} from '@/app/recipes/custom/create/CreateRecipe.styles'

interface Recipe extends FormValues {
  id: string
}

interface UpdateRecipePageProps {
  params: { id: string }
}

const UpdateRecipePage: React.FC<UpdateRecipePageProps> = ({ params }) => {
  const router = useRouter()
  const { id } = params

  const [initialData, setInitialData] = useState<FormValues | null>(null)

  useEffect(() => {
    const storedRecipes = localStorage.getItem('customRecipes')
    if (storedRecipes !== null) {
      try {
        const recipes: Recipe[] = JSON.parse(storedRecipes)
        const recipe = recipes.find((r) => r.id === id)
        if (recipe) {
          const formValues: FormValues = {
            title: recipe.title,
            image: recipe.image || '',
            description: recipe.description,
            ingredients: recipe.ingredients || '',
            dietaryLabels: recipe.dietaryLabels,
          }
          setInitialData(formValues)
        } else {
          console.error('Recipe not found')
          router.push('/recipes')
        }
      } catch (error) {
        console.error('Failed to parse recipes from localStorage:', error)
      }
    }
  }, [id, router])

  const handleUpdate = (updatedValues: FormValues) => {
    const storedRecipes = localStorage.getItem('customRecipes')
    if (storedRecipes !== null) {
      try {
        const recipes: Recipe[] = JSON.parse(storedRecipes)
        const recipeIndex = recipes.findIndex((r) => r.id === id)
        if (recipeIndex !== -1) {
          const updatedRecipe: Recipe = {
            id: id,
            ...updatedValues,
          }
          recipes[recipeIndex] = updatedRecipe
          localStorage.setItem('customRecipes', JSON.stringify(recipes))
          router.push('/recipes')
        } else {
          console.error('Recipe not found in the list')
        }
      } catch (error) {
        console.error('Failed to update recipe:', error)
      }
    }
  }

  if (!initialData) {
    return <p>Loading...</p>
  }

  return (
    <OuterContainer>
      <InnerContainer>
        <Title>Update Recipe</Title>
        <RecipeForm initialValues={initialData} onSubmit={handleUpdate} />
      </InnerContainer>
    </OuterContainer>
  )
}

export default UpdateRecipePage
