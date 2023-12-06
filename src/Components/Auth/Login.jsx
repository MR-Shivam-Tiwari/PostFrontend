import { Button, ButtonGroup, Input } from "@mui/joy";
import React from "react";
import atgIllustration from "./atg_illustration.png";
import { useState } from "react";
function Login() {
  const [isSigningUp, setIsSigningUp] = useState(true);

  const handleSignInClick = () => {
    setIsSigningUp(false);
  };

  const handleSignUpClick = () => {
    setIsSigningUp(true);
  };

  return (
    <div className="  bg-white rounded-3 ">
      <div className="d-flex px-4">
        <div className="col-6">
          <div>
            <h4 className="mb-2">Create Account</h4>
            <div className="mb-5 mt-4">
              <div className="d-flex">
                <Input
                  variant="soft"
                  placeholder="First Name"
                  style={{ borderRadius: "0px", border: "1px solid #D9D9DB" }}
                ></Input>
                <Input
                  variant="soft"
                  placeholder="Last Name"
                  style={{ borderRadius: "0px", border: "1px solid #D9D9DB" }}
                ></Input>
              </div>
              <div className="d-flex">
                <Input
                  variant="soft"
                  placeholder="Email"
                  fullWidth
                  style={{ borderRadius: "0px", border: "1px solid #D9D9DB" }}
                ></Input>
              </div>

              <div className="d-flex">
                <Input
                  variant="soft"
                  placeholder="Password"
                  fullWidth
                  endDecorator={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                        fill="#8A8A8A"
                      />
                    </svg>
                  }
                  style={{ borderRadius: "0px", border: "1px solid #D9D9DB" }}
                ></Input>
              </div>
              <div className="d-flex">
                <Input
                  fullWidth
                  variant="soft"
                  placeholder="Confirm Password"
                  style={{ borderRadius: "0px", border: "1px solid #D9D9DB" }}
                ></Input>
              </div>
            </div>
            <Button
              className="mb-3"
              fullWidth
              style={{ backgroundColor: "#2F6CE5", borderRadius: "20px" }}
            >
              {" "}
              Create Account
            </Button>
            <div className="mb-4">
              <Button
                fullWidth
                className="mb-2"
                variant="soft"
                style={{
                  backgroundColor: "#FFF",
                  border: "0.6px solid #D9D9DB",
                }}
              >
                <div className="d-flex align-items-center">
                  {" "}
                  <div className="">
                    <img
                      alt="logo"
                      src="https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1702857600&Signature=fE9n54yx7UUSDzFHcfcF0js5pZCSN9H04dwLTmERR3JlnZZUSP~cmqMz~GJbbpKcQpgrTpm1xozgQ9dAoiIR6OWeDdQ6fOyOsDbIpAH-WdrevNzqpV6qJFf4JF3cp~OCiXQm3TOyg1u-NA6K~aX4U4ck8YDwoXOSKE9iN5YA5i2v0s-6kLzFpE9odRfRBtanYVWC-VUdO5jn9pYtdhdeM8468FbH5TKka9c~bVqGzt5yBxfn6Q6v5Cw3rEoAtxPhWC54jhhYlYi3YzpwwYYtQmnpuHLylkqCZKq6d3Gz~gibycktMLYZtZumE~A9ujptkmfcjycDKj1O~Gfwwt8ROw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      style={{ width: "16px", height: "16px" }}
                    />{" "}
                  </div>
                  &nbsp;
                  <div className="mt-1 text-dark">Sign up with Facebook</div>
                </div>
              </Button>
              <Button
                fullWidth
                variant="soft"
                style={{
                  backgroundColor: "#FFF",
                  border: "0.6px solid #D9D9DB",
                }}
              >
                <div className="d-flex align-items-center">
                  {" "}
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_2217)">
                        <path
                          d="M3.54594 9.66905L2.989 11.7482L0.953406 11.7912C0.345063 10.6629 0 9.37192 0 8.00005C0 6.67345 0.322625 5.42245 0.8945 4.32092H0.894938L2.70719 4.65317L3.50106 6.45455C3.33491 6.93895 3.24434 7.45895 3.24434 8.00005C3.24441 8.5873 3.35078 9.14995 3.54594 9.66905Z"
                          fill="#FBBB00"
                        />
                        <path
                          d="M15.8602 6.50562C15.9521 6.98955 16 7.48933 16 8.00012C16 8.57287 15.9398 9.13155 15.8251 9.67046C15.4357 11.5043 14.4181 13.1056 13.0084 14.2388L13.008 14.2384L10.7253 14.1219L10.4023 12.1052C11.3377 11.5566 12.0687 10.6981 12.4537 9.67046H8.1759V6.50562H12.5161H15.8602Z"
                          fill="#518EF8"
                        />
                        <path
                          d="M13.0081 14.2382L13.0085 14.2386C11.6375 15.3406 9.89596 15.9999 8.00015 15.9999C4.95355 15.9999 2.30477 14.2971 0.953552 11.7911L3.54608 9.66895C4.22168 11.472 5.96102 12.7555 8.00015 12.7555C8.87662 12.7555 9.69774 12.5186 10.4023 12.105L13.0081 14.2382Z"
                          fill="#28B446"
                        />
                        <path
                          d="M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24438 8.00003 3.24438C5.91475 3.24438 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691438 13.1064 1.84175Z"
                          fill="#F14336"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2217">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  &nbsp;
                  <div className="mt-1 text-dark">Sign up with Google</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="col mt-4">
          <div className=" ">
            <img src={atgIllustration} alt="logo" />
          </div>
          <p className="p-2" style={{ fontSize: "11px", color: "gray" }}>
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
