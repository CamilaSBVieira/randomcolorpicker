import React from 'react';

class Button extends React.Component {
    render() {
        return <button onClick={this.props.changeColor}
                       className={this.props.name}>Randomize</button>
    }
}

export default Button;