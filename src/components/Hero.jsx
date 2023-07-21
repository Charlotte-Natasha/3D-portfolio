import { styled } from "styled-components";
import Navbar from "./Navbar";
import { Gifts } from "@styled-icons/fa-solid/Gifts";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    
`;
const Title = styled.h1``;

const WhoIAm = styled.div``;

const StyledGifts = styled(Gifts)`
    width: 20px;
    color: green;
`;

const Subtitle = styled.h2``;

const Description = styled.p``;

const Button = styled.button``;

const Right = styled.div`
    
`;

const Img = styled.img``;

const Hero = () => {
    return (
    <Section>
        <Navbar/>
        <Container>
            <Left>
                <Title>
                    Memories, Gifts, Words.
                </Title>
                <WhoIAm>
                    <StyledGifts/>
                    <Subtitle>Get to know me.</Subtitle>
                </WhoIAm>
                <Description> 
                    Spend time with. I am not exposing all my secrets. But I am fun I promise. 
                </Description>
                <Button> Moving On. </Button>
            </Left>
            <Right>
                {/* 3d Model */}
                <Img src="./img/toon1.jpeg"/>
            </Right>
        </Container>
    </Section>);
};

export default Hero
