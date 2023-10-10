import React from "react";
import styled from "styled-components";

const Contact = () => {
  const array = [
    {
      title: "Phone",
      text: "010-2911-4961",
    },
    {
      title: "Email",
      text: "taewok51615@gamil.com",
    },
    {
      title: "Address",
      text: "경기도 고양시 일산서구",
    },
  ];
  return (
    <Container>
      <ContactList>
        {array.map((v) => (
          <ContactItem key={v.title}>
            <h2>{v.title}</h2>
            <p>{v.text}</p>
          </ContactItem>
        ))}
      </ContactList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
  @media screen and (max-width: 1080px) {
    justify-content: center;
    padding-bottom: 15vh;
    width: 100%;
  }
`;

const ContactList = styled.ul`
  list-style: none;
  @media screen and (max-width: 1080px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;
const ContactItem = styled.li`
  margin: 0 0 30px 0;
  padding: 10px;
  /* width: 350px; */
  height: 150px;
  /* box-shadow: inset 0px 0px 6px 0px rgba(255, 255, 255, 0.5); */
  border-radius: 20px;
  h2 {
    font-size: 2rem;
  }
  p {
    padding-top: 10%;
    /* text-align: right; */
    font-size: 1.2rem;
  }
  @media screen and (max-width: 1080px) {
    margin: 0 30px 30px 30px;
  }
`;

export default Contact;
