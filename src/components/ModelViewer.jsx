import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Model({ modelUrl }) {
  const geometry = useLoader(STLLoader, modelUrl);
  return (
    <mesh>
      <bufferGeometry attach="geometry" {...geometry} />
      <meshStandardMaterial attach="material" color="gray" />
    </mesh>
  );
}

export default function ModelViewer({ modelUrl }) {
  return (
    <Suspense fallback={<div>Loading model...</div>}>
      <Canvas style={{ width: "100%", height: "500px" }}>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} />
        <Model modelUrl={modelUrl} />
        <OrbitControls />
      </Canvas>
    </Suspense>
  );
}
