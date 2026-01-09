import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm"; 
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/config/db";
import { usersTable } from "@/config/schema";

export async function POST(req:NextRequest){
    const user = await currentUser();
    const users = await  db.select().from(usersTable)
    .where(eq(usersTable.email,user?.primaryEmailAddress?.emailAddress as string))
if(users?.length == 0){
 const data = {
    name:user?.fullName??'',
    email:user?.primaryEmailAddress?.emailAddress as string,
    age: 0, // Provide a default age value
 }
 
 const result = await db.insert(usersTable).values({
    ...data
}).returning();
    return NextResponse.json(result[0] ?? {})
}
return NextResponse.json(users[0] ?? {})
}