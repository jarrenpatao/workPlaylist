import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
// Components
import Playlist from "../Playlist";
import NavbarPage from "../NavbarPage";
import SignIn from "./SignIn/SignIn";
import JumboT from "../JumboT/JumboT";
// CSS
import "./MainBody.css";

function MainBody() {
  return (
    <MDBContainer>
      <Router>
        <NavbarPage />
      </Router>
      <hr />  
      <JumboT />
      {/* import components here */}
      <MDBContainer>
        <MDBRow>
          <MDBCol md="7">
            <Playlist />
          </MDBCol>
          <MDBCol md>
            <SignIn className="pr"/>
          </MDBCol>
        </MDBRow>
        <hr />
        {/* Row 2 */}
        <MDBRow>

        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  )
}

export default MainBody;