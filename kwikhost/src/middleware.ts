

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export const config = {
//   matcher: [
//     "/((?!api/|_next/|_static/|[\\w-]+\\.\\w+).*)",
//   ],
// };

// export async function middleware(req: NextRequest) {
//   const url = req.nextUrl;
//   let hostname = req.headers.get("host") || '';
//   const allowedDomains = ["kwikhost.xyz", "www.kwikhost.xyz", "localhost"];

//   hostname = hostname.split(':')[0];
//   const isMainDomain = allowedDomains.includes(hostname);
//   const subdomain = isMainDomain ? null : hostname.split('.')[0];

//   // console.log('Middleware: Hostname:', hostname);
//   // console.log('Middleware: Subdomain:', subdomain);

//   // allow Next.js static assets to load correctly
//   if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/static/')) {
//     console.log('Middleware: Static file request, passing through');
//     return NextResponse.next();
//   }

//   if (isMainDomain) {
//     // console.log('Middleware: Main domain detected, passing through');
//     return NextResponse.next();
//   }

//   if (url.pathname.startsWith(`/`)) {
//     return NextResponse.rewrite(new URL('/not-found', req.url)); 
//   }

//   if (subdomain) {
//     try {
//       const response = await fetch(`${url.origin}/api/tenant?subdomain=${subdomain}`);
//       if (response.ok) {
//         // console.log('Middleware: Valid subdomain detected, rewriting URL');
//         return NextResponse.rewrite(
//           new URL(`/${subdomain}${url.pathname}`, req.url)
//         );
//       }
//     } catch (error) {
//       console.error('Middleware: Error fetching tenant:', error);
//     }
//   }

//   console.log('Middleware: Invalid subdomain or domain, returning 404');
//   return new NextResponse(null, { status: 404 });
// }













import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    "/((?!api/|_next/|_static/|[\\w-]+\\.\\w+).*)",
  ],
};

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  let hostname = req.headers.get("host") || '';
  const allowedDomains = ["kwikhost.xyz", "www.kwikhost.xyz", "localhost"];

  hostname = hostname.split(':')[0];
  const isMainDomain = allowedDomains.includes(hostname);
  const subdomain = isMainDomain ? null : hostname.split('.')[0];

  // Allow static files to pass through
  if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/static/')) {
    return NextResponse.next();
  }

  if (subdomain) {
    // If subdomain exists, rewrite to the subdomain route
    try {
      const response = await fetch(`${url.origin}/api/tenant?subdomain=${subdomain}`);
      if (response.ok) {
        return NextResponse.rewrite(
          new URL(`/${subdomain}${url.pathname}`, req.url)
        );
      }
    } catch (error) {
      console.error('Middleware: Error fetching tenant:', error);
    }
    return new NextResponse(null, { status: 404 });
  }

  // **NEW CHECK**: Block path-based access on the main domain unless it's explicitly allowed
  if (isMainDomain) {
    const allowedPaths = ['/', '/manage', '/login', '/not-found', '/features', '/notion' ]; // define allowed paths on the main domain
    if (!allowedPaths.includes(url.pathname)) {
      return NextResponse.rewrite(new URL('/not-found', req.url));
    }
    return NextResponse.next();
  }

  return new NextResponse(null, { status: 404 });
}
