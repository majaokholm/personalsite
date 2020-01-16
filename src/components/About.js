import React from 'react';
import smily from './face.png'; 
import './About.css';


class About extends React.Component {
    render() {
      return (
        <div className="horizontal">
          <img className="smily" src={smily} alt="fuckup"/>
          <p>This is  a placeholder....
              Lorem ipsum dolor sit amet, at tincidunt sadipscing temporibus pro, sed fierent intellegat an. Hinc ipsum congue ea mel. Cu nusquam sensibus efficiendi ius, ut cetero invenire pro, id viris propriae scriptorem usu. In ius postulant reprimique, cu pro vitae urbanitas deterruisset, nec dicunt facilisis ei. Eu vim iuvaret intellegat. Per eu apeirian iudicabit rationibus, est ei tantas sensibus scribentur, partem persecuti honestatis ex mei.
          </p>          
        </div>
      );
    }
  }

export default About; 