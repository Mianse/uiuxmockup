'use client'
import React, { useEffect ,useState} from 'react';
import ProjectHeader from './_shared/ProjectHeader';
import SetingSection from './_shared/SetingSection';
import axios from 'axios';
import { useParams } from 'next/navigation'; 
import { projectType } from '@/type/types';
import { ScreenConfig } from '@/type/types';
import { Loader2Icon } from 'lucide-react';

const ProjectCanvasPlaground =  () => {
  const {projectId} = useParams()
  const [projectDetail,setProjectDetail] = useState<projectType>()
  const [screenConfig, setScreenConfig] = useState<ScreenConfig[]>([])
  const [loading, setLoading] = useState(false)
  const [loadingMsg, setLoadingMsg] = useState('Loading')
  useEffect(()=>{
    projectId&&GetProjectDetails()
  },[projectId])
  const GetProjectDetails= async()=>{
    setLoadingMsg('loading...')
    setLoading(true)
    const result = await axios.get('/api/project?projectId='+projectId)
    console.log(result.data)
    setProjectDetail(result?.data?.projectDetail)
    setScreenConfig(result?.data?.screenConfig)
    //if(result?.data?.screenConfig?.length==0){
     // generateScreenConfig()
   // }
    setLoading(false)
  }

  useEffect(()=>{
      if(projectDetail && screenConfig&&screenConfig?.length==0){
          generateScreenConfig()
      }
  },[projectDetail&&screenConfig])

  const generateScreenConfig= async()=>{
    setLoading(true)
    setLoadingMsg('Generating screen configuration...')

    const result = await axios.post('/api/generate-config',{
      projectId: projectId,
      deviceType: projectDetail?.device,
      userInput: projectDetail?.userInput,
    

    })
    console.log(result.data)
    GetProjectDetails();
    setLoading(false)
  }
  return (
    <div>
      <ProjectHeader/>
      <div>

        {loading &&<div className="p-3 bg-blue-300/20 absolute border-blue-400 rounded-2xl left-1/2 top-20">
          <h2 className="flex gap-2 itemss-center"> <Loader2Icon className="animate-spin"/>{loadingMsg}</h2>
        </div>}
        {/* setting */}
        <SetingSection projectDetail={projectDetail}/>
        {/* canvas */}
      </div>
    </div>
  )
}

export default ProjectCanvasPlaground;
