import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to our shop</h1>

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
          <h2>Each package will include the following:</h2>
            <h2>Custom Product(s) |</h2>
            <h2>Special Stickers | Freebies |</h2>
            <h2>Personalized ThankYou Card</h2>
          </div>
        </div>
    </div>
  );
};

export default Home;
