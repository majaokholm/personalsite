import React,{ Component } from 'react';
import './Imagebar.css';

class ImageBar extends Component {
    render() {
        return(
            <div>                
                <img className='bg' src={'https://images.pexels.com/photos/373892/pexels-photo-373892.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'} alt="shit, something went wrong"/>
            </div>
        );
    }
}

export default ImageBar;