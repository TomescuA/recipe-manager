// const apiUrl = process.env.NEXT_PUBLIC_API_URL

// export const fetchRecipesList = async (): Promise<any[]> => {
//   try {
//     const responseRecipes = await fetch(
//       `${apiUrl}/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=100&offset=0&addRecipeInformation=true`,
//       {
//         cache: 'force-cache',
//         next: { tags: ['recipes'] }
//       }
//     )

//     if (!responseRecipes.ok) {
//       throw new Error(`Error fetching recipes: ${responseRecipes.statusText}`)
//     }

//     const response = await responseRecipes.json()

//     console.log('Response Headers:', responseRecipes.headers)
//     console.log('Recipes:', response.results.length)

//     return response.results
//   } catch (error) {
//     console.error(error)
//     return []
//   }
// }

export const fetchRecipesList = async (): Promise<any[]> => {
  try {
    const baseUrl = 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/recipes-proxy`)

    if (!response.ok) {
      throw new Error(`Error fetching recipes: ${response.statusText}`)
    }

    const data = await response.json()

    console.log('Recipes:', data.results.length)

    return data.results
  } catch (error) {
    console.error(error)
    return []
  }
}
