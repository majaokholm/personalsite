import React from 'react';
import './Home.css'

const statements = ['popcorn-loving developer','samba-dancing lady','sillyness activist', 'stackoverflow lover', 'pro googler', 'musicalchair fanatic', 'mommy of one', 'speelingbee looser'];

class Home extends React.Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = statements[this.state.textIdx % statements.length];
    return (
      <div>
        <p className="headding">Maja Okholm</p>
        <p>{textThatChanges}</p>
      </div>
    );
  }
}

export default Home; 
