import React, { useState } from "react";
import Header from "./HomeComponent/Header";
import ImgSection from "./HomeComponent/ImgSection";
import Post from "./HomeComponent/Post";

function Home() {
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
    <div className="">
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          background: "white",
        }}
      >
        <div>
          <Header />
        </div>
        <div>
          <ImgSection />
        </div>
        <div>
          <Post />
        </div>
      </div>
    </div>
  );
}

export default Home;
