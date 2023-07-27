import { useRef, useState } from "react";
import { styled } from "styled-components";
import MapChart from "./MapChart";
import emailjs from "@emailjs/browser";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 780px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
    font-weight: bold;
    text-align: center;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 780px) {
    width: 300px;
  }
`;

const Input = styled.input`
    padding: 10px;
    background-color: #fef3ea;
    border: none;
    border-radius: 10px;
`;

const TextArea = styled.textarea`
    padding: 20px;
    background-color: #fef3ea;
    border: none;
    border-radius: 10px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #631636;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 10px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

const ContactMe = () => {
    const ref = useRef();
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
          .sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            ref.current,
            "YOUR_PUBLIC_KEY"
          )
          .then(
            (result) => {
              console.log(result.text);
              setSuccess(true);
            },
            (error) => {
              console.log(error.text);
              setSuccess(false);
            }
          );
    };
    return (
      <Section>
        <Container>
          <Left>
            <Form ref={ref} onSubmit={handleSubmit}>
              <Title>Humor me!!</Title>
              <Input
                placeholder="Your Name or Nickname"
                name="name"
                type="name"
                id="name"
                autoComplete="name"
              />
              <Input
                placeholder="Email of course"
                name="email"
                type="email"
                id="email"
                autoComplete="email"
              />
              <TextArea
                placeholder="Pour out your soul"
                rows={10}
                name="message"
              />
              <Button type="submit">Finally!!</Button>
              {success &&
                "Message sent. I might get back to you, I might not. Thankyou for the message though. I appreciate you taking your time :)"}
            </Form>
          </Left>
          <Right>
            <MapChart />
          </Right>
        </Container>
      </Section>
    );
}

export default ContactMe
