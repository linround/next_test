import {NextRequest, NextResponse} from 'next/server'
import {Request} from "next/dist/compiled/@edge-runtime/primitives/fetch";

let locales = ['en-US', 'nl-NL', 'nl']

// Get the preferred locale, similar to above or using a library
function getLocale() {  }

export function middleware(request:NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => {
      return !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    }
  )

  console.log('-----------------pathname---------------------')
  console.log(pathname)
  console.log(pathnameIsMissingLocale)
  console.log('-------------------pathname-------------------')
  // Redirect if there is no locale
  // if (pathnameIsMissingLocale) {
  //
  //   // e.g. incoming request is /products
  //   // The new URL is now /en-US/products
  //   return new NextResponse(
  //     JSON.stringify({
  //       data:` 无语言`,
  //       url: request.url
  //     })
  //   )
  // }
  // 设置
  // return NextResponse.redirect(new URL('/',request.url))
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}












// import { NextRequest, NextResponse } from 'next/server';
//
//
// // Limit the middleware to paths starting with `/api/`
// export const config = {
//   matcher: '/api/:function*',
// };
//
// export function middleware(request: NextRequest) {
//   // Call our authentication function to check the request
//   return new NextResponse(
//     JSON.stringify({ success: false, message: 'authentication failed' }),
//     { status: 401, headers: { 'content-type': 'application/json' } },
//   );
// }
//











// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
//
// export function middleware(request: NextRequest) {
//   // Clone the request headers and set a new header `x-hello-from-middleware1`
//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set('x-hello-from-middleware1', 'hello');
//
//   // You can also set request headers in NextResponse.rewrite
//   const response = NextResponse.next({
//     request: {
//       // New request headers
//       headers: requestHeaders,
//     },
//   });
//
//   // Set a new response header `x-hello-from-middleware2`
//   response.headers.set('x-hello-from-middleware2', 'hello');
//   return response;
// }
// export function middleware(request: NextRequest) {
//   // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
//   // Getting cookies from the request using the `RequestCookies` API
//   let cookie = request.cookies.get('nextjs')?.value;
//   console.log(cookie); // => 'fast'
//   const allCookies = request.cookies.getAll();
//   console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]
//
//   request.cookies.has('nextjs'); // => true
//   request.cookies.delete('nextjs');
//   request.cookies.has('nextjs'); // => false
//
//   // Setting cookies on the response using the `ResponseCookies` API
//   const response = NextResponse.next();
//   response.cookies.set('vercel', 'fast');
//   response.cookies.set({
//     name: 'vercel',
//     value: 'fast',
//     path: '/test',
//   });
//   cookie = response.cookies.get('vercel');
//   console.log('--------------------------------')
//   console.log(cookie,''); // => { name: 'vercel', value: 'fast', Path: '/test' }
//   console.log('--------------------------------')
//   // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.
//
//   return response;
// }
