import { useState } from "react";
import "../css/signup.css"; // create a new css file for styling

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
        <form className="auth-form">
          {isSignUp && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {isSignUp && (
            <input type="password" placeholder="Confirm Password" required />
          )}
          <button type="submit" className="auth-btn">
            {isSignUp ? "Create Account" : "Login"}
          </button>
        </form>

        <p className="auth-toggle">
          {isSignUp ? "Already have an account?" : "Don’t have an account?"}
          <span onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? " Login" : " Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
