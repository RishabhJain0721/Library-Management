import React from "react";
import Navbar from "../Components/Navbar";
import bg from "../Assets/contactPage.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.5)), url(${bg})`,
        }}
      >
        <div className="w-3/4 ml-auto mr-auto pt-20">
          <h1 className="text-4xl font-bold mt-8 text-white">About Us</h1>
          <div className="flex justify-center items-center space-x-5 mt-10">
            <img
              src="https://i.pinimg.com/236x/63/df/9b/63df9b386ad9d1a6b1336e4875d2b0b5.jpg"
              alt="about"
              className="w-1/2 rounded-lg"
            />
            <div className="text-white text-lg justify-start flex-col mt-8 space-x-4">
              <p className=" w-3/4">
                We are a library management system that helps you to manage your
                books and library members. We provide a platform for you to
                manage your library with ease. We also provide a platform for
                you to manage your library with ease. We also provide a platform
                for you to manage your library with ease. books and library
                members. We provide a platform for you to manage your library
                with ease. We also provide a platform for you to manage your
                library with ease. We also provide a platform for you to manage
                your library with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
