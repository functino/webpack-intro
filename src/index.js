import React from 'react';
import ReactDOM from 'react-dom';
import ellipsize from 'ellipsize';

import './index.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotel: false
        };
    }
    showHotel() {
        import('./hotel').then((hotel) => {
            this.setState({ hotel: hotel });
        });
    }
    render() {
        if (this.state.hotel) {
            const { name, description } = this.state.hotel;
            return (<div>
                <h1>{name}</h1>
                <p>{ellipsize(description)}</p>
            </div>);
        }
        return (<button onClick={this.showHotel.bind(this)}>Show Hotel</button>);
    }
}

document.body.innerHTML = '<div id="root"></div>';
ReactDOM.render(<App />, document.getElementById('root'));
