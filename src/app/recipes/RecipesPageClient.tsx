// app/recipes/RecipesPageClient.tsx
'use client'

import React, { useEffect } from 'react'
import ExternalRecipesList from '@/app/recipes/external/page'
import CustomRecipes from './custom/page'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDispatch } from 'react-redux'
// import { setSearchTerm, addDietaryFilter } from '@/app/_store/slices/searchSlice'
// import { fetchRecipes, setRecipes } from '@/app/_store/slices/recipesSlice'

interface RecipesPageClientProps {
  initialRecipes: any[]
}

const allowedTabs = ['external', 'custom']

const RecipesPageClient: React.FC<RecipesPageClientProps> = ({ initialRecipes }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const dispatch = useDispatch()

  const tabFromUrl = searchParams.get('tab')
  const activeTab = allowedTabs.includes(tabFromUrl ?? '') ? tabFromUrl : 'external'

  const handleTabChange = (tab: string): void => {
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    params.set('tab', tab)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Recipe List</h1>

      <div className="tabs mb-8">
        <button
          className={`tab-button ${activeTab === 'external' ? 'active' : ''}`}
          onClick={() => handleTabChange('external')}
        >
          API Recipes
        </button>
        <button
          className={`tab-button ${activeTab === 'custom' ? 'active' : ''}`}
          onClick={() => handleTabChange('custom')}
        >
          My Custom Recipes
        </button>
      </div>

      <div className="recipes-content">
        {activeTab === 'external' && <ExternalRecipesList recipes={initialRecipes} />}
        {activeTab === 'custom' && <CustomRecipes />}
      </div>
    </div>
  )
}

export default RecipesPageClient
