import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Home extends React.Component {
    render() {
      return (
        <div>
            <AppBar position="sticky" color="secondary">
            <Toolbar>
                <Typography variant="h6">
                    Navigation should go here...
                </Typography>
            </Toolbar>
            </AppBar>
            <h1>Hello, {this.props.name}</h1>
        </div>
      );
    }
  }

export default Home; 