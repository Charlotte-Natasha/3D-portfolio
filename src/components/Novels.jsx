import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Books from './Books'
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

const Novels = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Books />
          <OrbitControls enableZoom={false} />
        </Stage>
      </Canvas>
      <Desc>
        A love letter to Whiskey by Kendi Steiner. The most amazing book I ever read would not mind having a hard copy. Or any romance/fantasy book. 
      </Desc>
    </>
  );
}

export default Novels

