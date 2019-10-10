import React from "react";
import { MDBContainer, MDBBtn, MDBInput } from 'mdbreact';
import "../MainBody.css";

const SignIn = () => {
  return (
    <MDBContainer className="pr">
      <form>
        <p className="h5 text-center">Sign up</p>
        <div className="grey-text">
          <MDBInput
            label="Username"
            icon="user"
            grouptype="text"
            validateerror="wrong"
            success="right"
          />
          <MDBInput
            label="Your password"
            icon="lock"
            grouptype="password"
            validate
          />
          <MDBInput
            label="Confirm your password"
            icon="exclamation-triangle"
            grouptype="password"
            validateerror="wrong"
            success="right"
          />
        </div>
        <div className="text-center">
          <MDBBtn color="primary">Register</MDBBtn>
        </div>
      </form>
    </MDBContainer>
  );
};

export default SignIn;