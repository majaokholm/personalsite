import React from 'react';
import FunCard from './FunCard.js';

import './Sillyness.css'

class Sillyness extends React.Component {
    render() {
      return (
        <div className="sillyContent">          
            <FunCard color={{backgroundColor: 'yellow'}}/>
            <FunCard/>
            <FunCard/>
            <FunCard/>
            <FunCard/>
            <FunCard/>
        </div>
      );
    }
}

export default Sillyness;