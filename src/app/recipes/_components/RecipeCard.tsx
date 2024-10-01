import React from 'react'
import Link from 'next/link'
import {
  CardContainer,
  RecipeImage,
  Title,
  Description,
  ButtonContainer,
} from './RecipeCard.styles'

import Button from '@/app/_components/Button'
import { useRouter } from 'next/navigation'

interface RecipeCardProps {
  recipe: any
  isCustom: boolean
  onDelete?: (id: string) => void
  onToggleFavorite?: (recipe: any) => void
  isFavorite?: boolean
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
          ? `${recipe.description.substring(0, 100)}${recipe.description.length > 100 ? '...' : ''}`
          : `${recipe.summary?.replace(/<[^>]*>?/gm, '').substring(0, 100)}${
              recipe.summary && recipe.summary.length > 100 ? '...' : ''
            }`}
      </Description>

      <ButtonContainer>
        {isCustom && (
          <>
            <Button
              onClick={(e) => {
                e.stopPropagation()
                router.push(`/recipes/custom/update/${recipe.id}`)
              }}
              variant="outline"
            >
              Update
            </Button>
            <Button
              color="danger"
              variant="outline"
              onClick={(e: any) => {
                e.stopPropagation()
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
            onClick={(e: any) => {
              e.stopPropagation()
              onToggleFavorite(recipe)
            }}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
        )}
      </ButtonContainer>
    </CardContainer>
  )
}

export default RecipeCard
