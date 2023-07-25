import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Gifts from './Gifts'

const Surprise = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Gifts/>
        <OrbitControls enableZoom={false} />
      </Stage>
    </Canvas>
  );
};

export default Surprise;
