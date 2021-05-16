import React from "react";

const Banner = () => {
  return (
    <>
      <div className="header-text" id="top">
        <div className="Modern-Slider">
          <div className="item">
            <div className="img-fill">
              <img
                src="assets/images/banner_background_1.jpg"
                style={{ maxWidth: "100%", maxHeight: "100%", opacity: ".6" }}
                alt=""
              />
              {/*<img src={require("./Background_Images/background2.jpg")} alt="" />*/}
              <div className="text-content" >
                <h3 >Integrated Services</h3>
                <h5 style={{ fontWeight: "bold" }}>
                  Web Development and Data Analytics
                </h5>
                <a href="#about" className="main-stroked-button">
                  Learn More
                </a>
                {/* <a href="#" className="main-filled-button">
                  Get It Now
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down scroll-to-section">
        <a href="#about">
          <i className="fa fa-arrow-down"></i>
        </a>
      </div>
    </>
  );
};

export default Banner;
