import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  HashRouter
} from "react-router-dom";
import NavigationBar from './components/NavigationBar.js';
import Joke from './components/Joke.js';
import Placeholder from './components/Placeholder.js';
import './App.css'

class App extends Component {    
    render() {
        return(
          <div className="content">
            <HashRouter>              
              {/* <Home/> */}
              {/* <img src={backgroundImage} alt="logo"/> */}
              <div >
              {/* <Breadcrumbs aria-label="breadcrumb">
                <NavLink to="/joke">Joke</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </Breadcrumbs> */}
              <NavigationBar/>
              <Route path="/joke" component={Joke}/>
              <Route path="/contact" component={Placeholder}/>
              </div>
              {/* <ImageBar/>   */}                                   
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

