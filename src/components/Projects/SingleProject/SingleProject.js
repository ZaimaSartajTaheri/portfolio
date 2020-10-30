import React from 'react';
import { Link } from 'react-router-dom';
import './SingleProject.css'

const SingleProject = ({project}) => {
    return (
        
        <div className="singleProject col-12 col-md-6 mt-5">
            <Link to={"/projectDetails/" + project.projectId}>
            <img className="projectImage" src={project.image1} alt=""/>
            <div className="overlay">{project.name}</div>
            </Link>
        </div>
        
    );
};

export default SingleProject;