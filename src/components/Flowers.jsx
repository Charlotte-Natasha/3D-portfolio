import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Series from "./Series";
import  styled  from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 780px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Flowers = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Series />
          <OrbitControls enableZoom={false} />
        </Stage>
      </Canvas>
      <Desc>
        I am a red rose enthusiast, but bring on the unexpected and unleash a
        surprise that will make me do the happy dance of delight! 🌹💃
      </Desc>
    </>
  );
};

export default Flowers;
