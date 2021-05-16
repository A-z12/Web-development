import React from "react";

const About = () => {
  return (
    <section
      className="section"
      style={{ backgroundColor: "#e9e9e9" }}
      id="about"
    >
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="left-text-content">
              <div className="section-heading">
                <h5>About Us</h5>
                <h2>We provide IT solutions in :</h2>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="service-item">
                    <img src="assets/images/iconreact.svg" alt="" />
                    <h4>Web development</h4>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="service-item">
                    <img src="assets/images/analyticsicon.svg" alt="" />
                    <h4>Data analytics</h4>
                  </div>
                </div>
                <div className="col-md-12">
                  <a href="#projects" className="main-button-icon">
                    Our Projects <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="right-text-content">
              <p>
                <span className="row" id="aboutusdesc">
                  <div className="w-100">
                    We are a team of three Developers. Our skill set is web
                    development, data warehousing, business reporting.
                  </div>
                </span>
                <div className="row mt-2">
                  <div className="col">
                    <ul id="aboutus">
                      <li>
                        Web Development : ReactJS Framework, JavaScript, HTML5,
                        CSS , Redux, Node JS, Mongo DB, MySQL, PostgreSQL.
                      </li>
                      <li>Testing : Jest and Enzyme.</li>
                      <li>Data Analysis : IBM Netezza, Tableau.</li>
                      <li>Version Control : GitHub, BitBucket.</li>
                      <li>Environment : Unix, Windows</li>
                    </ul>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
