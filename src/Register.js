import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const {
      target: { id, value },
    } = e;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
  };

  const register = async () => {
    try {
      const response = await axios.post("http://localhost:8000/register", {
        email,
        password,
      });
      alert(response.data);
    } catch (error) {
      alert(error.response?.data || "알 수 없는 에러 발생");
    }
  };

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      alert(response?.data);
    } catch (error) {
      alert(error.response?.data || "알 수 없는 에러 발생");
    }
  };
  return (
    <Container>
      <Form>
        <Logo>WAFFLE</Logo>
        <Input
          id="email"
          type="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
        />
        <Input
          id="password"
          type="password"
          placeholder="비밀번호"
          onChange={onChange}
          value={password}
        />
        <Buttons>
          <button onClick={login}>로그인</button>
          <button onClick={register}>회원가입</button>
        </Buttons>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const Form = styled.div`
  width: 80%;
  max-width: 700px;
  height: auto;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  padding: 40px 7%;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  font-size: 1rem;
  border: 2px solid gray;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
  & button {
    height: 40px;
    width: 50%;
    border: 0;
    color: white;
    transition: all 0.5s;
  }
  & button:nth-child(1) {
    background-color: rgb(40 98 255);
  }
  & button:nth-child(2) {
    background-color: rgb(33 33 33);
  }
  & button:hover {
    filter: contrast(200%);
    cursor: pointer;
  }
  & button:active {
    filter: hue-rotate(340deg);
  }
`;
export default Register;
