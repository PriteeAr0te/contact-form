import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import background from "../Icons/bg-image2.jpg";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, message);
    console.log("Submitted");
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyrhS4X1AxFv2_GbLYUEmNpwQHFSn2cYG9g2BLy73ftZ3szCaYEt9g_JsQ3b4-bM1Zf/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="w-full h-screen flex-col justify-center items-center"
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
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <div className="w-full flex justify-center items-center pb-5">
              {" "}
              <p className="gradient-text text-4xl text-transparent font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text max-w-fit animate-gradient  shadow-xl">
                {" "}
                Contact Form
              </p>
            </div>
            <div className="input-group  shadow-xl">
              {" "}
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                aria-describedby="name"
                required
              />
              <label htmlFor="name">
                <i className="fa-solid fa-user p-1"></i> Name
              </label>
            </div>
            <div className="input-group  shadow-xl">
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                aria-describedby="email"
                required
              />
              <label htmlFor="email">
                {" "}
                <i className="fa-solid fa-at p-1"></i> Email
              </label>
            </div>
            <div className="input-group shadow-xl">
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                aria-describedby="phone"
                required
              />
              <label htmlFor="phone">
                <i className="fa-solid fa-phone p-1"></i> Phone Number
              </label>
            </div>
            <div className="textarea-group  shadow-xl">
              <textarea
                id="message"
                name="message"
                rows="3"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              ></textarea>
              <label htmlFor="message">
                {" "}
                <i className="fa-solid fa-message p-1"></i> Your Message
              </label>
            </div>
            <div className="gradient-div mt-4 w-full flex justify-center items-center rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-gradient hover:-translate-y-2 hover:transition-all hover:duration-200 overflow-hidden hover:shadow-opacity-100 hover:rounded-2xl">
              <button
                className="w-full text-white font-semibold text-xl tracking-wider flex justify-center items-center p-1"
                type="submit"
              >
                Send
                <IoIosSend className="text-white text-xl pt-0.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
