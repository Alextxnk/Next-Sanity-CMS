import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL('/home', request.url));
  // console.log(process.env.NEXT_PUBLIC_PROJECT_ID);
  // console.log(process.env.DATASET);

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/'
};
