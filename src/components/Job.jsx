import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Smile from "./Smile"
import { styled } from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
`;

const Job = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Smile />
          <OrbitControls enableZoom={false} />
        </Stage>
      </Canvas>
      <Desc>
        This project is just an indication of what more I can do. Let us get to talking. 
      </Desc>
    </>
  );
};

export default Job;
