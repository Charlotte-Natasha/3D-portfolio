import { styled } from "styled-components";
import { Gifts } from "@styled-icons/fa-solid/Gifts";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
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
    gap: 10px;
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

const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Canvas camera={{ fov:25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} autoRotate />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Model />
                    </Canvas>
                </Left>
                <Right>
                    <Title>
                        Expand your horizons and venture into unexplored territory.
                    </Title>
                    <WhoIAm>
                        <StyledGifts />
                        <Subtitle>Get to know me.</Subtitle>
                    </WhoIAm>
                    <Description>
                        This happens to be one of the most fun projects I have ever done
                        so go crazy with it.
                    </Description>
                    <Button> Moving On. </Button>
                </Right>
            </Container>
        </Section>
    );
};

export default Who;
