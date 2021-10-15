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

  checkFieldsNoEmpty = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;

    if (cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardRare === ''
    ) {
      return false;
    }

    return true;
  }

  checkValueAttrs = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const sum = 210;
    const maxPoints = 90;
    const minPoints = 0;

    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > sum
      || cardAttr1 < minPoints
      || cardAttr1 > maxPoints
      || cardAttr2 < minPoints
      || cardAttr2 > maxPoints
      || cardAttr3 < minPoints
      || cardAttr3 > maxPoints
    ) {
      return false;
    }

    return true;
  }

  enableSaveButton = () => {
    if (this.checkFieldsNoEmpty() && this.checkValueAttrs()) {
      return this.setState({ isSaveButtonDisabled: false });
    }

    return this.setState({ isSaveButtonDisabled: true });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      () => this.enableSaveButton(),
    );
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
