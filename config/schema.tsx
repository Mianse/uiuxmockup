import { integer, pgTable, varchar,date, json ,text} from "drizzle-orm/pg-core";

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
  projectName:varchar(),
  theme:varchar(),
  userInput:varchar(),
  device:varchar(),
  createdOn:date().defaultNow().notNull(),
  config: json(),
  projectVisualDescription:text(),
  userId:varchar().references(()=>usersTable.email).notNull(),
})

export const ScreenConfigTable = pgTable('screenConfig',{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  projectId:varchar().references(()=>ProjectTable.projectId),
  screenId:varchar(),
  screenName:varchar(),
  purpose:varchar(),
  screenDescription:varchar(),
  text:text()

}) 