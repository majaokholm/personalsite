import React from 'react';
import gif from './giphy.gif';
import './Sillyness.css'

class Sillyness extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      joke: "sad default joke"
    };
  }
  getJoke = () => {
    console.log("test")
    fetch('https://icanhazdadjoke.com/', {
      headers: {
      'Content-Type': 'application/json',
      }})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            joke: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error            
          });
          console.log(error)
        }
      )
  }
  componentDidMount() {    
    this.getJoke();
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
              <div className="modal-body">
                {this.state.joke}
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