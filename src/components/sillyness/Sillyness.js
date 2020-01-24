import React from 'react';
import gif from './giphy.gif';
import './Sillyness.css'

const chuckGifs = ['https://media.giphy.com/media/l1J3Tqz2fpsx60MDe/giphy.gif','https://media.giphy.com/media/l1J3Tqz2fpsx60MDe/giphy.gif', 'https://media.giphy.com/media/AhwuGl0MPNzyg/giphy.gif', 'https://media.giphy.com/media/K2ZWOSOLLYsAE/giphy.gif', 'https://media.giphy.com/media/l1J3KhGhb1E9vqWQ0/giphy.gif', 'https://media.giphy.com/media/L3cUQlPbQMrwQ/giphy.gif', 'https://media.giphy.com/media/l1J3AS8RShMebsmgU/giphy.gif'] 

class Sillyness extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      joke: {
        "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id" : "2mMtMv0NTWaRikTTIotRHA",
        "url" : "",
        "value" : "When Chuck Norris sneezes the rest of the world has 1/16th of an orgasm."
      },
      index:0
    };
  }
  getJoke = () => {    
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())      
      .then(
        (result) => {          
          this.setState({
            isLoaded: true,
            joke: result, 
            index: Math.floor((Math.random() * chuckGifs.length))
          });
          console.log(this.state.index)
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
          <h1 className="AmaticSCFont">Whats up with Chuck?</h1>   
          <button type="button" className="buttonStyle" data-toggle="modal" data-target="#modal" onClick={this.getJoke}>Let me know!</button> 
          <div>
            <p className="smallPrint">Brought to you by Chucknorris.io</p>
          </div>
        </div>
        
        <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <img src={chuckGifs[this.state.index]} alt=""></img>
                {this.state.joke.value}
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