import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      onInputChange: this.onInputChange,
    };
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name);

    this.setState({ [name]: value });
  }

  onSaveButtonClick = () => null;

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ... this.state }
        />
        <Card
          { ... this.state }
        />
      </div>
    );
  }
}

export default App;
