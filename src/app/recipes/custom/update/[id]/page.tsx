'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import RecipeForm, { FormValues } from '@/app/recipes/_components/ManageRecipesForm'
import {
  InnerContainer,
  OuterContainer,
  Container,
} from '@/app/recipes/custom/create/CreateRecipe.styles'
import Hero from '@/app/_components/Hero'
import { useSelector } from 'react-redux'
import { updateRecipe } from '@/app/_store/slices/customRecipesSlice'
import { RootState } from '@/app/_store/rootReducer'
import { useAppDispatch } from '@/app/_store/store'
interface Recipe extends FormValues {
  id: string
}

interface UpdateRecipePageProps {
  params: { id: string }
}

const UpdateRecipePage: React.FC<UpdateRecipePageProps> = ({ params }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { id } = params

  const recipe = useSelector((state: RootState) =>
    state.customRecipes.recipes.find((r) => r.id === id),
  )

  const [initialData, setInitialData] = useState<FormValues | null>(null)

  useEffect(() => {
    if (recipe) {
      setInitialData({
        title: recipe.title,
        image: recipe.image,
        cookingTime: recipe.cookingTime,
        description: recipe.description,
        ingredients: recipe.ingredients,
        dietaryLabels: recipe.dietaryLabels,
        instructions: recipe.instructions,
      })
    } else {
      router.push('/recipes')
    }
  }, [id, recipe, router])

  const handleUpdate = (updatedValues: FormValues) => {
    dispatch(updateRecipe({ id, ...updatedValues }))
    router.push('/recipes?tab=custom')
  }

  if (!initialData) {
    return <p>Loading...</p>
  }

  return (
    <OuterContainer>
      <Hero title={`Update "${initialData?.title}" Recipe`} />
      <Container>
        <InnerContainer>
          <RecipeForm initialValues={initialData} onSubmit={handleUpdate} />
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default UpdateRecipePage
