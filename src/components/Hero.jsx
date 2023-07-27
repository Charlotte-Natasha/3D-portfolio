import { styled } from "styled-components";
import Navbar from "./Navbar";
import { Gifts } from "@styled-icons/fa-solid/Gifts";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 780px) {
        height: 200vh;
    }
`;

const Container = styled.div`
    height: 100%;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 780px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 780px) {
        flex: 1;
        align-items: center;
    }
`;
const Title = styled.h1`
    font-size: 74px;

    @media only screen and (max-width: 780px) {
        text-align: center;
    }
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

    @media only screen and (max-width: 780px) {
        padding: 20px;
        text-align: center;
    }
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

    @media only screen and (max-width: 780px) {
        flex: 1;
        width: 100%;
    }
`;

const Img = styled.img`
    border-radius: 50%;
    height: 70vh;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @media only screen and (max-width: 780px) {
        width: 300px;
        height: 300px;
    }

    @keyframes animate {
        to {
        transform: translateY(25px);
        }
    }
`;

const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Memories, Gifts, Words.</Title>
                    <WhoIAm>
                        <StyledGifts />
                        <Subtitle>Get to know me.</Subtitle>
                    </WhoIAm>
                    <Description>
                        Spend time with me alaa. I am not exposing all my secrets. But I
                        am fun I promise.
                    </Description>
                    <Button> Moving On. </Button>
                </Left>
                <Right>
                    {/* 3d Model */}
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={3}>
                            <MeshDistortMaterial
                                color="#82445e"
                                attach="material"
                                distort={0.5}
                                speed={2}
                            />
                        </Sphere>
                    </Canvas>
                    <Img src="./img/toon3.png" />
                </Right>
            </Container>
        </Section>
    );
};

export default Hero
