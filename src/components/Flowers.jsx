import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Series from "./Series";

const Job = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Series />
        <OrbitControls enableZoom={false} />
      </Stage>
    </Canvas>
  );
};

export default Job;
