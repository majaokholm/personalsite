import React ,{ Component } from 'react';
import {
  Route,
  Switch,
  HashRouter 
} from "react-router-dom";
import './App.css'
import NavigationBar from './components/NavigationBar.js';
import Sillyness from './components/sillyness/Sillyness.js';
import About from './components/About.js';
import Home from './components/Home.js';
import Resume from './components/resume/Resume.js';
import Footer from './components/Footer.js';

class App extends Component {  
  constructor() {
    super();
    this.state = {
      jokes: [
        {
          setup: "What time did the man go to the dentist?",
          punchline: "Tooth hurt-y"
        },
        {
          setup: "Did you hear about the guy who invented Lifesavers?",
          punchline: "They say he made a mint"
        },
        {
          setup: "Why do chicken coops only have two doors?",
          punchline: "Because if they had four, they would be chicken sedans!"
        },
        {
          setup: "Why did the Clydesdale give the pony a glass of water?",
          punchline: "Because he was a little horse!"
        }
      ]
    }
  }  
  render() {
      return(
        <div>
          <HashRouter >              
            <NavigationBar/>
            <div>
              <Switch>               
                <Route path="/sillyness" component={() => <Sillyness humor={this.state.jokes} />}/>
                <Route path="/about" component={About}/>  
                <Route path="/resume" component={Resume}/>                                  
                <Route path="/" component={Home}/>
              </Switch>
            </div>
          </HashRouter>
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

