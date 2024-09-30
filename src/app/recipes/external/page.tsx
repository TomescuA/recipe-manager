import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RecipeCard from '../_components/RecipeCard'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '@/app/_store/slices/favoriteReducer'
import { RootState } from '@/app/_store/rootReducer'

const ExternalRecipesList = ({ apiRecipes }: { apiRecipes: any[] }) => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorite.elements)

  const onToggleFavorite = (recipe: any) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === recipe.id)

    if (isAlreadyFavorite) {
      dispatch(removeFavorite(recipe))
      alert(`${recipe.title} has been removed from your favorites.`)
    } else {
      dispatch(addFavorite(recipe))
      alert(`${recipe.title} has been added to your favorites!`)
    }
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link href="/recipes/external/favorite">Favorite</Link>
      {apiRecipes?.map((recipe: any) => {
        const isFavorite = favorites.some((fav) => fav.id === recipe.id)
        return (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isCustom={false}
            isFavorite={isFavorite}
            onFavorite={onToggleFavorite}
          />
        )
      })}
    </div>
  )
}

export default ExternalRecipesList
