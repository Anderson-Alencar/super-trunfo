import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    let divTrunfo;
    if (hasTrunfo) {
      divTrunfo = <span>Você já tem um Super Trunfo em seu baralho</span>;
    } else {
      divTrunfo = (
        <label htmlFor="cardTrunfo">
          Super Trunfo
          <input
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
      );
    }

    return (
      <form className="form">
        <div className="item-form">
          <label htmlFor="cardName">
            Nome da carta:
            <input
              name="cardName"
              type="text"
              data-testid="name-input"
              onChange={ onInputChange }
              value={ cardName }
            />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="cardDescription">
            Descrição da carta:
            <textarea
              name="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="cardAttr1">
            Primeiro atributo:
            <input
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="cardAttr2">
            Segundo atributo:
            <input
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="cardAttr3">
            Terceiro atributo:
            <input
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="cardImage">
            Insira uma imagem:
            <input
              name="cardImage"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="item-form">
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </div>
        <div className="item-form">
          {divTrunfo}
        </div>
        <div className="item-form">
          <button
            type="submit"
            data-testid="save-button"
            value="Salvar"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
