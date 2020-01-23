import React from 'react';
import './SecondAbout.css';


class SecondAbout extends React.Component {
    render() {
      return (    
        <div className="aboutContent">
          <hr></hr>
          <p className="paragraphs">Professionally: Copenhagen based autodidact software developer. I prefer to work with web and mobile technologies, but don’t always get to choose. Would rather shoot myself than read a book about software development </p> 
          <hr></hr>
          <p className="paragraphs">Privately: Live with my French boyfriend and our small daughter. I love to dance and hate not getting my 8 hours of sleep. My general knowledge in incredibly bad but am good at pretending I know what people are talking about</p> 
          <hr></hr>
          <p className="paragraphs">Truthfully: I don’t like being alone and am easily bored. I don’t like following rules but am fortunately pretty conscientious. I plan on having a second youth after I turn 40 and still secretly dream of going to Carnival in Trinidad one day</p> 
        </div>
    );
    }
  }

export default SecondAbout; 