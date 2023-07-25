import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Smile from "./Smile"

const Job = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Smile/>
        <OrbitControls enableZoom={false} />
      </Stage>
    </Canvas>
  );
};

export default Job;
