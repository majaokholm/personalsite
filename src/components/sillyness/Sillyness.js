import React from 'react';
import gif from './giphy.gif';
import './Sillyness.css'

class Sillyness extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {index: 0};    
  }
  getJoke = () => {          
    if(this.state.index < this.props.humor.length-1){
      this.setState({index: this.state.index + 1})
    }
    else{
      this.setState({index: 0})
    }        
  }
  render() {
    return (
      <div className="container">            
        
        <div className="innerContainer">
          <h1 className="AmaticSCFont">Ready to laugh?</h1>   
          <button type="button" className="buttonStyle" data-toggle="modal" data-target="#modal" onClick={this.getJoke}>Bring it on</button> 
        </div>
        
        <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">{this.props.humor[this.state.index].setup}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.props.humor[this.state.index].punchline}
              </div>
            </div>
          </div>
        </div> 
        <img className="gif" src={gif} alt=""/>
      </div>
    );    
  }
}
export default Sillyness;