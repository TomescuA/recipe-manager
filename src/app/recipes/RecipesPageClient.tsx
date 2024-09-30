'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomRecipes from '@/app/recipes/custom/page'
import { useRouter, useSearchParams } from 'next/navigation'
import ExternalRecipesList from '@/app/recipes/external/page'

const allowedTabs = ['external', 'custom']

const RecipesPageClient = ({ apiRecipes }: { apiRecipes: any }): React.JSX.Element => {
  const router = useRouter()
  const searchParams = useSearchParams()

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
        {activeTab === 'external' && <ExternalRecipesList apiRecipes={apiRecipes} />}

        {activeTab === 'custom' && <CustomRecipes />}
      </div>
    </div>
  )
}

export default RecipesPageClient
