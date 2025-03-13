"use server";

import { db } from "@/db/drizzle";
import { domain } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GetDomains(userId: string) {
  const domains = await db
    .select() 
    .from(domain)
    .where(eq(domain.userId, userId));

  return domains;
}
