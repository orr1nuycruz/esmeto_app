import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-image-content">
        <div className="home-image-item">
          <div className="image-wrapper">
            <div className="image-wrapper-content">
              <div className="image-wrapper-text">
                <h1>Tops</h1>
              </div>
            </div>
          </div>
          <div className="home-image-background"></div>
        </div>
        <div className="home-image-item">
          <div className="image-wrapper">
            <div className="image-wrapper-content">
              <div className="image-wrapper-text">
                <h1>Outerwear</h1>
              </div>
            </div>
          </div>
          <div className="home-image-background"></div>
        </div>
        <div className="home-image-item">
          <a href="/about">
            <div className="image-wrapper">
              <div className="image-wrapper-content">
                <div className="image-wrapper-text">
                  <h1>Tote Bags</h1>
                </div>
              </div>
            </div>
          </a>
          <div className="home-image-background"></div>
        </div>
        <div className="home-image-item">
          <div className="image-wrapper">
            <div className="image-wrapper-content">
              <div className="image-wrapper-text">
                <h1>Accessories</h1>
              </div>
            </div>
          </div>
          <div className="home-image-background"></div>
        </div>
      </div>

      <div className="home-thankyoucard">
        <div className="home-thankyoucard-image"></div>
        <div className="home-thankyoucard-title">
          <h2 className="home-title">Welcome to our shop</h2>
          <h2>Each package will include the following:</h2>
          <h2>Custom Product(s) |</h2>
          <h2>Special Stickers | Freebies |</h2>
          <h2>Personalized ThankYou Card</h2>
        </div>
      </div>

      <h2 className="deals-title">Special Deals</h2>
      <div className="deals-content">
        <div className="deals-content-text">
          <h2>Buy 2 of any hoodie or crewneck</h2>
          <h3>Get 1 FREE Tote Bag</h3>
        </div>
        <div className="deals-image"></div>
      </div>
    </div>
  );
};

export default Home;
