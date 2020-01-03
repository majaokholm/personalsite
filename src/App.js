import React ,{ Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import NavigationBar from './components/NavigationBar.js';
import Joke from './components/Joke.js';
import About from './components/About.js';
import './App.css'
import Home from './components/Home.js';

class App extends Component {    
    render() {
        return(
          <div className="content">
            <HashRouter>              
              <NavigationBar/>
              <Route path="/home" component={Home}/>
              <Route path="/joke" component={Joke}/>
              <Route path="/about" component={About}/>                                  
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

