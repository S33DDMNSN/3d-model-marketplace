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
      <Canvas
        style={{
          width: "100%",      // Makes the canvas responsive to its container
          height: "300px",    // Adjusts the height to fit well in the layout
        }}
      >
        <ambientLight />
        <directionalLight position={[10, 10, 10]} />
        <Model modelUrl={modelUrl} />
        <OrbitControls
          minDistance={75}   // Adjust zoom to be further initially
          maxDistance={100}  // Set maximum zoom out distance
        />
      </Canvas>
    </Suspense>
  );
}
