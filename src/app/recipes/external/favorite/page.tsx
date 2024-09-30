'use client'

import React, { useEffect, useState } from 'react'
import RecipeCard from '@/app/recipes/_components/RecipeCard'

const FavoritesList: React.FC = () => {
  const [favorites, setFavorites] = useState<any[]>([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorite')
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites))
      } catch (error) {
        console.error('Failed to parse favorites from localStorage:', error)
      }
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-5">My Favorites</h1>
      {favorites.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} isCustom={false} />
          ))}
        </div>
      ) : (
        <p>You have no favorite recipes yet.</p>
      )}
    </div>
  )
}

export default FavoritesList
