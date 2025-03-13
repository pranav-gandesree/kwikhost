"use server";

import { db } from "@/db/drizzle";
import { file } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GetFiles(domainId: string) {
  const files = await db
    .select() 
    .from(file)
    .where(eq(file.domainId, domainId));

  return files;
}

