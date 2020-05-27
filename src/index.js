import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

// Pages
import Home from './page/Home';
import About from './page/About';
import NotFound from './page/NotFound'
import Projects from './page/Projects';

// Components
import Navbar from './component/navbar/NavBar'
import Footer from './component/footer/Footer'

const routing = (
  <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/about" component={About} /> 
        <Route exact path="/projects" component={Projects} />

        <Route exact path='*' component={NotFound} />
      </Switch>
    <Footer/>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')); 