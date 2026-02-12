import { NextRequest, NextResponse } from "next/server";
import { openRouter } from "@/config/openroute";
import { APP_LAYOUT_CONFIG_PROMPT } from "@/data/prompt";
import { ProjectTable, ScreenConfigTable } from "@/config/schema";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";
export async function POST(req: NextRequest){
  const  {userInput,deviceType,projectId,existingScreens}  = await req.json();
  const aiResult = await openRouter.chat.send({
  chatGenerationParams: {
        model: "openai/gpt-oss-120b:free",
        messages: [
          {
            role: "system",
            content: APP_LAYOUT_CONFIG_PROMPT.replace(
              "{deviceType}",
              deviceType
            ),
          },
          {
            role: "user",
            content: userInput,
          },
        ],
      },
  });
  const JSONAiResult = JSON.parse(aiResult?.choices[0]?.message?.content as string)
  if(JSONAiResult){
      //update project with project name
await db.update(ProjectTable).set({
  projectVisualDescription: JSONAiResult?.projectVisualDescription,
  projectName:JSONAiResult?.projectName,
  theme:JSONAiResult?.theme
}).where(eq(ProjectTable.projectId,projectId as string))
  JSONAiResult.screens?.forEach(async (screen: any)=>{
    const result = await db.insert(ScreenConfigTable).values({
      projectId: projectId,
      purpose: screen?.purpose,
      screenDescription: screen?.layoutDescription,
      screenId: screen?.id,
      screenName: screen?.name,
    })
  })
  return NextResponse.json(JSONAiResult)

  }else{
    return NextResponse.json({msg:'internal server error'})
  }

}