import { styled } from "styled-components"

const Section = styled.div `
    height: 100vh;
    scroll-snap-align: center;
`

const Container = styled.div ``

const Left = styled.div``;

const Title = styled.h1``;

const Form = styled.form``;

const Input = styled.input``;

const TextArea = styled.textarea``;

const Button = styled.button ``

const Right = styled.div``;

const ContactMe = () => {
    return (
        <Section>
            <Container>
            <Left>
                <Form>
                <Title>Humor me!!</Title>
                <Input placeholder="Your Name or Nickname" />
                <Input placeholder="Email of course" />
                <Input placeholder="Your Name or Nickname" />
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
