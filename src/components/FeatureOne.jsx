import React from "react";
import background5 from "../assets/background5.jpg";

const FeatureOne = () => {
  return (
    <div className="feature-container">
      <div className="swap-token-container">
        <img src={background5} alt="" />
      </div>
      <div className="feature-description">
        <div className="feature-description-title">
          <h3>
          • Unlock Your Digital Feature
          </h3>
          <h1>
            Trade Any Token
          </h1>
        </div>
        <p className="feature-description-paragraph">
          We&#39;ve developed CryptoX to facilitate seamless cross-chain swaps with just a few clicks. Easily convert your coins between blockchains or exchange them for different cryptocurrencies and tokens.
        </p>
        <div className="btn-container">
          <button className="secondary">
            <span>Start trading</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
