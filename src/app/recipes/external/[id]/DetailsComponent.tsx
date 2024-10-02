'use client'

import React from 'react'
import {
  TopContainer,
  DietaryLabelsList,
  RecipeContent,
  SectionTitle,
  IngredientsList,
  Instructions,
  NotFoundContainer,
  NotFoundMessage,
  BackLink,
} from './details.styles'
import Hero from '@/app/_components/Hero'
import { Recipe, Ingredient } from '@/app/_utils/types'

export default function DetailsComponent({ recipe }: { recipe: Recipe }) {
  console.log('recipe in DetailsComponent', recipe)
  if (recipe === null || recipe === undefined) {
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
          {recipe.diets?.map((diet: string) => <li key={diet}>{diet}</li>)}
          <li>{recipe?.readyInMinutes} min</li>
        </DietaryLabelsList>
      </TopContainer>

      <RecipeContent>
        <SectionTitle>Description</SectionTitle>
        <p>{recipe?.summary?.replace(/<[^>]*>?/gm, '')}</p>

        <SectionTitle>Ingredients</SectionTitle>
        <IngredientsList>
          {recipe?.extendedIngredients?.map((ingredient: Ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </IngredientsList>

        <SectionTitle>Instructions</SectionTitle>
        <Instructions>{recipe?.instructions}</Instructions>
      </RecipeContent>
    </>
  )
}
