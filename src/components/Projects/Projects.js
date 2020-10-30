import React from 'react';
import projects from '../../fakeData/Allprojects';
import SingleProject from './SingleProject/SingleProject';

const Projects = () => {
    return (
        <div>
            <div className="container">
            <h3 className="text-center blue-text"><strong>Take a look at my projects, please</strong></h3>
            
            <div className="row mt-5">
            {
                projects.map(project=><SingleProject project={project}></SingleProject>)
            }
            

            </div>

            </div>
            

            
           
            
        </div>
    );
};

export default Projects;