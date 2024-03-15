import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import bg from "../Assets/contactPage.jpg";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    // const name = e.target.name;
    // const value = e.target.value;
    // if (name === "name") {
    //   setName(value);
    // } else if (name === "email") {
    //   setEmail(value);
    // } else {
    //   setComment(value);
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, comment);
  };

  return (
    <div>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url(${bg})`,
        }}
      >
        <div className="w-3/4 ml-auto mr-auto pt-20">
          <h1 className="text-4xl font-bold mt-8 text-white">Contact Us</h1>
          <div className="flex justify-between items-center space-x-5">
            <div className="flex text-white text-lg justify-start flex-col mt-8 space-x-4">
              <div className="flex items-center space-x-5 m-3">
                <FaMapMarkerAlt />
                <p>
                  1234 Main Street,
                  <br /> Cityville,
                  <br /> State, Country, Zip Code
                </p>
              </div>

              <div className="flex items-center space-x-5 m-3">
                <FaEnvelope />
                <p className="">your.email@example.com</p>
              </div>
              <div className="flex items-center space-x-5 m-3">
                <FaPhone />
                <p className="">+1234567890</p>
              </div>

              <div className="flex items-center space-x-5 m-3">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
            <form className="mt-10 w-1/2" onSubmit={handleSubmit}>
              <h2 className="text-2xl text-white mb-4">Send us a message</h2>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="comment"
                  className="block text-white font-bold mb-2"
                >
                  Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={comment}
                  onChange={handleChange}
                  placeholder="Your Comment"
                  rows="4"
                  className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
