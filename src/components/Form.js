import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <div className="item-form">
          <label htmlFor="name">
            Nome da carta:
            <input id="name" type="text" data-testid="name-input" />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="description">
            Descrição da carta:
            <textarea id="description" data-testid="description-input" />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="attr1">
            Primeiro atributo:
            <input id="attr1" type="number" data-testid="attr1-input" />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="attr2">
            Segundo atributo:
            <input id="attr2" type="number" data-testid="attr2-input" />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="attr3">
            Terceiro atributo:
            <input id="attr3" type="number" data-testid="attr3-input" />
          </label>
        </div>
        <div className="item-form">
          <label htmlFor="image">
            Insira uma imagem:
            <input id="image" type="text" data-testid="image-input" />
          </label>
        </div>
        <div className="item-form">
          <select data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </div>
        <div className="item-form">
          <label htmlFor="trunfo">
            Super Trunfo
            <input id="trunfo" type="checkbox" data-testid="trunfo-input" />
          </label>
        </div>
        <div className="item-form">
          <input type="button" data-testid="save-button" value="Salvar" />
        </div>
      </form>
    );
  }
}

export default Form;
