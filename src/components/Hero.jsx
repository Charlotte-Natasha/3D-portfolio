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
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;
const Title = styled.h1`
    font-size: 74px;
`;

const WhoIAm = styled.div`
    display: flex;
    align-items: center;
    gap: 10px
`;

const StyledGifts = styled(Gifts)`
    width: 40px;
    color: #631636;
`;

const Subtitle = styled.h2`
    color: #d8a557;
`;

const Description = styled.p`
    font-size: 24px;
    color: lightgray;
`;

const Button = styled.button`
    background-color: #631636;
    border-radius: 50px; 
    border: none;
    color: white;
    width: 150px;
    padding: 10px;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 3;
    position: relative;
`;

const Img = styled.img`
    border-radius: 50%;
    height: 70vh;
    object-fit: contain;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
        to {
            transform: translateY(25px)
        }
    }
`;

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
                    Spend time with me alaa. I am not exposing all my secrets. But I am fun I promise. 
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
