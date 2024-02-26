import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })

    console.log("test")

    const {
        data: { user },
    } = await supabase.auth.getUser()

    // if user is signed in and the current path is / redirect the user to /account
    if (user && (req.nextUrl.pathname === '/login' || req.nextUrl.pathname==='/') ) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // if user is not signed in and the current path is not /login redirect the user to /login
    if (!user && req.nextUrl.pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    return res
}

export const config = {
    matcher: ['/', '/dashboard', '/login'],
}