'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RecipeCard from '@/app/recipes/_components/RecipeCard'

interface CustomRecipe {
  id: string
  title: string
  description: string
  image: string | null
  dietaryLabels: string[]
}

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
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-full mb-4">
        <Link href="/recipes/custom/create">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Recipe</button>
        </Link>
      </div>

      {customRecipes.length > 0 ? (
        customRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onDelete={handleDelete} isCustom={true} />
        ))
      ) : (
        <div className="col-span-full text-center">
          {' '}
          <p>No custom recipes found. Add your own recipes!</p>
        </div>
      )}
    </div>
  )
}

export default CustomRecipesList
