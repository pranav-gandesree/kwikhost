// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export const config = {
//   matcher: [
//     "/((?!api/|_next/|_static/|[\\w-]+\\.\\w+).*)",
//   ],
// };

// export async function middleware(req: NextRequest) {
//   const url = req.nextUrl;

//   const baseUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL!

//   let hostname = req.headers.get("host") || '';
//   const allowedDomains = ["kwikhost.xyz", "www.kwikhost.xyz", "localhost"];

//   // Remove port if it exists
//   hostname = hostname.split(':')[0];

//   // Define allowed domains (including main domain and localhost)

//   // Check if the current hostname is in the list of allowed domains
//   const isMainDomain = allowedDomains.includes(hostname);

//   // Extract subdomain if not a main domain
//   const subdomain = isMainDomain ? null : hostname.split('.')[0];


//   console.log('Middleware: Hostname:', hostname);
//   console.log('Middleware: Subdomain:', subdomain);

//   // If it's a main domain, allow the request to proceed
//   if (isMainDomain) {
//     console.log('Middleware: Main domain detected, passing through');
//     return NextResponse.next();
//   }

//   // Handle subdomain logic
//   if (subdomain) {
//     try {
//       // Use fetch to verify if the subdomain exists
//       const response = await fetch(`${url.origin}/api/tenant?subdomain=${subdomain}`);
//       // console.log("response in middleware from api ", response)
      
//       if (response.ok) {
//         console.log('Middleware: Valid subdomain detected, rewriting URL');
//         // Rewrite the URL to a dynamic route based on the subdomain
//         console.log("hi from lofs and re.url is", req.url)
//         console.log("hi from lofs and subomdina path", `/${subdomain}${url.pathname}` )
//         return NextResponse.rewrite(new URL(`${baseUrl}/${subdomain}${url.pathname}`, req.url));
//         // return NextResponse.rewrite(new URL(`/traffic-image${url.pathname}`, req.url));
//       }
//     } catch (error) {
//       console.error('Middleware: Error fetching tenant:', error);
//     }
//   }

//   console.log('Middleware: Invalid subdomain or domain, returning 404');
//   // If none of the above conditions are met, return a 404 response
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

  console.log('Middleware: Hostname:', hostname);
  console.log('Middleware: Subdomain:', subdomain);

  // ✅ Allow Next.js static assets to load correctly
  if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/static/')) {
    console.log('Middleware: Static file request, passing through');
    return NextResponse.next();
  }

  if (isMainDomain) {
    console.log('Middleware: Main domain detected, passing through');
    return NextResponse.next();
  }

  if (subdomain) {
    try {
      const response = await fetch(`${url.origin}/api/tenant?subdomain=${subdomain}`);
      if (response.ok) {
        console.log('Middleware: Valid subdomain detected, rewriting URL');
        return NextResponse.rewrite(
          new URL(`/${subdomain}${url.pathname}`, req.url)
        );
      }
    } catch (error) {
      console.error('Middleware: Error fetching tenant:', error);
    }
  }

  console.log('Middleware: Invalid subdomain or domain, returning 404');
  return new NextResponse(null, { status: 404 });
}
