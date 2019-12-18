import React ,{ Component } from 'react';
import { Card, CardBody, CardTitle, Button, Fade, CardText } from 'reactstrap';

class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
    }
    render() {
        let { setup, punchline } = this.props.humor;
        return(
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{setup}</CardTitle>
                        <Button color="secondary" onClick={this.toggle}>Laugh</Button>
                        <Fade in={this.state.fadeIn} className='my-2'>
                            <CardText>{punchline}</CardText>
                        </Fade>
                    </CardBody>
                </Card>
            </div>
        );
    }
    toggle() {
        this.setState({
          fadeIn: !this.state.fadeIn
        });
    }
}
export default Jokes;