import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FcApproval } from "react-icons/fc";
import background from "../Icons/bg-image2.jpg";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [validation, setValidation] = useState({
    name: true,
    email: true,
    phone: true,
    message: true,
  });

  const { name, email, phone, message } = data;
  const {
    name: nameValid,
    email: emailValid,
    phone: phoneValid,
    message: messageValid,
  } = validation;

  console.log("Data: ", data);

  useEffect(() => {
    let timer;
    if (formSubmitted) {
      timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 1500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [formSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let isValid = true;

    //Added Validation for name email and phone
    if (name === "name") {
      isValid = /^[A-Za-z][A-Za-z\s]*$/.test(value);
    } else if (name === "email") {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (name === "phone") {
      isValid = /^\d{10}$/.test(value);
    }

    setValidation({ ...validation, [name]: isValid });
    setData({ ...data, [name]: value });
  };

  //Handle Form Submittion
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    setFormSubmitted(true);

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Phone", phone);
    formData.append("Message", message);

    console.log("FormData: ", formData);

    fetch(
      "https://script.google.com/macros/s/AKfycbxEcKOHsgnBENsSAASCYeNSij2fhC3HttiU7nTecrC2bx86ffGMDONWVfTHR3vpMXM/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          console.log("Response:", response);

          // resetting Form  after submission
          setData({ ...data, name: "", email: "", phone: "", message: "" });
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data: ", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <>
      {formSubmitted && (
        <div
          className="alert alert-success alert-dismissible fade show flex justify-center items-center m-0"
          role="alert"
        >
          <FcApproval className="text-lg" />{" "}
          <strong className="pl-2">Message Sent Successfully!</strong>
        </div>
      )}
      <div
        className="w-full h-screen flex-col justify-center items-center pb-4 px-2"
        style={{
          backgroundImage: ` url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <div
            className="px-14 mt-4 w-full md:max-w-[60%] xl:max-w-[35%] p-4 text-white "
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), #3551b5)`,
            }}
          >
            <form className="form" onSubmit={handleSubmit}>
              <div className="w-full flex justify-center items-center pb-5">
                {" "}
                <p className="gradient-text text-4xl text-transparent font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text max-w-fit animate-gradient  shadow-xl">
                  {" "}
                  Contact Form
                </p>
              </div>
              <div
                className={`input-group shadow-xl ${
                  nameValid ? "" : "invalid"
                }`}
              >
                {" "}
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={name}
                  aria-describedby="name"
                  required
                />
                <label htmlFor="name">
                  <i className="fa-solid fa-user p-1"></i> Name
                </label>
                {!nameValid && <span className="error-text">Invalid Name</span>}
              </div>
              <div
                className={`input-group shadow-xl ${
                  emailValid ? "" : "invalid"
                }`}
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  aria-describedby="email"
                  required
                />
                <label htmlFor="email">
                  {" "}
                  <i className="fa-solid fa-at p-1"></i> Email
                </label>
                {!emailValid && (
                  <span className="error-text">Invalid Email</span>
                )}
              </div>
              <div
                className={`input-group shadow-xl ${
                  phoneValid ? "" : "invalid"
                }`}
              >
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  value={phone}
                  aria-describedby="phone"
                  required
                />
                <label htmlFor="phone">
                  <i className="fa-solid fa-phone p-1"></i> Phone Number
                </label>
                {!phoneValid && (
                  <span className="error-text">Invalid Phone Number</span>
                )}
              </div>
              <div
                className={`textarea-group shadow-xl ${
                  messageValid ? "" : "invalid"
                }`}
              >
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  onChange={handleChange}
                  value={message}
                  required
                ></textarea>
                <label htmlFor="message">
                  {" "}
                  <i className="fa-solid fa-message p-1"></i> Your Message
                </label>
                {!messageValid && (
                  <span className="error-text">Invalid Message</span>
                )}
              </div>
              <div className="gradient-div mt-4 w-full flex justify-center items-center rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-gradient hover:-translate-y-2 hover:transition-all hover:duration-200 overflow-hidden hover:shadow-opacity-100 hover:rounded-2xl">
                <button
                  className="w-full text-white font-semibold text-xl tracking-wider flex justify-center items-center p-1"
                  type="submit"
                  // name="Name"
                >
                  Send
                  <IoIosSend className="text-white text-xl pt-0.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
