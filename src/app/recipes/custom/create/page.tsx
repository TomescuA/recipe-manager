'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import RecipeForm, { type FormValues } from '@/app/recipes/_components/ManageRecipesForm'
import { OuterContainer, InnerContainer, Container } from './CreateRecipe.styles'
import Hero from '@/app/_components/Hero'
import { useAppDispatch } from '@/app/_store/store'
import { createRecipe } from '@/app/_store/slices/customRecipesSlice'

const NewRecipePage: React.FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const handleSubmit = (values: FormValues): void => {
    dispatch(createRecipe(values))
    router.push('/recipes?tab=custom')
  }

  return (
    <OuterContainer>
      <Hero
        title="Create Your Culinary Masterpiece"
        subtitle="Bring your favorite dish to life and inspire others with your creativity."
      />
      <Container>
        <InnerContainer>
          <RecipeForm onSubmit={handleSubmit} isLoading={false} />
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default NewRecipePage
