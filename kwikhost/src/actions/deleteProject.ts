"use server";

import { db } from "@/db/drizzle";
import { domain } from "@/db/schema";
import { eq } from "drizzle-orm";


export async function DeleteDomainById(domainId: string) {
  const domains = await db
    .delete(domain) 
    .where(eq(domain.id, domainId));

  return domains;
}