import React from 'react';
import ReactDOM from 'react-dom';
import ellipsize from 'ellipsize';

import hotel from './hotel';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotel: false
        };
    }
    render() {
        if (this.state.hotel) {
            const { name, description } = this.state.hotel;
            return (<div>
                <h1>{name}</h1>
                <p>{ellipsize(description)}</p>
            </div>);
        }
        return (<button onClick={() => this.setState({ hotel: hotel })}>Show Hotel</button>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
