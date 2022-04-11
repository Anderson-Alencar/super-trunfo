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

    const noImage = 'https://www.unialfa.com.br/tudounialfa/img/semfoto.png';

    return (
      <div className="container-card">
        <div className="my-card">
          <h2 className="card-name" data-testid="name-card">{ cardName || 'Nome'}</h2>
          <div className="container-img">
            <img
              src={ cardImage || noImage }
              className="card-img-top"
              alt={ cardName }
              data-testid="image-card"
            />
            {
              cardTrunfo
              && (
                <span
                  className="super-trunfo"
                  data-testid="trunfo-card"
                >
                  Super Trunfo

                </span>)
            }
          </div>
          <div>
            <div className="card-description">
              <p data-testid="description-card">
                { cardDescription || 'Descrição da carta' }

              </p>
            </div>
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
          </div>
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
