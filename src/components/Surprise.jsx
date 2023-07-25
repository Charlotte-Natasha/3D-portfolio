import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


const Surprise = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        
        <OrbitControls enableZoom={false} />
      </Stage>
    </Canvas>
  );
};

export default Surprise;
