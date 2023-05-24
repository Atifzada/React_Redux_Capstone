import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from '../redux/detailSlice';
import '../styles/Details.css';

const CryptoDetails = () => {
  const { currencyID } = useParams();
  const dispatch = useDispatch();
  const { cryptoDetails } = useSelector((state) => state.cryptoDetails);

  useEffect(() => {
    dispatch(getDetails(currencyID));
  }, [currencyID, dispatch]);

  if (!cryptoDetails || cryptoDetails.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detailsCard myflex">
      <h2 className="detailsTitle">{cryptoDetails.name}</h2>
      <img src={cryptoDetails.icon} alt="crypto icon" className="detailsIcon" />
      <div className="detailsContainer">
        <div className="detailsSpecifications detailsBG">
          <span className="detailsText">Abbrivation:</span>
          {cryptoDetails.symbol}
        </div>
        <div className="detailsSpecifications">
          <span className="detailsText">MarketCap: $</span>
          {cryptoDetails.marketCap}
        </div>
        <div className="detailsSpecifications detailsBG">
          <span className="detailsText">Changes Rate (1H) :</span>
          {cryptoDetails.priceChange1h}
        </div>
        <div className="detailsSpecifications">
          <a href={cryptoDetails.websiteUrl}>{cryptoDetails.websiteUrl}</a>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
