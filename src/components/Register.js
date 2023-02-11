import React, { useState } from "react";
import axios from "axios";
import './register.css';
import {Link} from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://oom.onrender.com/auth/register", {
        email,
        password,
        visibility,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div className="register">

     
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="visibility">Visibility:</label>
        <input
          type="text"
          id="visibility"
          value={visibility}
          onChange={(event) => setVisibility(event.target.value.split(","))}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    <Link to="/Login">Login</Link>
    </div>
  );
}

export default Register;
