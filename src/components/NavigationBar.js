import React from 'react';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import './NavigationBar.css';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navigation">
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink className="navLink" exact to="/">
            Home
          </NavLink>
          <NavLink className="navLink" to="/sillyness">
            Sillyness
          </NavLink>
          {/* <NavLink  className="navLink" to="/about">About me</NavLink >
              <NavLink  className="navLink" to="/resume">Resume</NavLink >             */}
        </Breadcrumbs>
      </div>
    );
  }
}

export default NavigationBar;
