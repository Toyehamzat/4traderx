import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SignUp2() {
  return (
    <>
      <SignUpPage>
        <LeftScreen>
          <Logo>
            <img src="images/Vector.svg" />
            <LogoName>4Traderx</LogoName>
          </Logo>
          <FormContainer>
            <Title>Personal Information</Title>
            <FlexThis>
              <Form variant="short">
                <Label>First Name</Label>
                <InputField
                  variant="short"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </Form>
              <Form variant="short">
                <Label>Last Name</Label>
                <InputField
                  variant="short"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </Form>
            </FlexThis>
            <Form>
              <Label>Email</Label>
              <InputField type="email" placeholder="Email" required />
            </Form>
            <Form>
              <Label>Date of Birth </Label>
              <InputField type="date" placeholder="DD/MM/YYYY" required />
            </Form>
            <Form>
              <Label>Password</Label>
              <InputField type="password" placeholder="Password" required />
            </Form>
            <Form variant="row">
              <InputField type="checkbox" required />
              <Label>
                I agree to 4TraderX Privacy policy and Terms & Condition
              </Label>
            </Form>
            <Button type="submit">Create an account</Button>
          </FormContainer>
        </LeftScreen>
        <RightScreen>g</RightScreen>
      </SignUpPage>
    </>
  );
}

const SignUpPage = styled.section`
  width: 100wh;
  height: 100vh;
  display: flex;
  background: #ffffff;
  flex-wrap: wrap;
`;

const LeftScreen = styled.div`
  width: 760px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 15px;
  padding-left: 70px;
  width: 100%;
`;

const LogoName = styled.label`
  color: #424242;
  font-weight: 900;
  font-size: 25px;
`;

const FormContainer = styled.form`
  border-radius: 5px;
  padding: 30px 15px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 380px;
  margin: auto;
`;

const Form = styled.div`
  text-align: left;
  display: flex;
  flex-direction: ${(props) => (props.variant === "row" ? "row" : "column")};
  font-family: "Mulish";
  font-style: normal;
  font-weight: 500;
  align-items: ${(props) => (props.variant === "row" ? "center" : "")};
  font-size: 14px;
  line-height: 18px;
  color: #bfbfbf;
  width: ${(props) => (props.variant === "short" ? "182px" : "380px")};
  gap: ${(props) => (props.variant === "row" ? "12px" : "0px")};
`;

const Title = styled.h2`
  text-align: center;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #0e0e0e;
  margin-bottom: 0;
`;

const FlexThis = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0%;
  gap: 16px;
  justify-content: space-between;
`;
const RightScreen = styled.div`
  height: 100%;
  width: 580px;
  background: #00a759;
`;

const Label = styled.label`
  font-weight: 700;
  color: #636363;
`;

const InputField = styled.input`
  width: ${(props) => (props.type === "checkbox" ? "15px" : "100%")};
  height: 50px;
  background-color: ${(props) =>
    props.type === "checkbox" ? "#D9D9D9" : "#f8f8f8"};
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  outline: none;
  margin: 0%;
`;

const Button = styled.button`
  background-color: #00a859;
  color: white;
  font-weight: 700;
  cursor: pointer;
  border: none;
  padding: 10px;
  height: 50px;
  border-radius: 10px;
  width: 380px;
`;
