import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Books from './Books'


const Novels = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Books/>
        <OrbitControls enableZoom={false}/>
      </Stage>
    </Canvas>
  )
}

export default Novels

