import "./Login.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    login(email, password);
    try {
      login(email, password);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="main-login">
      <div className="login-img">
        <img
          src="https://res.cloudinary.com/do58tgs2e/image/upload/v1644660709/Feroci-logo_eqwn2a.png"
          alt="feroci-logo"
        />
      </div>
      <form onSubmit={handleSubmitLogin} className="login-form">
        <div className="mb-3 ">
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <div className="submit-login">
          <button type="submit" className="btn btn-primary ">
            Login
          </button>
        </div>

        <div className="signUpLink">
          <Link to={"/register"}>Sign up for Feroci</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
