'use client'

import React from 'react'
import ExternalRecipesList from '@/app/recipes/external/page'
import CustomRecipes from './custom/page'
import { useRouter, useSearchParams } from 'next/navigation'
import Tabs from '../_components/Tabs'
import Hero from '@/app/_components/Hero'

import { PageContainer } from '@/app/recipes/RecipePageClient.styles'

interface RecipesPageClientProps {
  initialRecipes: any[]
}

const allowedTabs = ['external', 'custom']

const RecipesPageClient: React.FC<RecipesPageClientProps> = ({ initialRecipes }) => {
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
    <PageContainer>
      <Hero
        title="Discover Delicious Recipes"
        subtitle=" Your journey to culinary creativity starts here. Explore external recipes or create your
          own!"
      >
        <Tabs
          tabs={['External Recipes', 'My Custom Recipes']}
          activeTab={activeTab === 'external' ? 'External Recipes' : 'My Custom Recipes'}
          onTabChange={(tab) => handleTabChange(tab === 'External Recipes' ? 'external' : 'custom')}
        />
      </Hero>

      <div className="recipes-content">
        {activeTab === 'external' && <ExternalRecipesList recipes={initialRecipes} />}
        {activeTab === 'custom' && <CustomRecipes />}
      </div>
    </PageContainer>
  )
}

export default RecipesPageClient
