import React ,{ Component } from 'react';
import {
  Route,
  Switch,
  BrowserRouter 
} from "react-router-dom";
import './App.css'
import NavigationBar from './components/NavigationBar.js';
import Sillyness from './components/Sillyness.js';
import About from './components/About.js';
import Home from './components/Home.js';
import Resume from './components/Resume.js';
import Footer from './components/Footer.js';

class App extends Component {    
    render() {
        return(
          <div>
            <BrowserRouter >              
              <NavigationBar/>
              <div>
                <Switch>               
                  <Route path="/sillyness" component={Sillyness}/>
                  <Route path="/about" component={About}/>  
                  <Route path="/resume" component={Resume}/>                                  
                  <Route path="/" component={Home}/>
                </Switch>
              </div>
            </BrowserRouter>
            <Footer/>
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

