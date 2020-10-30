import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/projectDetails/:projectId">
            <ProjectDetails/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
