import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three/src/Three.js";

export const Experience = () => {
  const meshRef = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
    }
  });
  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight intensity={1} position={[0, 1, 1]} />
      <mesh position={[0, 0, 0]} ref={meshRef}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      {/* <mesh position={[0, 1, 2]}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
    </>
  );
};
