export const fetchRecipesList = async (): Promise<any[]> => {
  try {
    const baseUrl = 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/recipes-proxy`)

    if (!response.ok) {
      throw new Error(`Error fetching recipes: ${response.statusText}`)
    }

    const data = await response.json()

    return data.results
  } catch (error) {
    console.error(error)
    return []
  }
}
