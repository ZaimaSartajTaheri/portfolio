import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resumeContainer">
            <div className='container'>
           <div className="introduction">
           <h1 className='myName'>
                ZAIMA SARTAJ TAHERI
            </h1>
            <h3>Full Stack | Frontend | Backend</h3>
            <a className='btn blue-back button mt-3' href='https://drive.google.com/u/0/uc?id=129BsAUjUFjp39aTAu4ZMHxJsB_6NNJ-A&export=download' download>
            Download My Resume
            </a>
           </div>
           <div className='about col-md-6 mt-5'>
               <h2>Summary</h2>
               <p>I am pursuing my BSC in Computer Science & Engineering from Chittagong University of Engineering & Technology.I am very passionate about setting my career as a web developer.I am very comfortable with HTML5 ,CSS3 ,Bootstrap4 ,Material UI ,JavaScript ,ReactJs ,NodeJs ,MongoDB ,SQL.I am also familiar with PHP, Python, Machine Learning Algorithms and Data Analysis.I think in our field learning never stops so I want to keep learning new technologies.</p>

           </div>
           <div className='skills ml-auto col-md-5 mt-5'>
              <h2>Skills</h2>
              <p><strong>Programming Languages:</strong>ReactJs, NodeJs, Vanilla JavaScript, Python, C, C++</p>
              <p><strong>Framework: </strong>Boostrap4, MaterialUI</p>
              <p><strong>Database</strong>mongodb, MySQL, XAMPP</p>
              <p><strong>Tools:</strong>Visual Studio, Sublime Text</p>
              <p><strong>More:</strong>Heroku, Netlify, Firebase</p>
           </div>
           <div className='education col-md-6 mt-5'>
               <h2>Education</h2>
               <div>
                   <h3>Chittagong University of Engineering and Technology</h3>
                   <h5>BSC in Computer Science and Engineering</h5>
                   <h6>2018-2021</h6>
                   <p>Still Studying</p>
               </div>
               <br></br>
               <div>
                   <h3>Rajuk Uttara Model College</h3>
                   <h5>Higher Secondary Certificate</h5>
                   <h6>2015-2017</h6>
                   <p>GPA: 5.00 out of 5.00</p>
               </div>
               <br></br>
               <div>
                   <h3>Viqarunnisa Noon School & College</h3>
                   <h5>Secondary School Certificate</h5>
                   <h6>2013-2015</h6>
                   <p>GPA: 5.00 out of 5.00</p>
               </div>
           </div>
           <div className='comSkill ml-auto col-md-5 mt-4 mb-5'>
               <h2>Communication skill Skill</h2>
               <ul>
                   <li>Exceptional communication and network skill.</li>
                   <li>Ability to Work under pressure</li>
                   <li>Team leadership</li>
                   <li>Organized, Tech Savvy & has ability to multitask</li>
               </ul>
           </div>
        </div>

        </div>
        
    );
};

export default Resume;