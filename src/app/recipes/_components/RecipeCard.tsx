import React from 'react'
import {
  CardContainer,
  RecipeImage,
  Title,
  Description,
  ButtonContainer,
} from './RecipeCard.styles'

import Button from '@/app/_components/Button'
import { useRouter } from 'next/navigation'
import { Recipe } from '@/app/_utils/types'

interface RecipeCardProps {
  recipe: Recipe
  isCustom: boolean
  onDelete?: (id: string) => void
  onToggleFavorite?: (recipe: Recipe) => void
  isFavorite?: boolean
  description?: string
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  isCustom,
  onDelete,
  onToggleFavorite,
  isFavorite,
}) => {
  const router = useRouter()

  const handleCardClick = () => {
    const route = isCustom ? `/recipes/custom/${recipe.id}` : `/recipes/external/${recipe.id}`
    router.push(route)
  }
  return (
    <CardContainer onClick={handleCardClick}>
      {recipe.image && (
        <RecipeImage
          src={recipe.image}
          alt={recipe.title}
          width={300}
          height={200}
          unoptimized={isCustom}
        />
      )}

      <Title>{recipe.title}</Title>

      <Description>
        {isCustom
          ? `${(recipe?.description ?? '').substring(0, 100)}${(recipe?.description?.length ?? 0) > 100 ? '...' : ''}`
          : `${recipe.summary?.replace(/<[^>]*>?/gm, '').substring(0, 100)}${
              recipe.summary && recipe.summary.length > 100 ? '...' : ''
            }`}
      </Description>

      <ButtonContainer>
        {isCustom && (
          <>
            <Button
              onClick={(e) => {
                ;(e as React.MouseEvent).stopPropagation()
                router.push(`/recipes/custom/update/${recipe.id}`)
              }}
              variant="outline"
            >
              Update
            </Button>
            <Button
              color="danger"
              variant="outline"
              onClick={(e) => {
                ;(e as React.MouseEvent).stopPropagation()
                onDelete && onDelete(recipe.id)
              }}
            >
              Delete
            </Button>
          </>
        )}

        {!isCustom && onToggleFavorite && (
          <Button
            variant="outline"
            color={isFavorite ? 'danger' : 'secondary'}
            onClick={(e) => {
              ;(e as React.MouseEvent).stopPropagation()
              onToggleFavorite(recipe)
            }}
          >
            {isFavorite ? 'Unsave' : 'Save'}
          </Button>
        )}
      </ButtonContainer>
    </CardContainer>
  )
}

export default RecipeCard
