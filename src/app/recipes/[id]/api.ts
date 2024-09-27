const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const fetchRecipeDetails = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${apiUrl}/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&includeNutrition=false`,
      {
        cache: 'force-cache',
        next: { tags: [`recipe-${id}`] }
      }
    )

    console.log('Response Headers:', response.headers)

    if (!response.ok) {
      throw new Error(`Error fetching recipe details: ${response.statusText}`)
    }

    const recipeDetails = await response.json()
    console.log('Recipe Details:', recipeDetails)
    console.log('Response Headers:', response.headers)
    return recipeDetails
  } catch (error) {
    console.error(error)
    return null
  }
}
