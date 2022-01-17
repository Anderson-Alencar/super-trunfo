import React from 'react';
import PropTypes from 'prop-types';

export default function CheckboxTrunfo({ hasTrunfo, cardTrunfo, onInputChange }) {
  return (
    <div>
      {
        hasTrunfo
          ? (
            <span
              className="alert alert-warning"
            >
              Você já tem um Super Trunfo em seu baralho

            </span>
          )
          : (
            <label htmlFor="cardTrunfo" className="form-check-label">
              Super Trunfo
              <input
                name="cardTrunfo"
                className="form-check-input"
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          )
      }
    </div>
  );
}

CheckboxTrunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
