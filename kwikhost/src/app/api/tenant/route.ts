// import { NextRequest, NextResponse } from 'next/server';
// import { db } from '@/db/drizzle';
// import { eq } from 'drizzle-orm';
// import { domain } from '@/db/schema';

// export async function GET(request: NextRequest) {
//   const subdomain = request.nextUrl.searchParams.get('subdomain');

//   console.log('API: Received request for subdomain:', subdomain);

//   if (!subdomain) {
//     console.log('API: Subdomain is required'); 
//     return NextResponse.json({ error: 'Subdomain is required' }, { status: 400 });
//   }

//   try {
//     // Use `db.select()` with `eq` to query the table
//     const tenant = await db
//       .select({
//         id: domain.id,
//         subdomain: domain.domain,
//       })
//       .from(domain)
//       .where(eq(domain.domain, subdomain))
//       .limit(1); // Use `limit(1)` to return a single result

//     console.log('API: Tenant found:', tenant);

//     if (tenant.length === 0) {
//       console.log('API: Tenant not found');
//       return NextResponse.json({ error: 'Tenant not found' }, { status: 404 });
//     }

//     return NextResponse.json(tenant); 
//   } catch (error) {
//     console.error('API: Error fetching tenant:', error);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }















import { NextResponse } from 'next/server';
import { db } from '@/db/drizzle';
import { domain } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const domainName = searchParams.get('domain');

  if (!domainName) {
    return new NextResponse("Missing domain", { status: 400 });
  }

  const tenant = await db
        .select({
          id: domain.id,
          domain: domain.domain,
        })
        .from(domain)
        .where(eq(domain.domain, domainName))
        .limit(1); 

  if (tenant) {
    return NextResponse.json(tenant);
  } else {
    return new NextResponse("Tenant not found", { status: 404 });
  }
}
