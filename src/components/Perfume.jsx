import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bleu from "./Bleu"
import { styled } from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 100px;
  right: 100px;

  @media only screen and (max-width: 780px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Perfume = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Bleu />
          <OrbitControls enableZoom={false} />
        </Stage>
      </Canvas>
      <Desc>
        Flowery scents are like a wild dance party for the senses, setting the
        world abuzz with excitement!
      </Desc>
    </>
  );
};

export default Perfume;
