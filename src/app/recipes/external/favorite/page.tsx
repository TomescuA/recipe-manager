'use client'

import React from 'react'
import RecipeCard from '@/app/recipes/_components/RecipeCard'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/_store/rootReducer'
import { removeFavorite } from '@/app/_store/slices/favoriteReducer'

const FavoritesList: React.FC = () => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorite.elements)

  const onToggleFavorite = (recipe: any) => {
    dispatch(removeFavorite(recipe))
    alert(`${recipe.title} has been removed from your favorites!`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-5">My Favorites</h1>
      {favorites.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isCustom={false}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <p>You have no favorite recipes yet.</p>
      )}
    </div>
  )
}

export default FavoritesList
