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
    justify-content: flex-end;
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
                <TextArea placeholder="Pour out your soul" rows={10}/>
                <Button>Finally!!</Button>
                </Form>
            </Left>
            <Right></Right>
            </Container>
        </Section>
    );
}

export default ContactMe
