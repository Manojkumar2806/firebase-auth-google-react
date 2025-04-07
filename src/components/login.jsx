import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./AuthForm.css"; 
import { auth } from "./firebase.jsx";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SignInWithGoogle from "./signinwithGoogle.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully!", { position: "top-right" });
      navigate("/profile");
    } catch (error) {
      console.error(error.message);
      toast.error(error.message, { position: "top-right" });
    }
  };

  return (
    <form className="auth-form" onSubmit={handleLogin}>
      <h3>Login</h3>

      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Login
      </button>

      <p className="text-end mt-3">
        New user? <a href="/register">Register here</a>
      </p>
      <SignInWithGoogle />
    </form>
  );
}

export default Login;
