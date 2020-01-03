import React from 'react';
import {
  NavLink
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Home extends React.Component {
    render() {
      return (
        <div>
            <AppBar className='appbar'>
            <Toolbar>
                <Typography variant="h6">
                    Navigation should go here...
                    <ul>
                      <li><NavLink to="/joke">Joke</NavLink></li>
                      <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </Typography>
            </Toolbar>
            </AppBar>
        </div>
      );
    }
  }

export default Home; 