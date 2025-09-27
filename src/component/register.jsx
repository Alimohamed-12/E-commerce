import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();


    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    
    navigate("/login");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Register</h3>
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" className="form-control" required
              value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" required
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" required
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="btn btn-dark w-100">Register</button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}