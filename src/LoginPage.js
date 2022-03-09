import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/LoginPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
//firebase auth
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const LoginPage = () => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      // stays logged in if you close tab --> stores in local storage
      localStorage.setItem("isAuth", true);
      // setIsAuth(true);
      navigate("/twitter/" + auth.currentUser.displayName);
    });
  };

  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="float-container">
      <div className="background-image float-child"></div>
      <div className="login-form float-child">
        <a href="/">
          <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
        </a>
        <h1>Mock Twitter</h1>
        <h2>Sign in with Google</h2>
        <div className="form">
          <button onClick={signInWithGoogle}> Login </button>
        </div>
        {/* <div className="form">
          <form>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleChange}
            />
            <div>
              <button
                onClick={() => { username.length > 0 ? navigate("/twitter/" + username) : alert("Please enter a username.")}}
              >
                Submit
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
