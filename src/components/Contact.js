import React, { useState } from "react";
import emailjs from "emailjs-com";
require("dotenv").config();

const Contact = () => {
  const [fields, setFields] = useState({
    from_name: "",
    message: "",
    contact_number: "",
    email: "",
  });
  const [fieldsError, setFieldsError] = useState({
    from_name: "",
    message: "",
    contact_number: "",
    email: "",
  });

  const onInputChange = ({ target: { id, value } }) => {
    setFields({
      ...fields,
      [id]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    let fieldsError = {};
    if (fields.from_name === "") {
      fieldsError.from_name = "Please enter your name";
      isValid = false;
    }

    if (fields.email === "") {
      fieldsError.email = "Please enter valid Email";
      isValid = false;
    }

    if (fields.contact_number === "") {
      fieldsError.contact_number = "Please enter your contact";
      isValid = false;
    }

    if (fields.message === "") {
      fieldsError.message = "Please give your feedback";
      isValid = false;
    }
    setFieldsError(fieldsError);
    return isValid;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target
        )
        .then((res) => {
          alert("Thanks for your precious feedback.");
          setFields({
            from_name: "",
            message: "",
            contact_number: "",
            email: "",
          });
        })
        .catch((err) => alert("something went wrong"));
    }
  };
  return (
    <section
      className="section"
      id="contact-us"
      style={{ backgroundColor: "#e9e9e9" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="left-text-content">
              <div className="section-heading">
                <h6>Contact Us</h6>
                <h2>Feel free to connect with us!</h2>
              </div>
              <ul className="contact-info">
                <li>
                  <img src="assets/images/contact-info-01.png" alt="" />
                  +917994606998
                </li>
                <li>
                  <img src="assets/images/contact-info-02.png" alt="" />
                  azlll2004@gmail.com
                </li>
                {/* <li><img src="assets/images/contact-info-03.png" alt=""/>www.company.com</li>*/}
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-xs-12">
            <div className="contact-form">
              <form id="contact" onSubmit={handlesubmit}>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <input
                      name="from_name"
                      type="text"
                      id="from_name"
                      placeholder="Your Name *"
                      onChange={onInputChange}
                      className={`form-control  ${
                        fieldsError.from_name ? "is-invalid" : ""
                      }`}
                      value={fields.from_name}
                    />
                    {fieldsError.from_name && (
                      <div className="invalid-feedback mb-3">
                        {fieldsError.from_name}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <input
                      name="contact_number"
                      type="text"
                      id="contact_number"
                      placeholder="Your phone number"
                      onChange={onInputChange}
                      className={`form-control  ${
                        fieldsError.contact_number ? "is-invalid" : ""
                      }`}
                      value={fields.contact_number}
                    />
                    {fieldsError.contact_number && (
                      <div className="invalid-feedback mb-3">
                        {fieldsError.contact_number}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-12">
                    <input
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Your Email *"
                      onChange={onInputChange}
                      className={`form-control  ${
                        fieldsError.email ? "is-invalid" : ""
                      }`}
                      value={fields.email}
                    />
                    {fieldsError.email && (
                      <div className="invalid-feedback mb-3">
                        {fieldsError.email}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      rows="6"
                      id="message"
                      placeholder="Message"
                      onChange={onInputChange}
                      className={`form-control  ${
                        fieldsError.message ? "is-invalid" : ""
                      }`}
                      value={fields.message}
                    />
                    {fieldsError.message && (
                      <div className="invalid-feedback mb-3">
                        {fieldsError.message}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      id="form-submit"
                      className="main-button-icon"
                    >
                      Send Message Now <i className="fa fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
