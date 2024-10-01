'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RecipeCard from '@/app/recipes/_components/RecipeCard'
import { Grid } from '@/app/_components/styles/Grid.styles'
import { RecipeContainer, TopContainer } from '../external/External.styles'
import Button from '@/app/_components/Button'
import styled from 'styled-components'
import Hero from '@/app/_components/Hero'

interface CustomRecipe {
  id: string
  title: string
  description: string
  image: string | null
  dietaryLabels: string[]
}

const NoRecipesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
  flex-direction: column;
  p {
    margin-bottom: 1rem;
  }
`
const RecipesMainContainer = styled.div`
  margin-top: 2rem;
`

const CustomRecipesList: React.FC = () => {
  const [customRecipes, setCustomRecipes] = useState<CustomRecipe[]>([])

  useEffect(() => {
    const storedRecipes = localStorage.getItem('customRecipes')
    if (storedRecipes != null) {
      const parsedRecipes = JSON.parse(storedRecipes) as CustomRecipe[]
      setCustomRecipes(parsedRecipes)
    }
  }, [])

  const handleDelete = (id: string) => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe?')
    if (!confirmed) {
      return
    }

    const updatedRecipes = customRecipes.filter((recipe) => recipe.id !== id)
    try {
      localStorage.setItem('customRecipes', JSON.stringify(updatedRecipes))
      setCustomRecipes(updatedRecipes)
    } catch (error) {
      console.error('Failed to delete recipe:', error)
    }
  }

  return (
    <RecipeContainer>
      <TopContainer>
        {customRecipes.length > 0 && (
          <Button>
            <Link href="/recipes/custom/create">Add Recipe</Link>
          </Button>
        )}
      </TopContainer>

      <RecipesMainContainer>
        {customRecipes.length > 0 ? (
          <Grid>
            {customRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} onDelete={handleDelete} isCustom={true} />
            ))}
          </Grid>
        ) : (
          <NoRecipesContainer>
            <p>No custom recipes found. Add your own recipes!</p>
            <Button>
              <Link href="/recipes/custom/create">Add Recipe</Link>
            </Button>
          </NoRecipesContainer>
        )}
      </RecipesMainContainer>
    </RecipeContainer>
  )
}

export default CustomRecipesList
