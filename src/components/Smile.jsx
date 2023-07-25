import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/smile-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material_2} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.material_1} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.material_0} />
    </group>
  )
}

useGLTF.preload('/smile-transformed.glb')
