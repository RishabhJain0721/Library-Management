import React from "react";
import Navbar from "../Components/Navbar";
import { AmberButton } from "../Components/Buttons";
import bg from "../Assets/bgimg.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url(${bg})`,
        }}
      >
        <div className="pt-28 ml-auto mr-auto w-3/4">
          <h1 className="text-4xl font-bold text-center mt-8 text-white">
            Welcome to the Home Page
          </h1>
          <p className="mt-4 text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
            nulla pellentesque dignissim enim sit. Ligul aliquam. In mollis nunc
            sed id. Nulla aliquet enim tortor at auctor. nunc. Sit amet
            venenatis urna cursus eget nunc. Mauris pharetra et ultrices neque
            ornare aenean euismod. Nisl rhoncus mattis rhoncus urna. Ridiculus
            mus mauris vitae ultricies. Id diam maecenas ultricies mi. Facilisis
            magna etiam tempor orci eu. Integer eget aliquet nibh praesent.
          </p>
          <div className="flex justify-evenly font-jos mt-10">
            <AmberButton val="Login" navigation="/login" />
            <AmberButton val="Signup" navigation="/signup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
