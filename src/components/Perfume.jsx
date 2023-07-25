import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bleu from "./Bleu"

const Perfume = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Bleu/>
        <OrbitControls enableZoom={false} />
      </Stage>
    </Canvas>
  );
};

export default Perfume;
