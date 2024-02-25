import { NextResponse } from 'next/server'
// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware (req) {
  const requestUrl = new URL(req.url)
  const res = NextResponse.next()
  // const supabase = createMiddlewareClient({ req, res })
  // const session = await supabase.auth.getSession()

  // if (req.url.includes('/login') || req.url.includes('/register')) {
  //   if (session?.data?.session !== null) {
  //     return NextResponse.redirect(requestUrl.origin)
  //   }
  // }

  // // if(req.url.includes('/dashboard') || req.url === 'http://localhost:8080/') {
  // if (req.url.includes('/amplify') || req.url === 'https://amplipod-backoffice-next13.vercel.app/' || req.url.includes('/account') || req.url.includes('/pricing') || req.url === 'https://app.amplipod.io/' || req.url.includes('/images')) {
  //   if (session?.data?.session === null) {
  //     return NextResponse.redirect(requestUrl.origin + '/login')
  //   }
  // }

  return res
}

export const config = {
  matcher: ['/login', '/register', '/amplify', '/', '/account', '/pricing', '/:podcastId*/images']
}
