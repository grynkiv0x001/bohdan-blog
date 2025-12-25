import { NextResponse, type NextRequest } from 'next/server';

const protectedRoutes = ['/cms'];
// const publicRoutes = ['/cms/login', '/cms/register', '/'];

const proxy = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if (protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/cms/login', request.url));
  }
};

// Routes Proxy should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

export default proxy;
