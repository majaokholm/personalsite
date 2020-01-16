import React from 'react';
import FunCard from './FunCard.js';
import gif from './giphy.gif';
import './Sillyness.css'

class Sillyness extends React.Component {
    render() {
      return (
        <div className="container">          
            <FunCard color={{backgroundColor: 'yellow'}}/>
            <FunCard/>
            <FunCard/>
            <FunCard/>
            <FunCard/>
            <FunCard/>
            <img className="gif" src={gif} alt=""/>
        </div>
      );
    }
}

export default Sillyness;