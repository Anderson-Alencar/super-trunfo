import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

const stateDefault = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  noDeleteBtn: true,
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

  onSaveButtonClick = () => {
    const { hasTrunfo, cardsSaves, cardTrunfo, ...othersStates } = this.state;

    this.setState((prevState) => ({
      cardsSaves: [...prevState.cardsSaves, othersStates],
      ...stateDefault,
    }));

    if (cardTrunfo) this.setState({ hasTrunfo: true });
  };

  onDeleteButtonClick = (cardToDel) => {
    const { cardsSaves } = this.state;

    const newState = cardsSaves.filter((card) => card !== cardToDel);

    this.setState({
      cardsSaves: newState,
    });
  }

  render() {
    const { cardsSaves, noDeleteBtn } = this.state;

    return (
      <div className="container">
        <h1>Tryunfo</h1>
        <div className="row">
          <div className="col-sm-6">
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="col-sm-6 preview">
            <Card { ...this.state } noDeleteBtn={ noDeleteBtn } />
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 deck">
          { cardsSaves.map((card) => (
            <div key={ card.cardName }>
              <Card
                { ...card }
                noDeleteBtn={ !noDeleteBtn }
                onDeleteButtonClick={ () => this.onDeleteButtonClick(card) }
              />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
