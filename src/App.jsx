import React, {useState, useEffect} from 'react';
import { Navigation } from './components/navigation';
import Pymes from './components/pymes';
import Hipotecarios from './components/hipotecarios';
import Contabilidad from './components/contabilidad';
import Home from './components/home';
import SmoothScroll from 'smooth-scroll';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from './components/blog';
import JsonData from './data/data.json';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  
  const [landingPageData, setLandingPageData] = useState({})
  
  useEffect(() => {
      setLandingPageData(JsonData)
  }, [])

  return (
    // <div>
      <Router>
        <div >
          <Navigation />
          <Switch>
            <Route path="/pymes"><Pymes data={landingPageData.Pymes} /></Route>
            <Route path="/hipotecarios"><Hipotecarios data={landingPageData.Hipotecarios} /></Route>
            <Route path="/contabilidad"><Contabilidad data={landingPageData.Contabilidad} /></Route>
            <Route path="/blog" component={Blog} />
            <Route component={Home}/>

          </Switch>
        </div>
        
      </Router>
    // </div>
  )
}

export default App;
