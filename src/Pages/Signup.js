import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Components/Input";
import Navbar from "../Components/Navbar";
import { AmberButton } from "../Components/Buttons";
// import { AuthContext } from "../Contexts/AuthContext";

const Signup = () => {
  //   const navigate = useNavigate();
  //   const { dispatch } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [loading, setLoading] = useState(false);

  // Function to handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Password: ", password);
    // setLoading(true);
    // axios
    //   .post("/api/auth/login", { email, password })

    //   .then((res) => {
    //     dispatch({
    //       type: "LOGIN",
    //       payload: { name: res.data.name, token: res.data.token },
    //     });
    //     navigate("/dashboard");
    //     setEmail("");
    //     setPassword("");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert(err.response.data.message);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-950 to-zinc-950 text-white">
      <Navbar />
      <div className=" bg-stone-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Signup</h2>
        <form onSubmit={handleSignup}>
          <Input
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-center">
            <AmberButton val="Sign Up" />
          </div>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
