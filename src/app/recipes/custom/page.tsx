'use client'

import React from 'react'
import Link from 'next/link'
import RecipeCard from '@/app/recipes/_components/RecipeCard'
import { Grid } from '@/app/_components/styles/Grid.styles'
import { RecipeContainer, TopContainer } from '../external/External.styles'
import Button from '@/app/_components/Button'
import styled from 'styled-components'
import { deleteRecipe } from '@/app/_store/slices/customRecipesSlice'
import { useAppDispatch } from '@/app/_store/store'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/_store/rootReducer'

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
  margin-bottom: 2rem;
`

const CustomRecipesList: React.FC = () => {
  const dispatch = useAppDispatch()
  const customRecipes = useSelector((state: RootState) => state.customRecipes.recipes)

  const handleDelete = (id: string) => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe?')
    if (!confirmed) return
    dispatch(deleteRecipe(id))
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
