import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const adminToken = req.cookies.get('token'); // Assuming you store an admin token in cookies

  const { pathname } = req.nextUrl;

  if (!adminToken && pathname.startsWith('/')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (adminToken && pathname === '/login') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login'],
};
