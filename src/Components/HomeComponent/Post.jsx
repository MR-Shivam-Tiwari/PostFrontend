import React from "react";
import { Avatar, Button, Chip, Input } from "@mui/joy";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";

function Post() {
    const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
    // You can perform any additional actions based on the selected option
  };
  const containerStyle = {
    borderRadius: "4px 4px 0px 0px",
    background:
      "url(https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1702857600&Signature=MNakgWiTiklWa6GDaJeSH5mM8kTs~tb6blxOemjollhun8bskK~FovnkAJy-Qn5I~tyjh-bdmFMwgXIowREa-9oGLtiiCIfyh3MFlwriMrh7B6xSBwTRPEGLMBPYgHIg-zHtYMtNVeKTrmKEGDOVYg8QpYY-9X54xe2rYUnd~jInAgZo0s3rJuZ6QwAatbrvmMtlvlKOT~77AV0V47Kg0S2bnO0tJ6Ee26Jm7DYfaW1uN~y605WBWWrVXw3q-t6RiBb5a1r~G7DJCf0WMBTl47px2SpyGeReGj5-Mo61AGT8~qdMl703U8m-eKmgdmU00JlEMOM7M0Gz6cR9I5E6pQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4), lightgray 50% / cover no-repeat, #C4C4C4",
    width: "100%",
    height: "220px",
  };

  const innerImageStyle = {
    width: "100%",
    height: " 220px",
    borderRadius: "4px 4px 0px 0px",
  };

  return (
    <div>
      <div
        style={{
          marginLeft: "155px",
          marginTop: "47px",
          marginRight: "155px",
        }}
      >
        {" "}
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex gap-3">
            <p style={{ fontSize: "16px", fontWeight: "400", color: "#000" }}>
              All Posts(32)
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#8A8A8A",
              }}
            >
              Article
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#8A8A8A",
              }}
            >
              Event
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#8A8A8A",
              }}
            >
              Education
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#8A8A8A",
              }}
            >
              Job
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Button
              size="md"
              className="text-dark"
              style={{ backgroundColor: "#EDEEF0" }}
            >
              Write a Post{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g clip-path="url(#clip0_1_839)">
                  <path
                    d="M6.41663 9.16663L11 13.75L15.5833 9.16663H6.41663Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_839">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Button>
            <Button
              size="md"
              className=""
              style={{ backgroundColor: "#2F6CE5", marginLeft: "10px" }}
            >
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_859)">
                    <path
                      d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_859">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>{" "}
                &nbsp; Join Group
              </div>
            </Button>
          </div>
        </div>
        <div className="border mb-4 mt-1"></div>
        <div className="row mb-5 " style={{ padding: "13px" }}>
          <div className="col ">
            <div
              className="border px-0 mb-3"
              style={{
                backgroundColor: "#FFF",
                borderRadius: "4px 4px 4px 4px",
              }}
            >
              <div
                style={{
                  borderRadius: "4px 4px 0px 0px",
                  overflow: "hidden",
                }}
              >
                <div style={containerStyle}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1702857600&Signature=MNakgWiTiklWa6GDaJeSH5mM8kTs~tb6blxOemjollhun8bskK~FovnkAJy-Qn5I~tyjh-bdmFMwgXIowREa-9oGLtiiCIfyh3MFlwriMrh7B6xSBwTRPEGLMBPYgHIg-zHtYMtNVeKTrmKEGDOVYg8QpYY-9X54xe2rYUnd~jInAgZo0s3rJuZ6QwAatbrvmMtlvlKOT~77AV0V47Kg0S2bnO0tJ6Ee26Jm7DYfaW1uN~y605WBWWrVXw3q-t6RiBb5a1r~G7DJCf0WMBTl47px2SpyGeReGj5-Mo61AGT8~qdMl703U8m-eKmgdmU00JlEMOM7M0Gz6cR9I5E6pQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="logo"
                    style={innerImageStyle}
                  />
                </div>
              </div>
              <div className="p-3">
                <div
                  className="d-flex align-items-center"
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    fontStyle: "normal",
                  }}
                >
                  <p className="mt-2">✍️</p> Article
                </div>
                <div className="d-flex justify-content-between">
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      lineHeight: "134.167%",
                      fontStyle: "normal",
                    }}
                  >
                    What if famous brands had regular fonts? Meet RegulaBrands!
                  </p>{" "}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_949)">
                        <path
                          d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_949">
                          <rect
                            width="28"
                            height="28"
                            fill="white"
                            transform="translate(28) rotate(90)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#5C5C5C",
                      fontStyle: "normal",
                      fontWeight: "400",
                    }}
                  >
                    I’ve worked in UX for the better part of a decade. From now
                    on, I plan to rei…
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center mt-3 ">
                    <div>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1702857600&Signature=FWkiAlch60ND3eWwHnLCw~BthMPVcCmj7SJpoPnomIk3RrGZwEScGnJ9WlubeTX9YE1hZEI2H5~j-gaPAfWGX0OJAc01AfFdrK13iMUf7p6Hg4G7wQhnZhwLtWeKAMaDvpLXYI5uqEClzWtq-plMCQJX7MwNbl4le4Rddlpfw58ynjJrcJk5Zz~-I~GT7DBFhhkfJeT6uFXJq~V8j5KppDDY0t94l13ufpBjQMbgD8HbAAl07kTh-VHdlwQsgQ2UineiuCev~A35752B5nrs7vpcQFhSRFB4T8uJ3a1S3u3MRXDI2Hk~AgeoJTFSTmbT4eiTPxTRMf-1T1Y71akmtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      />
                    </div>
                    <div
                      className="ms-2"
                      style={{ fontSize: "18px", fontWeight: "600" }}
                    >
                      Sarthak Kamra
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    {" "}
                    <div
                      className="d-flex align-items-center gap-1"
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        fontFamily: "",
                      }}
                    >
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
                          fill="#525252"
                        />
                      </svg>
                      1.4k views
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_968)">
                          <path
                            d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z"
                            fill="#2D2D2D"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_968">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="border px-0 mb-3"
              style={{
                backgroundColor: "#FFF",
                borderRadius: "4px 4px 4px 4px",
              }}
            >
              <div
                style={{
                  borderRadius: "4px 4px 0px 0px",
                  overflow: "hidden",
                }}
              >
                <div style={containerStyle}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1702857600&Signature=WDFArehM2biXLernDaXnpnHN5xwIXKccgZWg5TqQyKcU3iCCtWd8hDJVZvFyV5XyZfdCV91Yu2vqoad5og0GGvI6BlljPSRZqFvIYBMSOz94xD9KDvxz2XbV58f~2ctqNSNig1ksXxliyT2Nw8LEfcS1YdgErmLLjLbscO1CWBbAf2conGW3wGlUc7tD1pkS1l9uXIpdE-~e9~XO3OboAt3cKpLJoIfHWvl~92rfJant-qAW~7xDU7TdcxWjruTzGrWK-8spDnykVaU0E8M0ppjByTcPtx-WdJBhT1I30i-FElcWuMFXWTdOUmZn8VwDAkx4LW-ty66yhdCTGX5IdQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="logo"
                    style={innerImageStyle}
                  />
                </div>
              </div>
              <div className="p-3">
                <div
                  className="d-flex align-items-center"
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    fontStyle: "normal",
                  }}
                >
                  <p className="mt-2">🔬️</p> Education
                </div>
                <div className="d-flex justify-content-between">
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      lineHeight: "134.167%",
                      fontStyle: "normal",
                    }}
                  >
                    Tax Benefits for Investment under National Pension Scheme
                    launched by Government
                  </p>{" "}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_949)">
                        <path
                          d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_949">
                          <rect
                            width="28"
                            height="28"
                            fill="white"
                            transform="translate(28) rotate(90)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#5C5C5C",
                      fontStyle: "normal",
                      fontWeight: "400",
                    }}
                  >
                    I’ve worked in UX for the better part of a decade. From now
                    on, I plan to rei…
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3 ">
                  <div className="d-flex align-items-center mt-3 ">
                    <div>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1702857600&Signature=D3~3rVqZ7cfXRmxX~SlItDXh36SMymx5WpLpioy-fAT72XpOmjmKQVH7wMqsk72MmHsw5U9RsFOFTTwEi-utgcKnfyZQzkOxRBBG9Jk8sS0mmfX1FAV8OgQuYp0tnaW~~QAFRppLVd71K01TxmpKkjONrudgMRVbE154NkJzSkSODrnHF5J2IhMHLtjvU29XQFs6djIvrAkD428~tKuQsYlwTsyoUtg3O6-lhc3ipK6wT9NNsWtXhGT6flnaKqnRlgV01XjeWjO7RfZfF8LjzszAYxD7GPTxjdvv8IgkQN-Gqk5ULAzoHS1MuuQGeDdUF0cziv1DDLVCjSTRqyHKFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      />
                    </div>
                    <div
                      className="ms-2"
                      style={{ fontSize: "18px", fontWeight: "600" }}
                    >
                      Sarah West
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    {" "}
                    <div
                      className="d-flex align-items-center gap-1"
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        fontFamily: "",
                      }}
                    >
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
                          fill="#525252"
                        />
                      </svg>
                      1.4k views
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_968)">
                          <path
                            d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z"
                            fill="#2D2D2D"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_968">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="border px-0 mb-3"
              style={{
                backgroundColor: "#FFF",
                borderRadius: "4px 4px 4px 4px",
              }}
            >
              <div
                style={{
                  borderRadius: "4px 4px 0px 0px",
                  overflow: "hidden",
                }}
              >
                <div style={containerStyle}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1702857600&Signature=XJRXz4ZgmDHB0MxjNfsj-sIgHF1sPzoe5CBIhNsnSHVnH~rZAQeQSBDWj-BdfSpQTg0BjpmHgWBjuirnPLn5lgZOHPpZ5Kiv~CztxE6glhNtcW2H1v7U6o7jmosxhGv8yf-VhNWQMhs4MISer1~dy9LgGikOmSaX0A51aTy6lTAyPU91lglOckdYgBW4pNAy3zJOf~-gKf0z4ntGIzrY8v3pduuOhGZkX~QlOGeLlTpIrLBkG-no9~f7PUuzFS22vj1NLF0h35PVZ24LgaNnVpbrFKPJpBkohCiF1AR3Yd~fS8HtE0tvCktuhM8C4aHvXur1g7mBt4FBtAFBQxeVZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="logo"
                    style={innerImageStyle}
                  />
                </div>
              </div>
              <div className="p-3">
                <div
                  className="d-flex align-items-center"
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    fontStyle: "normal",
                  }}
                >
                  <p className="mt-2"> 🗓️</p> Meetup
                </div>
                <div className="d-flex justify-content-between">
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      lineHeight: "134.167%",
                      fontStyle: "normal",
                    }}
                  >
                    Finance & Investment Elite Social Mixer @Lujiazui
                  </p>{" "}
                  <div>
                    <Dropdown onSelect={handleSelect} drop="start">
                      <Dropdown.Toggle variant="transparent" id="dropdown-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1_949)">
                            <path
                              d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_949">
                              <rect
                                width="28"
                                height="28"
                                fill="white"
                                transform="translate(28) rotate(90)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="edit">Edit</Dropdown.Item>
                        <Dropdown.Item eventKey="report">Report</Dropdown.Item>
                        <Dropdown.Item eventKey="option3">
                          Option 3
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    {selectedOption && <p>Selected option: {selectedOption}</p>}
                  </div>
                </div>
                <div className="d-flex align-items-center ">
                  <div className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_895)">
                        <path
                          d="M15.8333 2.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.24167 2.49992 2.50833 3.24992 2.50833 4.16659L2.5 15.8333C2.5 16.7499 3.24167 17.4999 4.16667 17.4999H15.8333C16.75 17.4999 17.5 16.7499 17.5 15.8333V4.16659C17.5 3.24992 16.75 2.49992 15.8333 2.49992ZM15.8333 15.8333H4.16667V6.66658H15.8333V15.8333ZM5.83333 8.33325H10V12.4999H5.83333V8.33325Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_895">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Fri, 12 Oct, 2018
                  </div>
                  <div className="ms-5 d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_886)">
                        <path
                          d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z"
                          fill="black"
                        />
                        <path
                          d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_886">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Ahmedabad, India
                  </div>
                </div>
                <div className="mt-3">
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      color: "#E56135",
                      backgroundColor: "#FFF",
                      border: "0.7px solid #A9AEB8",
                    }}
                  >
                    {" "}
                    Visit Website
                  </Button>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3 mt-3">
                  <div className="d-flex align-items-center ">
                    <div>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://s3-alpha-sig.figma.com/img/b8a9/097f/c3ac7682e52df2e10d0a36ec3f243a44?Expires=1702857600&Signature=HAT7JVKF3Lg0-xZTSw8wdrKswZ5I2AMZkKHK-vOacPdHJT2KNOovqqBX3WSz4qUs6CulkCAEoK1cLKOUq-taIoeNdHTbklrxiO4UgYdIrpEiD-JW6S513xm4Wl-WaUCwSayu2qsCo~cpoT9zgB78wPQgZhDXrgcVPXFTLudQw1iXwEe3lW7-quglLTe5LUTA3XjH0iVKx4Ng9rDHd72O6DiP2box2E1NDiJd6wV0zcIvmEOg42~UyPr~hHH2j5f2Y-uyotQMTeKCr2-Y9EY7mVcqqwwtjRRSsRjqiI-~7uE0OnIaw-VTga7ruFDbO6-XdvcLVqjT96pXpDRJeI-uzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      />
                    </div>
                    <div
                      className="ms-2"
                      style={{ fontSize: "18px", fontWeight: "600" }}
                    >
                      Ronal Jones
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    {" "}
                    <div
                      className="d-flex align-items-center gap-1"
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        fontFamily: "",
                      }}
                    >
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
                          fill="#525252"
                        />
                      </svg>
                      1.4k views
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_968)">
                          <path
                            d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z"
                            fill="#2D2D2D"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_968">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="border px-0 mb-3"
              style={{
                backgroundColor: "#FFF",
                borderRadius: "4px 4px 4px 4px",
              }}
            >
              <div
                style={{
                  borderRadius: "4px 4px 0px 0px",
                  overflow: "hidden",
                }}
              ></div>
              <div className="p-3">
                <div
                  className="d-flex align-items-center"
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    fontStyle: "normal",
                  }}
                >
                  <p className="mt-2"> 💼️</p> Job
                </div>
                <div className="d-flex justify-content-between">
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      lineHeight: "134.167%",
                      fontStyle: "normal",
                    }}
                  >
                    Software Developer
                  </p>{" "}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_949)">
                        <path
                          d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_949">
                          <rect
                            width="28"
                            height="28"
                            fill="white"
                            transform="translate(28) rotate(90)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="d-flex align-items-center ">
                  <div className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_941)">
                        <path
                          d="M11.6667 5.00008V3.33341H8.33342V5.00008H11.6667ZM3.33341 6.66675V15.8334H16.6667V6.66675H3.33341ZM16.6667 5.00008C17.5917 5.00008 18.3334 5.74175 18.3334 6.66675V15.8334C18.3334 16.7584 17.5917 17.5001 16.6667 17.5001H3.33341C2.40841 17.5001 1.66675 16.7584 1.66675 15.8334L1.67508 6.66675C1.67508 5.74175 2.40841 5.00008 3.33341 5.00008H6.66675V3.33341C6.66675 2.40841 7.40841 1.66675 8.33342 1.66675H11.6667C12.5917 1.66675 13.3334 2.40841 13.3334 3.33341V5.00008H16.6667Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_941">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Innovaccer Analytics Private Ltd.
                  </div>
                  <div className="ms-5 d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_886)">
                        <path
                          d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z"
                          fill="black"
                        />
                        <path
                          d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_886">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Noida, India
                  </div>
                </div>
                <div className="mt-3">
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      color: "#02B875",
                      backgroundColor: "#FFF",
                      border: "0.7px solid #A9AEB8",
                    }}
                  >
                    {" "}
                    Apply on Timesjobs
                  </Button>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3 mt-3">
                  <div className="d-flex align-items-center ">
                    <div>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1702857600&Signature=pcLyrgr56ZgdPIrnEqLJUs37VoFuPw9EXdM2SgCjpfn5Qbzb~KtFXXm2Dl6V14RAZK3QLdYzB6fsy2m2T9ahBQMONj6mQdaQrW3sOjWeodx32iOXpBwcnbrxP75ZzW9LCgz7K1zS96C5aZ3kglv-t~oH4DmVyiCOItsE2UuAfy6dAXqEg~9LshaUUkSUg4iUIR4WwLqutKBJfL~xMxFzWUqcd2XQpQ4Sr~~0zVs6xS~Lv2sBRjnc4qmbgHrlB7IvBw4eOQxIUHiZtlix9q5I8pfURzc30BrwAeY3FRgVOvdXxzi8KRXkoqNKNTqGeJkXAjshPk5Na1we8RMwt6O99g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      />
                    </div>
                    <div
                      className="ms-2"
                      style={{ fontSize: "18px", fontWeight: "600" }}
                    >
                      Joseph Gray
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    {" "}
                    <div
                      className="d-flex align-items-center gap-1"
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        fontFamily: "",
                      }}
                    >
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
                          fill="#525252"
                        />
                      </svg>
                      1.4k views
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_968)">
                          <path
                            d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z"
                            fill="#2D2D2D"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_968">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className=" ms-3 p-3">
              <div className=" mb-3">
                <div>
                  <Input
                    placeholder="Type in here…"
                    variant="soft"
                    startDecorator={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_1233)">
                          <path
                            d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z"
                            fill="black"
                          />
                          <path
                            d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_1233">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    }
                    endDecorator={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_1242)">
                          <path
                            d="M15.8333 5.34169L14.6583 4.16669L10 8.82502L5.34167 4.16669L4.16667 5.34169L8.82501 10L4.16667 14.6584L5.34167 15.8334L10 11.175L14.6583 15.8334L15.8333 14.6584L11.175 10L15.8333 5.34169Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_1242">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    }
                    sx={{
                      "--Input-radius": "0px",
                      borderBottom: "2px solid",
                      borderColor: "neutral.outlinedBorder",
                      "&:hover": {
                        borderColor: "neutral.outlinedHoverBorder",
                      },
                      "&::before": {
                        border: "1px solid var(--Input-focusedHighlight)",
                        transform: "scaleX(0)",
                        left: 0,
                        right: 0,
                        bottom: "-2px",
                        top: "unset",
                        transition:
                          "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                        borderRadius: 0,
                      },
                      "&:focus-within::before": {
                        transform: "scaleX(1)",
                      },
                    }}
                  />
                </div>
                <div></div>
              </div>
              <div className="d-flex mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g opacity="0.5" clip-path="url(#clip0_1_1239)">
                    <path
                      d="M7.33333 9.99998H8.66667V11.3333H7.33333V9.99998ZM7.33333 4.66665H8.66667V8.66665H7.33333V4.66665ZM7.99333 1.33331C4.31333 1.33331 1.33333 4.31998 1.33333 7.99998C1.33333 11.68 4.31333 14.6666 7.99333 14.6666C11.68 14.6666 14.6667 11.68 14.6667 7.99998C14.6667 4.31998 11.68 1.33331 7.99333 1.33331ZM8 13.3333C5.05333 13.3333 2.66667 10.9466 2.66667 7.99998C2.66667 5.05331 5.05333 2.66665 8 2.66665C10.9467 2.66665 13.3333 5.05331 13.3333 7.99998C13.3333 10.9466 10.9467 13.3333 8 13.3333Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1239">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                &nbsp;
                <p style={{ fontSize: "12px", color: "gray" }}>
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>
              <div className="d-flex align-items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_1263)">
                    <path
                      opacity="0.3"
                      d="M15.75 9V7.5H9L10.005 3.495L6.75 6.75V14.25H13.5L15.75 9Z"
                      fill="black"
                    />
                    <path
                      d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1263">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                &nbsp;RECOMMENDED GROUPS
              </div>
              <div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://s3-alpha-sig.figma.com/img/bb0d/5f13/7ffa8afe7647578af2381ac9090c32e2?Expires=1702857600&Signature=Yv2dKS0rdzFfZLNcOv4mFsPRIyyXsX9e4oWRh3TSkN6LcwIvTMdutQD59UNc5id4hU-l-mGNUJCbwby58cj5gdf5b8VmB4iJ6pZu8WFHAEZgCg-4DNmqjT4R7YcinESLsEhqF2qwTh4~fcyzaIunAqOSmMzgsTXYwNujAQIBY2KO67qtMDJH3OTiPR~W9ChfjJRbU6Jq93ozrPkThNfOCCB~m7ignyZCJW0KEPzwn80DuEZ3O~TF8JO9xnIf6~9m5pucOWCQ0qUHQYN65JzZy8lFu46kyBB8OrxPyddYC~wuPbkHsSYymfZ3dBcSXcQGaKZBr6JmqMxlo-9nAkwTdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    &nbsp; Leisure
                  </div>
                  <div>
                    <Chip>Follow</Chip>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://s3-alpha-sig.figma.com/img/bcef/452c/f2f96211f57819f3ef6b3922e0cd72cf?Expires=1702857600&Signature=q1~dJp7yLjIh6d6ap4BagDuyww4jZtYO2-s-G-JhqTJ25YJtYJL8ir7bD1MN0ujTPaTs2VGeMp25OKUrM3~uVV~dxHdheD9r4~kwiZVRJR1pWppyA6leN77zxJIdTZRpy~cA~HJPZB8gQO8iUChQ3Oilrw9mV6VwCqHMB-TNUPtadHLE4bz2vkYEP5UcAQkM6hycs0W~S7gq-e1yqn9C8pw2yZjryRBcvUAH40UOK9Gc1lm6GgvxEpie4qrLnhGgCaIbj9hD15H5zNP-GjQuFvIEamzBkmc9hQe21TgL58sa2i8SNVrJYBfA1NK7E-08nG0SeCyEi8eX0JQBGeA7LQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    &nbsp; Activism
                  </div>
                  <div>
                    <Chip>Follow</Chip>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://s3-alpha-sig.figma.com/img/8f0b/0ff9/829dac10d09fc377df6ec78c4098bc9a?Expires=1702857600&Signature=SA1I4HJC-kPVXOXjeuyLo4l-9EylOKLxOt4goaaAWLRd8mzQI9Mphuw-0PF2CqNcyvlR49TqOU13eRqC7iFySeLrpyHAY5pShrku6xnnCJaXNqWMY3MC03QnYLfaNTk-p6YnQHB1tkr~vApYeA4aqQKk2R7v~-nVgraFz3MWHSRaAMaaPG5SySihY-CTxVqk6vjgVFaZNB-r05yU7MpGWplwKLo35gekkuG5GfgWWKqCWSIFTFp4TR5wiQ3AnpdfxJVFhbdeR8rfWHciqWoUjrivv0DZNuhE~oogECEpyIqJdXPaYtFHp81JPdajJMl-qu2YOBz27U9nqmq49XmYmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    &nbsp; MBA
                  </div>
                  <div>
                    <Chip>Follow</Chip>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://s3-alpha-sig.figma.com/img/0533/15a9/cf46af0ebdaae2ffbbb5718726788a19?Expires=1702857600&Signature=UXG~SNgDTWJyvv~MV7MwNLDamFlLjb3jj8xfX2TBs8PwKaHwglSCeEMViyIqv~cG67UQPM6b7pmpq2fnZH~ih2X5jqmG2LrHcNZ5A81BZEXlIdM3jpaxGptGoqiecVH8SzlYHmSSyiwZWKNC7i5H5b-~OxuKHlGeftbKTcuVrojxBht-c7-4NmgpBxe5b5ZCcuOl2yuhTT~eNgwPpsg0UZGY4hCMpKlryObGlqijWKQyOARdIMjvTygarAhMpPyZD~nakB9hHDvIfPId7jB4MCKfTrw8F3W8zfZUGhQgWRFJc4Jqpu9UZWNmkzTaBatVauwu0o5aX5WWxsf1ZUGivw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    />
                    &nbsp; Philosophy
                  </div>
                  <div>
                    <Chip>Follow</Chip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
