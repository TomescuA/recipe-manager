'use client'
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { RootState } from '@/app/_store/rootReducer'
import { useAppDispatch } from '@/app/_store/store'
import { deleteRecipe } from '@/app/_store/slices/customRecipesSlice'
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

import { useSelector } from 'react-redux'

import Button from '@/app/_components/Button'
import Hero from '@/app/_components/Hero'

const CustomRecipeDetailsPage: React.FC = () => {
  const params = useParams()
  const router = useRouter()
  const id = Array.isArray(params.id) ? params.id[0] : params.id
  const dispatch = useAppDispatch()

  const recipes = useSelector((state: RootState) => state.customRecipes.recipes)
  const recipe = recipes.find((r) => r.id === id) || null

  const onDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe?')
    if (confirmed) {
      dispatch(deleteRecipe(id))
      router.push('/recipes?tab=custom')
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
