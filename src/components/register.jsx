import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AuthForm.css";

function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        firstName: fname,
        lastName: lname,
        email: user.email,
      });
      toast.success("Registration successful!", { position: "top-right" });
    } catch (error) {
      toast.error(error.message, { position: "top-right" });
    }
  };

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="First Name" onChange={(e) => setFname(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setLname(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
        <p className="text-center mt-3">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default Register;
