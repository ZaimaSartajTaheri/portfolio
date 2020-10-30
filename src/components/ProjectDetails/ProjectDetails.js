import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../fakeData/Allprojects';
import './ProjectDetails.css';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';

const ProjectDetails = () => {
    const id=useParams();
    const project = projects.find(project => project.projectId === id.projectId);
    console.log(project);
    return (
        <div className="projectDetails">
        <div className="container">
           
            <div className="row">
                <div className="col-12 col-md-6">
                <h2>{project.name}</h2>
                <p className="mt-2">{project.description}</p>

                </div>
                <div className="right-side col-12 col-md-6 mt-3">
                  <p><strong>Technologies: </strong>{project.technologies}</p>
                  <p><strong>Hosting & Authentication: </strong>{project.hostingAuthentication}</p>
                  <h6>You can view my code-</h6>
                  <p><GitHubIcon></GitHubIcon> <strong>Github</strong> </p>
                  <ul className="codeul list-unstyled ml-3">
                  <li> <a className="link" href={project.frontend} target="_blank"> <strong>FrontEnd Code</strong> </a></li>
                  <li><a className="link" href={project.backend} target="_blank"> <strong>BackEnd Code</strong> </a></li>
                  </ul>
                  
                  <a className="link" href={project.liveWebsite} target="_blank"><LanguageIcon></LanguageIcon> <strong>View my website</strong></a>
                  </div>
            </div>
            <div className="row mt-5 images">
                <div className="mt-3 col-12 col-md-6">
                <a href={project.image2} target="_blank"><img className="sideImage" src={project.image2} alt=""/></a>
                </div>
                <div className="mt-3 col-12 col-md-6">
                <a href={project.image3} target="_blank"><img className="sideImage" src={project.image3} alt=""/></a>
                </div>
                <div className="mt-3 col-12 col-md-6">
                <a href={project.image4} target="_blank"><img className="sideImage" src={project.image4} alt=""/></a>
                </div>
                
            </div>
            
            
           
            
        </div>
        </div>
    );
};

export default ProjectDetails;