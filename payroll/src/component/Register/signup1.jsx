import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SignUp1() {
  return (
    <>
      <SignUpPage>
        <LeftScreen>
          <Logo>
            <img src="images/Vector.svg" />
            <LogoName>4Traderx</LogoName>
          </Logo>
          <FormContainer>
            <Title>Create an Account</Title>
            <Form>
              <Label>Phone Number</Label>
              <InputContainer>
                <FlagContainer>
                  <Flag>FLAG</Flag>
                </FlagContainer>
                <InputField type="text" placeholder="9134454880" required />
              </InputContainer>
            </Form>
            <Form>
              <Label>Account Type</Label>
              <FlexThis>
                <Label htmlFor="personal">Personal Account</Label>
                <InputField type="checkbox" id="personal" required />
              </FlexThis>
            </Form>
            <Button type="submit">
              <Link to="/SignUpNext">Next</Link>
            </Button>
            <LogInContainer>
              Already have an account?<Link to="/LoginWithEmail">Log In</Link>
            </LogInContainer>
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
  flex-direction: column;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #bfbfbf;
  width: 380px;
`;

const Title = styled.h2`
  text-align: center;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #0e0e0e;
`;

const FlexThis = styled.div`
  width: 360px;
  height: 52px;
  background: #f8f8f8;
  border-radius: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0%;
  padding-left: 10px;
  padding-right: 10px;
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 7px;
`;

const InputField = styled.input`
  width: ${(props) => (props.type === "checkbox" ? "19px" : "301px")};
  height: 50px;
  background-color: #f8f8f8;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  outline: none;
  margin: 0%;
`;

const FlagContainer = styled.div`
  width: 68px;
  height: 52px;
  background-color: #f8f8f8;
  border-radius: 10px;
  border: none;
  justify-content: center;
  text-align: center;
  outline: none;
`;

const Flag = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  margin-top: 90px;
`;

const LogInContainer = styled.div`
  text-align: center;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 151.5%;
  color: #0e0e0e;
  margin-top: 25px;
`;
