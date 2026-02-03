import React from 'react';
import ProjectHeader from './_shared/ProjectHeader';
import SetingSection from './_shared/SetingSection';

const ProjectCanvasPlaground = () => {
  return (
    <div>
      <ProjectHeader/>
      <div>
        {/* setting */}
        <SetingSection/>
        {/* canvas */}
      </div>
    </div>
  )
}

export default ProjectCanvasPlaground;
