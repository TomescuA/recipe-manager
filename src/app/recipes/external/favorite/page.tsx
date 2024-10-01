'use client'

import React from 'react'
import RecipeCard from '@/app/recipes/_components/RecipeCard'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/_store/rootReducer'
import { removeFavorite } from '@/app/_store/slices/favoriteReducer'
import { Grid } from '@/app/_components/styles/Grid.styles'
import { RecipeContainer } from '@/app/recipes/external/External.styles'
import styled from 'styled-components'
import Hero from '@/app/_components/Hero'

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

const FavoritesList: React.FC = () => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorite.elements)

  const onToggleFavorite = (recipe: any) => {
    dispatch(removeFavorite(recipe))
    alert(`${recipe.title} has been removed from your favorites!`)
  }

  return (
    <RecipeContainer>
      <Hero title="My Favorites Recieps" />
      <RecipesMainContainer>
        {favorites.length > 0 ? (
          <Grid>
            {favorites.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
                isCustom={false}
              />
            ))}
          </Grid>
        ) : (
          <NoRecipesContainer>
            <p>No custom recipes found. Add your own recipes!</p>
          </NoRecipesContainer>
        )}
      </RecipesMainContainer>
    </RecipeContainer>
  )
}

export default FavoritesList
