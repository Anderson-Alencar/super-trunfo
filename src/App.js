import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

const stateDefault = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...stateDefault,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      cardsSaves: [],
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

  onSaveButtonClick = (event) => {
    const { hasTrunfo, cardsSaves, cardTrunfo, ...othersStates } = this.state;

    event.preventDefault();
    // addNewCard(this.state);
    this.setState((prevState) => ({
      cardsSaves: [...prevState.cardsSaves, othersStates],
      ...stateDefault,
    }));
    // this.setState(() => ({ ...stateDefault }));
    if (cardTrunfo) this.setState({ hasTrunfo: true });
  };

  render() {
    const { cardsSaves } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
        { cardsSaves.map((card) => (
          <div key={ card.cardName }>
            <Card
              { ...card }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
