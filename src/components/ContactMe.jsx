import { styled } from "styled-components"

const Section = styled.div `
    height: 100vh;
    scroll-snap-align: center;
`

const Container = styled.div `
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
    justify-content: center;
`;

const Title = styled.h1`
    font-weight: bold;
`;

const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const Input = styled.input`
    padding: 10px;
    background-color: #fef3ea;
`;

const TextArea = styled.textarea`
    padding: 20px;
`;

const Button = styled.button ``

const Right = styled.div`
    flex: 1;
`;

const ContactMe = () => {
    return (
        <Section>
            <Container>
            <Left>
                <Form>
                <Title>Humor me!!</Title>
                <Input placeholder="Your Name or Nickname" />
                <Input placeholder="Email of course" />
                <TextArea placeholder="Pour out your soul"/>
                <Button>Finally!!</Button>
                </Form>
            </Left>
            <Right></Right>
            </Container>
        </Section>
    );
}

export default ContactMe
