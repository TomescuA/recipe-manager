import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface RecipeCardProps {
  recipe: any
  isCustom: boolean
  onDelete?: (id: string) => void
  onFavorite?: (recipe: any) => void
  isFavorite?: boolean
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  isCustom,
  onDelete,
  onFavorite,
  isFavorite,
}) => {
  return (
    <div className="border rounded-xl p-5 hover:shadow-lg transition">
      {recipe.image && (
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={300}
          height={200}
          className="object-cover rounded-lg"
          unoptimized={isCustom}
        />
      )}

      <h3 className="text-xl mt-3 font-bold">{recipe.title}</h3>

      {isCustom ? (
        <p className="mt-2">
          {recipe.description.substring(0, 100)}
          {recipe.description.length > 100 && '...'}
        </p>
      ) : (
        <p className="mt-2">
          {recipe.summary?.replace(/<[^>]*>?/gm, '').substring(0, 100)}
          {recipe.summary && recipe.summary.length > 100 && '...'}
        </p>
      )}

      {isCustom && recipe.dietaryLabels && recipe.dietaryLabels.length > 0 && (
        <div className="mt-3">
          <h4 className="font-semibold">Dietary Labels:</h4>
          <ul className="list-disc list-inside">
            {recipe.dietaryLabels.map((label: string, index: number) => (
              <li key={index}>{label}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4 flex space-x-2">
        <Link href={isCustom ? `/recipes/custom/${recipe.id}` : `/recipes/external/${recipe.id}`}>
          View Details
        </Link>

        {isCustom && (
          <>
            <Link href={`/recipes/custom/update/${recipe.id}`}>Update Recipe</Link>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => onDelete && onDelete(recipe.id)}
            >
              Delete Recipe
            </button>
          </>
        )}

        {!isCustom && (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={() => onFavorite && onFavorite(recipe)}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        )}
      </div>
    </div>
  )
}

export default RecipeCard
