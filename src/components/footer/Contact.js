import React from "react";
import styled from "styled-components";

const Contact = () => {
  const array = [
    {
      title: "Name",
      text: "김태욱",
    },
    {
      title: "Phone",
      text: "010-2911-4961",
    },
    {
      title: "Email",
      text: "taewok51615@gamil.com",
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
  padding: 0 5%;
  width: 40%;
`;

const ContactList = styled.ul`
  list-style: none;
`;
const ContactItem = styled.li`
  margin: 0 0 30px 0;
  padding: 10px;
  width: 350px;
  height: 150px;
  box-shadow: inset 0px 0px 6px 0px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  h2 {
    font-size: 1rem;
  }
  p {
    padding-top: 10%;
    text-align: center;
    font-size: 1.5rem;
  }
`;

export default Contact;
