import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function Main() {
  const [isSigningUp, setIsSigningUp] = useState(true);

  const handleSignInClick = () => {
    setIsSigningUp(false);
  };

  const handleSignUpClick = () => {
    setIsSigningUp(true);
  };
  return (
    <div>
      <div className="mt-4 border bg-white rounded-3 ">
        <div
          style={{
            backgroundColor: "#EFFFF4",
            borderRadius: "8px 8px 0px 0px",
          }}
        >
          <p
            className="text-center px-5 py-3"
            style={{
              color: "#008A45",
              fontSize: "14px",
              fontWeight: "500",
              fontStyle: "normal",
            }}
          >
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
        <p className="" style={{ fontSize: "13px", textAlign: "right", marginRight:"25px" }}>
          {isSigningUp ? (
            <>
              Already have an account?{" "}
              <strong
                style={{
                  color: "#2F6CE5",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
                onClick={handleSignInClick}
              >
                Sign In
              </strong>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <strong
                style={{
                  color: "#2F6CE5",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
                onClick={handleSignUpClick}
              >
                Sign Up
              </strong>
            </>
          )}
        </p>
        <div className="">
          {isSigningUp ? <Register /> : <Login />}
        </div>
      </div>
    </div>
  );
}

export default Main;
