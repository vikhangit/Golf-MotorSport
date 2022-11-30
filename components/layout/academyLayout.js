import React from "react";
import Footer from "../footer/footer";
import HeaderAcademy from "../HeaderAcademy/HeaderAcademy";

function AcademyLayout({ children }) {
  return (
    <>
      <div className="wrapper-project">
        <HeaderAcademy />
        <div
          className="main"
          style={{
            marginTop: 102,
          }}
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AcademyLayout;
