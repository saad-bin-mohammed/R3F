import { MeshDiscardMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three/src/Three.js";

export const Experience = () => {
  const meshRefSphere = useRef<Mesh>(null);
  const meshRefTorus = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (meshRefSphere.current) {
      meshRefSphere.current.rotation.x += delta;
      meshRefSphere.current.rotation.y += delta;
      meshRefSphere.current.position.z = Math.cos(state.clock.elapsedTime);
    }
  });
  useFrame((state, delta) => {
    if (meshRefTorus.current) {
      meshRefTorus.current.rotation.y += delta;
      // meshRefTorus.current.rotation.y += delta;
      // meshRefTorus.current.position.z = Math.cos(state.clock.elapsedTime);
      meshRefTorus.current.position.x = Math.cos(state.clock.elapsedTime);
      // meshRefTorus.current.position.y =
      //   Math.sin(state.clock.elapsedTime) * 1.16;
    }
  });
  return (
    <>
      {/* <OrbitControls /> */}
      {/* <ambientLight intensity={1} position={[0, 1, 0]} /> */}
      <mesh ref={meshRefSphere}>
        <sphereGeometry />
        <meshNormalMaterial />
      </mesh>
      <mesh ref={meshRefTorus}>
        <torusGeometry />
        <meshToonMaterial />
      </mesh>
      {/* <mesh position={[0, 1, 2]}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
    </>
  );
};
