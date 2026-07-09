import { useState } from "react";
import toast from "react-hot-toast";
import loginSchema from "../validators/login-validator";

import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    toast.loading("The information is checking...", {
      duration: 1500,
    });

    const newUser = { username, password };
    const result = loginSchema.safeParse(newUser);

    setTimeout(() => {
      if (result.success) {
        toast.success("You have successfully logged in");
        setUsername("");
        setPassword("");
      } else {
        toast.error(result.error.issues[0].message);
      }
    }, 1500);
  };

  return (
    <div className="login-page">
      <div className="login-glow login-glow-1" />
      <div className="login-glow login-glow-2" />

      <div className="login-shell">
        <div className="login-card">
          <div className="login-header">
            <span className="login-badge">VIP ACCESS</span>
            <h1>Welcome Back</h1>
            <p>Sign in to continue to your private space</p>
          </div>

          <form className="login-form">
            <div className="field-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                placeholder="Enter your username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>

            <div className="field-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="login-options">
              <div className="remember-box">
                <span className="checkbox" />
                <span>Remember me</span>
              </div>
              <span className="forgot-link">Forgot password?</span>
            </div>

            <button
              type="button"
              className="login-button"
              onClick={loginHandler}
            >
              Log In
            </button>
          </form>

          <div className="login-footer">
            <span>Secure • Minimal • Premium</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
