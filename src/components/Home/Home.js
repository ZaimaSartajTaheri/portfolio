import React from 'react';
import './Home.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Home = () => {
    return (
        <div className="home">
            <div className="container">
           
            <div>
            <img className="profileImage mr-3" src="https://i.ibb.co/KyPp9Py/profile.png" alt=""/>
            <div class="typewriter">
            <h1 className="mt-3 name">ZAIMA SARTAJ TAHERI</h1>
            </div>
            </div>
            
            <h3>Full Stack | Frontend | Backend</h3>
            
            <a className='btn mt-1 color-back' href='https://drive.google.com/u/0/uc?id=129BsAUjUFjp39aTAu4ZMHxJsB_6NNJ-A&export=download' download>
            Download My Resume
            </a>
            <div className="mt-4 d-flex">
                <a href="https://www.linkedin.com/in/zaima-sartaj-taheri/" target="_blank"><LinkedInIcon className="white-icon"></LinkedInIcon></a>   

                <a href="https://github.com/ZaimaSartajTaheri" target="_blank"><GitHubIcon className="white-icon"></GitHubIcon></a>
                

            </div>
            <p className="text-white mt-2"><MailOutlineIcon className="white-icon"></MailOutlineIcon> zstaheri19999@gmail.com</p>


            </div>
            
        </div>
    );
};

export default Home;