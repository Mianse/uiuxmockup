import { integer, pgTable, varchar,date, json } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer().notNull().default(10),
});

export const ProjectTable =pgTable('project',{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  projectId:varchar().notNull().unique(),
  userInput:varchar(),
  device:varchar(),
  createdOn:date().defaultNow().notNull(),
  config: json(),
  userId:varchar().references(()=>usersTable.email).notNull(),
})