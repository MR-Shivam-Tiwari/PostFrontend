import React from "react";

function ImgSection() {
  return (
    <div>
      <div style={{ position: "relative", width: "100%", height: "440px" }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="https://s3-alpha-sig.figma.com/img/756e/302b/7d56a759ac56bc165f65c40094aba4e8?Expires=1702857600&Signature=phsMWdygU0jb0jAU-MA~Yl2AmhXPEH2pGsNE9bpVhdsGa~EnuKrmLh2gGGNlMbP-KlzncidHbTjbwKwS6QSPF4Mnejbxabxau3ePACxYQGH2E2iNtiiBlwktEETZUa8U3eMEVWxmtfoE4PZ8sudjI6y3bABoJgQXTNGyPdBakmDjGK8bTstAd883ZKn~IyvkGn9HZKmq5cCixc5hsPcnR-P0cbCDP35-tfBGbtPC2pxCWH7iZGVROuKR--UG29GHuQXUP7YcZs9xhor5D9e6njCgHTd4QS1PZmVKn3lZDh7dSt4JIu8DVYjI5S7ELqyJp~fc6swtqzc1ROGlQ8u07A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="logo"
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.60) 100%)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "107px",
            left: "155px",
            color: "#FFF",
            fontSize: "36px",
            fontWeight: "700",
          }}
        >
          Computer Engineering
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "155px",
            color: "#FFF",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          142,765 Computer Engineers follow this
        </div>
      </div>
    </div>
  );
}

export default ImgSection;
