import { type NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const requestUrl = `${apiUrl}/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=50&offset=0&addRecipeInformation=true`

    const responseRecipes = await fetch(requestUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!responseRecipes.ok) {
      return NextResponse.json(
        { error: `Error fetching recipes: ${responseRecipes.statusText}` },
        { status: 500 },
      )
    }

    const data = await responseRecipes.json()

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
      },
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}
