import React from 'react';
import Landingpage from './landingpage';
import { Switch, Route } from 'react-router-dom';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Aboutme from './aboutme';


const Main = () => (
    <Switch>
      <Route exact path="/" component={Landingpage} />
      <Route path="/aboutme" component={Aboutme} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Switch>
  )
  
  export default Main;