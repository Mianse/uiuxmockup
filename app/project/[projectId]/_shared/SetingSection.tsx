'use client'
import React from 'react';
import { useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Camera, Share, Sparkles } from 'lucide-react';
import { THEME_NAME_LIST } from '@/data/Themes';
import { THEMES } from '@/data/Themes';
import { useState } from 'react';
import { projectType } from '@/type/types';

type Props = {
  projectDetail:projectType|undefined
}

const SetingSection = ({projectDetail}:Props) => {
  const [selectedTheme,setSelectedTheme] =useState('AURORA_INK');
  const [projectName,setProjectName] = useState(projectDetail?.projectName)
  const [userNeScreenInput,setUserNewScreenInput] = useState<string>()
  useEffect(()=>{
    projectDetail&&setProjectName(projectDetail?.projectName)
  },[projectDetail])
  return (
    <div className='w-[350px]  h-[90vh] p-5 border-r'>
        <h2 className="font-medium text-lg">Setting</h2>
        <div className="mt-5">
            <h2 className="text-sm mb-1">project name</h2>
        <Input placeholder="project name"
        value={projectName}
        onChange={(event)=>setProjectName(event.target.value)}
        />

        <h2 className="text-sm mb-1">Generate New Screen</h2>
        <Textarea placeholder="Enter prompt to Gnerate Using Ai"
        onChange={(event)=>setUserNewScreenInput(event.target.value)}
        />
        <Button size={'sm'} className="mt-2 w-full"> <Sparkles/> with Ai</Button>

        </div>
        <div className="mt-5">
          <h2 className="text-sm mb-1"> Themes</h2>
          <div className="h-[200px] overflow-auto">
          <div>
            {THEME_NAME_LIST.map((theme,index)=>( 
              <div className={`p-3 border rounded-xl mb-2
              ${theme===selectedTheme&&'border-primary bg-primary/20'}
              `} onClick={()=>setSelectedTheme(theme)}>
                <h2>{theme}</h2>
                <div className="flex gap-2">
                   <div className={`h-4 w-4 rounded-full`}
                style={{background:THEMES[theme].primary}}
                />
                <div className={`h-4 w-4 rounded-full`}
                style={{background:THEMES[theme].secondary}}
                />
                <div className={`h-4 w-4 rounded-full`}
                style={{background:THEMES[theme].accent}}
                />
                <div className={`h-4 w-4 rounded-full`}
                style={{background:THEMES[theme].background}}
                />
                <div className="h-4 w-4 rounded-full"
                
                style={{background: `linear-gradient(135deg, ${THEMES[theme].background},
                 ${THEMES[theme].primary},
                  ${THEMES[theme].accent})`}}>

                </div>
                </div>
               
              </div>
            ))}
          </div>
          </div>
        </div>
         <div className="mt-5">
            <h2 className="text-sm mb-1">project name</h2>
        <Input placeholder="project name"/>

        <h2 className="text-sm mb-1">Extras</h2>
        <div className="flex gap-3">
        <Button size={'sm'} variant={'outline'} className="mt-2 "> <Camera/> ScreenShot</Button>
        <Button size={'sm'} variant={'outline'} className="mt-2 "> <Share/> Save</Button>

        </div>
        
        </div>
        </div>  
   
  );
}

export default SetingSection;
