'use client'

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  TopContainer,
  RecipeContent,
  SectionTitle,
  DietaryLabelsList,
  IngredientsList,
  Instructions,
  NotFoundContainer,
  NotFoundMessage,
  BackLink,
} from './Details.styles'

import Button from '@/app/_components/Button'
import Hero from '@/app/_components/Hero'

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
      <NotFoundContainer>
        <NotFoundMessage>Recipe not found.</NotFoundMessage>
        <BackLink href="/recipes">← Back to Recipes</BackLink>
      </NotFoundContainer>
    )
  }

  return (
    <>
      <Hero title={recipe.title} />
      <TopContainer>
        <DietaryLabelsList>
          <li>{recipe.dietaryLabels}</li>
          <li>{recipe.cookingTime} min</li>
        </DietaryLabelsList>

        <Button color="danger" onClick={() => onDelete()}>
          Delete Recipe
        </Button>
      </TopContainer>

      <RecipeContent>
        <SectionTitle>Description</SectionTitle>
        <p>{recipe.description}</p>

        <SectionTitle>Ingredients</SectionTitle>
        {recipe?.ingredients && (
          <IngredientsList>
            {recipe.ingredients.split('\n').map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </IngredientsList>
        )}

        <SectionTitle>Instructions</SectionTitle>
        <Instructions>{recipe?.instructions}</Instructions>
      </RecipeContent>
    </>
  )
}

export default CustomRecipeDetailsPage
