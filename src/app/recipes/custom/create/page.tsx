'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import RecipeForm, { type FormValues } from '@/app/recipes/_components/ManageRecipesForm'
import { OuterContainer, InnerContainer, Title } from './CreateRecipe.styles'
import Hero from '@/app/_components/Hero'

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
    <OuterContainer>
      <Hero title="Add a New Recipe" />
      <InnerContainer>
        <RecipeForm onSubmit={handleSubmit} isLoading={false} />
      </InnerContainer>
    </OuterContainer>
  )
}

export default NewRecipePage
