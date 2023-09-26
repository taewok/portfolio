import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Email = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState(``);

  const sendVerificationEmail = () => {
    emailjs.init("rqOjtxc84mB2nyTOJ");
    // 이메일 보내기
    // 여기서 정의해야하는 것은 위에서 만든 메일 템플릿에 지정한 변수({{ }})에 대한 값을 담아줘야한다.
    const templateParams = {
      from_name: name,
      message: `${text}
      email: ${email}`,
    };

    emailjs
      .send(
        "service_oxwlj6d", // 서비스 ID
        "template_e2nfbap", // 템플릿 ID
        templateParams
      )
      .then((response) => {
        alert("전송완료");
      })
      .catch((error) => {
        alert("오류발생");
      });
  };

  const nameOnChange = (value) => {
    setName(value);
  };
  const emailOnChange = (value) => {
    setEmail(value);
  };
  const textOnChange = (value) => {
    setText(value);
  };

  const emailOnSubmit = (e) => {
    e.preventDefault();
    sendVerificationEmail();
  };

  return (
    <Container>
      <FormBox onSubmit={(e) => emailOnSubmit(e)}>
        <h1>Contact</h1>
        <InputBox>
          <Input
            required
            value={name}
            onChange={(e) => nameOnChange(e.target.value)}
          />
          <span>Name</span>
        </InputBox>
        <InputBox>
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => emailOnChange(e.target.value)}
          />
          <span>Email</span>
        </InputBox>
        <InputBox>
          <MessageInput
            required
            value={text}
            onChange={(e) => textOnChange(e.target.value)}
          />
          <span>Message</span>
        </InputBox>
        <BtnBox>
          <Button type="submit">보내기</Button>
        </BtnBox>
      </FormBox>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 0 7%;
  width: 36%;
  height: 80%;
  color: black;
  @media screen and (max-width: 1080px) {
    margin: 0 auto;
    padding: 0;
    width: 80%;
  }
`;
const FormBox = styled.form`
  position: relative;
  z-index: 99;
  padding: 7% 5%;
  width: 95%;
  height: 90%;
  background-color: white;
  border-radius: 10px;
  h1 {
    padding-bottom: 10px;
    text-align: center;
  }
`;
const InputBox = styled.div`
  position: relative;
  margin-bottom: 50px;
  padding: 10px 0;
  span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, 50%);
    font-size: 1rem;
    color: black;
    transition: all 0.5s;
  }
`;
const Input = styled.input`
  position: relative;
  z-index: 999;
  padding: 5px 0;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  &:focus + span,
  &:valid + span {
    transform: translate(0, -60%);
  }
`;

const MessageInput = styled.textarea`
  padding: 5px;
  width: calc(100% - 10px);
  min-height: 200px;
  outline: none;
  text-decoration: none;
  & + span {
    transform: translate(5%, 50%);
  }
  &:focus + span,
  &:valid + span {
    transform: translate(0, -60%);
  }
`;

const BtnBox = styled.div`
  display: flex;
`;
const Button = styled.button`
  margin: -20px auto 0 auto;
  width: 100px;
  height: 40px;
  background-color: transparent;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    box-shadow: inset 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  }
`;

export default Email;
