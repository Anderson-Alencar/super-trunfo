import React from 'react';
import PropTypes from 'prop-types';
import DeleteBtn from './DeleteBtn';

class Card extends React.Component {
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
      noDeleteBtn,
      onDeleteButtonClick,
    } = this.props;

    return (
      <div className="card border-dark bg-warning">
        <h2 className="card-header" data-testid="name-card">{ cardName }</h2>
        <img
          src={ cardImage }
          className="card-img-top"
          alt={ cardName }
          data-testid="image-card"
        />
        <div className="card-body">
          <p
            className="bg-dark text-warning"
            data-testid="description-card"
          >
            { cardDescription }

          </p>
          <div className="attr">
            <p>OVR</p>
            <p data-testid="attr1-card">{ cardAttr1 }</p>
          </div>
          <div className="attr">
            <p>ATA</p>
            <p data-testid="attr2-card">{ cardAttr2 }</p>
          </div>
          <div className="attr">
            <p>DEF</p>
            <p data-testid="attr3-card">{ cardAttr3 }</p>
          </div>
          <p className="rarity" data-testid="rare-card">{ cardRare }</p>
          {
            cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>
          }

          { noDeleteBtn
            ? null : <DeleteBtn onDeleteButtonClick={ onDeleteButtonClick } /> }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  noDeleteBtn: PropTypes.bool.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default Card;
