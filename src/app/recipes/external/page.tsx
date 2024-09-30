import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RecipeCard from '../_components/RecipeCard'

const ExternalRecipesList = ({ apiRecipes }: { apiRecipes: any[] }) => {
  const onFavorite = (recipe: any) => {
    const storedFavorites = localStorage.getItem('favorite')
    let favorites: any[] = []

    if (storedFavorites) {
      try {
        favorites = JSON.parse(storedFavorites)
      } catch (error) {
        console.error('Failed to parse favorites from localStorage:', error)
        favorites = []
      }
    }

    const isAlreadyFavorite = favorites.some((fav) => fav.id === recipe.id)

    if (!isAlreadyFavorite) {
      favorites.push(recipe)
      try {
        localStorage.setItem('favorite', JSON.stringify(favorites))
        alert(`${recipe.title} has been added to your favorites!`)
      } catch (error) {
        console.error('Failed to save favorites to localStorage:', error)
      }
    } else {
      alert(`${recipe.title} is already in your favorites.`)
    }
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link href="/recipes/external/favorite">Favorite</Link>
      {apiRecipes?.map((recipe: any) => (
        <RecipeCard onFavorite={onFavorite} recipe={recipe} isCustom={false} />
      ))}
    </div>
  )
}

export default ExternalRecipesList
