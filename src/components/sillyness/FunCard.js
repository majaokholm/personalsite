import React from 'react';



import './FunCard.css'

class FunCard extends React.Component {
    render() {
      return (
        <div className="paper" style={this.props.color}>
          <div className="innerpaper">
          </div>
        </div>
      );
    }
}

export default FunCard;