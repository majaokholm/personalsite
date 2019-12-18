import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.js';
import { Jumbotron, Container, Row, Col} from 'reactstrap';
import Jokes from './Jokes';

class App extends Component {
    constructor() {
        super();
        this.state = {
          jokes: [
            {
              setup: "What time did the man go to the dentist?",
              punchline: "Tooth hurt-y"
            },
            {
              setup: "Did you hear about the guy who invented Lifesavers?",
              punchline: "They say he made a mint"
            },
            {
              setup: "Why do chicken coops only have two doors?",
              punchline: "Because if they had four, they would be chicken sedans!"
            },
            {
              setup: "Why did the Clydesdale give the pony a glass of water?",
              punchline: "Because he was a little horse!"
            }
          ]
        }
    }
    render() {
        let jokeCards = this.state.jokes.map(humor => {
            return (
              <Col className="p-3" sm="4">
                <Jokes humor={humor} />
              </Col>
            )
        })
        return(
            <div>
                <Home name={"World"}/>
                <Jumbotron>
                <h1 className="display-3">Joke Cards</h1>
                <p className="lead">Welcome to the next billion dollar app taking the world by storm</p>
                    <hr className="my-2" />
                    <p>Prepare to be amused!</p>
                    <p className="lead">
                </p>
                </Jumbotron>
                <Container fluid>
                    <Row>
                        {jokeCards}
                    </Row>
                </Container>           
            </div>
        );
    }
    toggle() {
        this.setState({
          fadeIn: !this.state.fadeIn
        });
    }
}
export default App;

