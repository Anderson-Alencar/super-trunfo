import React from 'react';
import PropTypes from 'prop-types';
import CheckboxTrunfo from './CheckboxTrunfo';

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

    return (
      <form className="form">
        <div className="item-form">
          <label htmlFor="cardName" className="form-label">
            Nome da carta:
            <input
              name="cardName"
              className="form-control"
              type="text"
              maxLength={ 20 }
              data-testid="name-input"
              onChange={ onInputChange }
              value={ cardName }
            />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="cardDescription" className="form-label">
            Descrição da carta:
            <textarea
              name="cardDescription"
              className="form-control"
              maxLength={ 60 }
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="cardAttr1" className="form-label">
            Primeiro atributo:
            <input
              name="cardAttr1"
              className="form-control"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="cardAttr2" className="form-label">
            Segundo atributo:
            <input
              name="cardAttr2"
              className="form-control"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="cardAttr3" className="form-label">
            Terceiro atributo:
            <input
              name="cardAttr3"
              className="form-control"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="alert-attr">
          <p>
            Os atributos devem conter um valor entre 0 - 90
            e a soma dos três valores não deve ultrapassar 210
          </p>
        </div>
        <div className="item-form input-group">
          <label htmlFor="cardImage" className="form-label input-group-text">
            Insira uma imagem:
            <input
              name="cardImage"
              className="form-control"
              type="text"
              placeholder="Cole a URL de uma imagem válida"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="cardRare" className="form-label">
            Raridade
            <select
              name="cardRare"
              className="form-select form-control"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </div>
        <div className="item-form">
          <CheckboxTrunfo
            hasTrunfo={ hasTrunfo }
            cardTrunfo={ cardTrunfo }
            onInputChange={ onInputChange }
          />
        </div>
        <div className="item-form">
          <button
            type="button"
            className="btn btn-primary"
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
