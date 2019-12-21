import React, { Component } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import { css } from "glamor";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  //gets passed to componentDidMount() & determines top btn visibility
  scrollFunction = () => {
    const mybutton = document.getElementById("myBtn");

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };

  // on Top btn click set document's scroll positon to 0
  topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  //detects and call scrollFunction on window scroll
  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunction);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message } = this.state;

    //var to be checked
    const emptyFieldError = document.getElementsByClassName(
      "empty-field-error"
    );
    const invalidEmailError = document.getElementsByClassName(
      "invalid-email-char"
    );
    //regular expression to check for char @ in global string
    let regex = /(@)/g;

    if (name === "") {
    }

    if (email === "") {
      emptyFieldError[0].style.display = "block";
      // toast emitter tag @react-toastify and @glamor with css import to change styling
      toast.warning("Message not sent. Please leave an email.", {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: css({
          color: "black !important"
        })
      });
      return false;
    } else if (email !== "" && regex.test(email) === false) {
      emptyFieldError[0].style.display = "none";
      invalidEmailError[0].style.display = "block";
      // toast emitter tag @react-toastify and @glamor with css import to change styling
      toast.warning(
        "Message not sent. Please leave a valid email with an @ sign.",
        {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: css({
            color: "black !important"
          })
        }
      );
      return false;
    } else {
      invalidEmailError[0].style.display = "none";
      emptyFieldError[0].style.display = "none";
    }

    //checks message field
    if (message === "") {
      emptyFieldError[1].style.display = "block";
      // toast emitter tag @react-toastify
      toast.warning("Message not sent. Please leave a message to be sent.", {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: css({
          color: "black !important"
        })
      });
      return false;
    } else {
      emptyFieldError[1].style.display = "none";
    }

    var template_params = {
      reply_to: email,
      from_name: name,
      to_name: "Ace",
      subject: subject,
      message_html: message
    };

    var service_id = "default_service";
    var template_id = "react_contact_mailer";

    emailjs
      .send(
        service_id,
        template_id,
        template_params,
        "user_BxM5qm3qw72KH9Q1zOXQf"
      )
      .then(
        function() {
          // toast emitter tag @react-toastify
          toast.info("Message sent. Thank you!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        },
        function(err) {
          console.log(
            "Send email failed!\r\n Response:\n " + JSON.stringify(err)
          );
          toast.info(
            "Message not sent. Please consider sending a message manually to acesuon.me@gmail.com. I apologize for the inconvienence and thank you for your patient.",
            {
              position: "top-right",
              autoClose: 15000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            }
          );
          return false;
        }
      );

    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <h2 className="center-page my-contact-header">
            Question. Comment. Concern.
          </h2>
        </div>
        <div className="my-contact-container" id="bg-contact-container">
          <div className="container" id="bg-contact-inner-container">
            <div className="content-contact-inner-container">
              <p>
                Thank you for visiting. For any question, comment or concern
                please drop me an email at <i>acesuon.me@gmail.com</i>.
                Alternatively, you can fill out and submit the form below and I
                will carefully review the information and get back to you if
                needed.
                <br />
                <br />
                You might also download my Resume in PDF format by clicking this
                icon.{" "}
                <a
                  href={require("../resources/docs/resume.pdf")}
                  download="ace_resume"
                  className="icon"
                >
                  <img
                    className="resume"
                    src={require("../resources/images/resume.png")}
                    alt=""
                  />
                </a>
              </p>
              <form id="question-form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <label htmlFor="from_name">
                    <strong>Name</strong>
                  </label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this, "name")}
                    placeholder="Is your name Grace? Because you're amazing."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">
                    <strong>Subject</strong>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form-control"
                    value={this.state.subject}
                    onChange={this.handleChange.bind(this, "subject")}
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="reply_to">
                    <strong>Contact Email</strong>
                  </label>
                  <input
                    id="reply_to"
                    name="reply_to"
                    type="text"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this, "email")}
                    placeholder="example@gmail.com"
                  />
                  <span className="empty-field-error">
                    This field cannot be empty.
                  </span>
                  <span className="invalid-email-char">
                    Enter a valid email using the @ character.
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="message_html">
                    <strong>Message</strong>
                  </label>
                  <textarea
                    id="message_html"
                    name="message_html"
                    type="textarea"
                    className="form-control"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, "message")}
                    placeholder="I'm all ears."
                  />
                  <span className="empty-field-error">
                    This field cannot be empty.
                  </span>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
              <button onClick={this.topFunction} id="myBtn" title="Go to top">
                <i
                  className="fa fa-chevron-up"
                  style={{
                    fontSize: "24px"
                  }}
                ></i>
              </button>
            </div>
          </div>
          <div className="education-gradientBG-container-purple">
            <div className="gradientBG-dark"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
