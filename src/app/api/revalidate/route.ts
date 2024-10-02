import { revalidateTag } from 'next/cache'

import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<Response> {
  const tagName = request.nextUrl.searchParams.get('recipe')

  if (typeof tagName !== 'string') {
    return new Response('Invalid request', { status: 400 })
  }

  if (tagName.length > 0) {
    revalidateTag(tagName)

    return NextResponse.json({ revalidated: true, now: Date.now(), tag: tagName })
  } else {
    return NextResponse.json({ revalidated: false, message: 'No tag provided' })
  }
}
