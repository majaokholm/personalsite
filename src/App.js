import React ,{ Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import './App.css'
import NavigationBar from './components/NavigationBar.js';
import Sillyness from './components/Sillyness.js';
import About from './components/About.js';
import Home from './components/Home.js';
import Resume from './components/Resume.js';

class App extends Component {    
    render() {
        return(
          <div className="content">
            <HashRouter>              
              <NavigationBar/>
              <Route path="/home" component={Home}/>
              <Route path="/sillyness" component={Sillyness}/>
              <Route path="/about" component={About}/>  
              <Route path="/resume" component={Resume}/>                                  
            </HashRouter>
          </div>
        );
    }
    toggle() {
        this.setState({
          fadeIn: !this.state.fadeIn
        });
    }
}
export default App;

