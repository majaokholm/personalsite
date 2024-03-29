import React from 'react';
import './Home.css';

const statements = [
  'popcorn lover',
  'samba dancer',
  'sillyness activist',
  'stackoverflow enthusiast',
  'pro googler',
  'musicalchair fanatic',
  'speelingbee looser'
];

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

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = statements[this.state.textIdx % statements.length];
    return (
      <div className="content">
        <div className="logo">
          <p className="AmaticSCFont">Maja Okholm</p>
          <p className="OpenSansCondensedFontHome">{textThatChanges}</p>
        </div>
      </div>
    );
  }
}

export default Home;
