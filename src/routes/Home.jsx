import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { v4 as uID } from 'uuid';
import Crypto from '../components/Crypto';
import notFound from '../media/not-found.png';
import { getCrypto } from '../redux/cryptoSlice';
import '../styles/Home.css';

const Home = () => {
  const fetchStanding = useRef(true);
  const { cryptoArray } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [desiredCurrency, setDesiredCurrency] = useState('');

  useEffect(() => {
    if (fetchStanding.current) {
      fetchStanding.current = false;
      dispatch(getCrypto());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkClick = (item) => {
    if (item.id) {
      navigate(`details/${item.id}`);
    }
  };

  const myArray = cryptoArray ? cryptoArray.filter((item) => {
    if (desiredCurrency === '') {
      return item;
    }

    if (item.name.toLowerCase().includes(desiredCurrency.toLowerCase())) {
      return item;
    }

    return null;
  }) : [];

  const result = () => {
    if (myArray.length === 0) {
      return (
        <div className="noRecord">
          <h3 className="noRecordTitle">CryptoCurrency not found.</h3>
          <img src={notFound} alt="No Record Found" className="noRecordImg" />
        </div>
      );
    }
    return myArray.map((item) => (
      <>
        <div
          key={uID()}
          aria-hidden="true"
          onClick={() => checkClick(item)}
          className="currencyContainer"
        >
          <Crypto
            img={item.icon}
            name={item.name}
            price={item.price}
            priceChange={item.priceChange1w}
            symbol={item.symbol}
          />
        </div>
      </>
    ));
  };

  return (
    <>
      <h1 className="title">My Crypto Tracker (MCT)</h1>
      <div className="input">
        <input
          type="text"
          onChange={(e) => setDesiredCurrency(e.target.value)}
          placeholder="Search here..."
          value={desiredCurrency}
        />
      </div>
      <h2 className="CurrTitle darker-bg">Top CryptoCurrencies</h2>
      <div className="mainContainer">{result()}</div>
    </>
  );
};

export default Home;
