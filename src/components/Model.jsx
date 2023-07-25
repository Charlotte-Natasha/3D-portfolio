import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Model = () => {
    const textRef = useRef();

    // Use useFrame to update the position of the text in the cube's local coordinates
    useFrame((state) => {
        if (textRef.current) {
            textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
        }
    });
    return (
        <mesh>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 25]} />
                    <color attach="background" args={["#631636"]} />
                    <group ref={textRef}>
                        <Text fontSize={2.5} color="#fff" position={[0, 0.5, 1]}>
                            Happy Birthday
                        </Text>
                        <Text fontSize={2.5} color="#fff" position={[0, -4, 1]}>
                            To me
                        </Text>
                    </group>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    );
}

export default Model
