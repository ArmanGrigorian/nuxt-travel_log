import { and, eq } from "drizzle-orm";
import db from "./index";
import { location } from "./schema/location";

export async function findLocationByNameAndUser(name: string, userId: number) {
  return db.query.location.findFirst({
    where: and(eq(location.name, name), eq(location.userId, userId)),
  });
}

export async function findLocationBySlug(slug: string) {
  return db.query.location.findFirst({
    where: eq(location.slug, slug),
  });
}

export async function insertLocation(
  values: Omit<typeof location.$inferInsert, "id" | "createdAt" | "updatedAt">,
) {
  return db.insert(location).values(values).returning();
}
