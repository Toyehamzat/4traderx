import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LoginWithPhone() {
  const [email, SetEmail] = useState("");

  const [password, SetPassword] = useState("");

  const url = "https://core.development.4traderx.com/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, {
        username: email,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <LoginPage>
      <LeftScreen>
        <Logo>
          <img src="images/Vector.svg" />
          <LogoName>4Traderx</LogoName>
        </Logo>
        <FormContainer onSubmit={handleSubmit}>
          <Form>
            <Title>Hello! Welcome Back</Title>
            <Label>Phone number</Label>
            <InputField
              type="text"
              required
              value={email}
              placeholder="+234"
              onChange={(e) => SetEmail(e.target.value)}
            />
          </Form>
          <Form>
            <Label>Password</Label>
            <InputField
              type="password"
              required
              value={password}
              placeholder="Password"
              onChange={(e) => SetPassword(e.target.value)}
            />
          </Form>
          <Flexthis>
            <Form variant="FlexRow">
              <InputField type="checkbox" id="remember" />
              <Label htmlFor="remember">Remember Login</Label>
            </Form>
            <LinkContainer>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </LinkContainer>
          </Flexthis>
          <Button type="submit">Log in</Button>
          <LoginContainer>
            Don’t have an account? <Link to="/Signup">Sign Up</Link>
          </LoginContainer>
          <Switch>-or log in with-</Switch>
          <Email>
            <Link to="/LoginWithEmail">Email</Link>
          </Email>
        </FormContainer>
      </LeftScreen>
      <RightScreen>g</RightScreen>
    </LoginPage>
  );
}
const LoginPage = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  flex-wrap: wrap;
`;
const LeftScreen = styled.div`
  width: 55%;
  height: 100%;
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

const LoginContainer = styled.div`
  text-align: center;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 151.5%;
  color: #0e0e0e;
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

const Label = styled.label`
  font-weight: 700;
  color: #636363;
`;

const InputField = styled.input`
  width: ${(props) => (props.type === "checkbox" ? "19px" : "100%")}%;
  height: ${(props) => (props.type === "checkbox" ? "17px" : "50px")};
  background-color: ${(props) =>
    props.type === "checkbox" ? "#D9D9D9;" : "#f8f8f8"};
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  outline: none;
  margin: 0%;
`;
const LinkContainer = styled.div`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;
  color: #0e0e0e;
`;
const Flexthis = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Form = styled.div`
  text-align: left;
  display: flex;
  flex-direction: ${(props) =>
    props.variant === "FlexRow" ? "row" : "column"};
  font-family: "Mulish";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #bfbfbf;
  gap: ${(props) => (props.variant === "FlexRow" ? "14px" : "0%")};
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
  margin-top: 50px;
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

const RightScreen = styled.div`
  height: 100vh;
  width: 45%;
  background-image: url("images/rightscreen.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: border-box;
  position:relative;
`;

const Switch = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 151.5%;
  color: #0e0e0e;
`;
const Email = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 4px 4px 0px;
  gap: 16px;
  border: 1px solid #00a859;
  border-radius: 8px;
  width: 167px;
  height: 47px;
  margin: auto;
  letter-spacing: 0.005em;
  color: #00a859;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
`;
