import { Recipe } from '@/app/_utils/types'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const fetchRecipeDetails = async (id: string): Promise<Recipe> => {
  try {
    const response = await fetch(
      `${apiUrl}/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&includeNutrition=false`,
      {
        cache: 'force-cache',
        next: { tags: [`recipe-${id}`] },
      },
    )

    if (!response.ok) {
      throw new Error(`Error fetching recipe details: ${response.statusText}`)
    }

    const recipeDetails = await response.json()

    return recipeDetails
  } catch (error) {
    console.error(error)
  }
}
