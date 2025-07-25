import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isLightOn = true }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh position={[0, -0.5, 0]}>
      <hemisphereLight intensity={isLightOn ? 0.15 : 0.05} groundColor='black' />
      <spotLight
        position={[-25, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isLightOn ? 1 : 0.2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={isLightOn ? 1 : 0.3} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3.5, -2.2] : [0, -3.75, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = ({ isLightOn = true }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: false,
        alpha: false,
        powerPreference: "high-performance"
      }}
      onCreated={({ gl }) => {
        gl.setClearColor('#050816', 1);
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Computers isMobile={isMobile} isLightOn={isLightOn} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;