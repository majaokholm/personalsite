import React from 'react';
import {
  NavLink
} from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import './NavigationBar.css'

class NavigationBar extends React.Component {
    render() {
      return (
        <div className="navigation" >
            <Breadcrumbs aria-label="breadcrumb"> 
                <NavLink className="navLink" to="/joke">Joke</NavLink>
                <NavLink className="navLink"  to="/contact">Contact</NavLink>
            </Breadcrumbs>
        </div>
        );
    }
  }

export default NavigationBar; 