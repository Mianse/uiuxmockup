 import React from 'react';
 import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';
 
 const ProjectHeader = () => {
   return (
    <div className="flex items-center justify-between p-4 shadow">
         <div className ='flex gap-2 items-center'> 
               <Image src="/logo.png" alt="Logo" width={40} height={40} />
               <h2 className='text-xl font-semibold'><span className='text-primary'>UIUX</span> Damian</h2>
              
            </div>
            <Button><Save/>save</Button> 
    </div>
    
           
    
   );
 }
 
 export default ProjectHeader;
 