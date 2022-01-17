import React from 'react';
import PropTypes from 'prop-types';

export default function DeleteBtn({ onDeleteButtonClick }) {
  return (
    <button
      type="button"
      className="btn btn-danger"
      data-testid="delete-button"
      onClick={ onDeleteButtonClick }
    >
      Excluir
    </button>
  );
}

DeleteBtn.propTypes = {
  onDeleteButtonClick: PropTypes.func.isRequired,
};
