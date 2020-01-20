import React from 'react';
import smily from './face.png'; 
import './About.css';


class About extends React.Component {
    render() {
      return (
        <div className="contentAbout">
          <h1 className="AmaticSCFont">Who is 'Maja'?</h1>          
          <div className="horizontal">            
            <img className="smily" src={smily} alt="fuckup"/>      
              <ul className="OpenSansCondensedFont">
                <li>Lorem ipsum dolor sit amet, at tincidunt sadipscing temporibus pro</li>
                <li>Lorem ipsum sed fierent intellegat an</li>
                <li>Hinc ipsum congue ea mel</li>
                <li>Cu nusquam sensibus efficiendi ius, ut cetero invenire pro</li>
                <li>Hinc ipsum congue ea mel. Cu nusquam sensibus efficiendi ius, ut cetero invenire pro, id viris propriae scriptorem usu. </li>
              </ul>
          </div>
        </div>
      );
    }
  }

export default About; 