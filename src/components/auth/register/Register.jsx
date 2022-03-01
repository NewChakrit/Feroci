import "./Register.css";
import axios from "../../../config/axios";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ErrorContext } from "../../../contexts/ErrorContext";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { setError } = useContext(ErrorContext);

  const navigate = useNavigate();

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      setError("");
      const res = await axios.post("/users/register", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      navigate("/");
    } catch (err) {
      console.log(err.response.data.message);
      setError(err.response.data.message);
    }
  };
  return (
    <div className="main-register">
      <h1>Welcom to Feroci Philharmonic Society</h1>
      <form onSubmit={handleSubmitRegister} className="register-form">
        {/* first name */}
        <div className="mb-3">
          <label htmlFor="InputFirstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="InputFirstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        {/* last name */}
        <div className="mb-3">
          <label htmlFor="InputLastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="InputLastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* email */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* password */}
        <div className="mb-3">
          <label htmlFor="InputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="InputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* password */}
        <div className="mb-3">
          <label htmlFor="InputConfirmPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="InputConfirmPassword1"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="submit-register">
          <button type="submit" className="btn btn-primary">
            Create account
          </button>
        </div>
        <div className="signUpLink">
          <Link to={"/"}>Already have an account?</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
