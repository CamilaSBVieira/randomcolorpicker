import React from 'react';
import './App.css';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [40, 27, 88] };
    this.applyColor = this.applyColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
    this.formatColor = this.formatColor.bind(this);
  }

  applyColor() {
    document.body.style.background = this.formatColor(this.state.color);
  }

  formatColor(color) {
    return `rgb(${color.join(', ')})`;
  }

  chooseColor() {
    let newColor = [];

    for (let i = 0; i < 3; i++) {
      let rand = Math.floor(Math.random() * 256);
      newColor.push(rand);
    }

    return newColor;
  }

  handleClick() {
    this.setState({ color: this.chooseColor() });
  }

  render() {
    return (
      <div className='App'>
        <h1>Your color is {this.formatColor(this.state.color)}</h1>
        <Button changeColor={this.handleClick} name='botao' />
      </div>
    );
  }

  componentDidMount() {
    this.applyColor();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.color !== this.state.color) {
      this.applyColor();
    }
  }
}

export default App;
