import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/gifts-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Texture} position={[0.139, 0, 0]} scale={0.098} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.material} position={[0.139, 0, 0]} scale={0.098} />
    </group>
  )
}

useGLTF.preload('/gifts-transformed.glb')
