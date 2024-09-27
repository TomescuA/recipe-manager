/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CustomRecipe {
  id: string
  title: string
  description: string
}

const RecipesPageClient = ({ apiRecipes }: { apiRecipes: any }): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState('api')
  const [customRecipes, setCustomRecipes] = useState<CustomRecipe[]>([])

  useEffect(() => {
    const storedRecipes = localStorage.getItem('customRecipes')

    if (storedRecipes) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setCustomRecipes(JSON.parse(storedRecipes))
    }
  }, [])

  const handleTabChange = (tab: string): void => {
    setActiveTab(tab)
  }

  return (
    <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Recipe List</h1>

      {/* Tabs for API and Custom Recipes */}
      <div className="tabs mb-8">
        <button
          className={`tab-button ${activeTab === 'api' ? 'active' : ''}`}
          onClick={() => { handleTabChange('api') }}
        >
          API Recipes
        </button>
        <button
          className={`tab-button ${activeTab === 'custom' ? 'active' : ''}`}
          onClick={() => { handleTabChange('custom') }}
        >
          My Custom Recipes
        </button>
      </div>

      {/* Conditionally render API recipes or Custom recipes */}
      <div className="recipes-content">
        {activeTab === 'api' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiRecipes?.map((recipe: any) => (
              <div key={recipe.id} className="border rounded-xl p-5 hover:shadow-lg transition">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={300}
                  height={200}
                  className="object-cover rounded-lg"
                />
                <h3 className="text-xl mt-3">{recipe.title}</h3>
                <p>{recipe.summary?.replace(/<[^>]*>?/gm, '').substring(0, 100)}...</p>
                <Link href={`/recipes/${recipe.id}`}>
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'custom' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {customRecipes.length > 0
              ? (customRecipes.map((recipe) => (
                <div key={recipe?.id} className="border rounded-xl p-5 hover:shadow-lg transition">
                  <h3 className="text-xl mt-3">{recipe?.title}</h3>
                  <p>{recipe?.description?.substring(0, 100)}...</p>
                </div>)))
              : (
                <p>No custom recipes found. Add your own recipes!</p>)}
          </div>
        )}
      </div>
    </div>
  )
}

export default RecipesPageClient
