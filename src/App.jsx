import './App.css'

function App() {
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
              <input type="text" placeholder="Enter your username" />
            </div>

            <div className="field-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>

            <div className="login-options">
              <div className="remember-box">
                <span className="checkbox" />
                <span>Remember me</span>
              </div>
              <span className="forgot-link">Forgot password?</span>
            </div>

            <button type="button" className="login-button">
              Sign In
            </button>
          </form>

          <div className="login-footer">
            <span>Secure • Minimal • Premium</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
