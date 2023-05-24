import React from 'react';
import { PropTypes } from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import '../styles/Crypto.css';

const Crypto = ({
  img, name, price, priceChange, symbol,
}) => (
  <div className="myCard">
    <div className="arrow">
      <FaArrowAltCircleRight />
    </div>
    <div className="logoBox">
      <img src={img} alt="Currency Name" className="logo" />
    </div>
    <div className="myCard myflex">
      <div className="leftCard myflex card-column">
        <p>
          <span className="cardTitle">Name:</span>
          {name}
        </p>
        <p>
          <span className="cardTitle">Symbol:</span>
          {symbol}
        </p>
      </div>
      <div className="rightCardmyflex card-column">
        <p>
          <span className="cardTitle">Price: $</span>
          {price.toFixed(2)}
        </p>
        <p>
          <span className="cardTitle">Price Change (1W):</span>
          {priceChange}
        </p>
      </div>
    </div>
  </div>
);

Crypto.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceChange: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Crypto;
