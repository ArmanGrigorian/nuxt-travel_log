import { int, real, sqliteTable, text, unique } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { user } from "./auth";

export const location = sqliteTable(
  "location",
  {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    slug: text().notNull().unique(),
    description: text(),
    lat: real().notNull(),
    long: real().notNull(),
    userId: int()
      .notNull()
      .references(() => user.id),
    createdAt: int()
      .notNull()
      .$default(() => Date.now()),
    updatedAt: int()
      .notNull()
      .$default(() => Date.now())
      .$onUpdate(() => Date.now()),
  },
  (t) => [unique().on(t.name, t.userId)],
);

export const InsertLocation = createInsertSchema(location, {
  name: (field) => field.min(1).max(128),
  description: (field) => field.max(1024).optional(),
  lat: (field) => field.min(-90).max(90),
  long: (field) => field.min(-180).max(180),
}).pick({
  name: true,
  description: true,
  lat: true,
  long: true,
});
