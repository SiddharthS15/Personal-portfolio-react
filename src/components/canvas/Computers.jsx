import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isLightOn = true }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  // Responsive scale/position for mobile/tablet/desktop
  let scale = 0.75;
  let position = [0, -3.75, -1.5];
  if (isMobile === 'mobile') {
    scale = 0.68;
    position = [0, -3.3, -2.2];
  } else if (isMobile === 'tablet') {
    scale = 0.72;
    position = [0, -3.5, -1.8];
  }

  // Animated rotation effect
  const [rotationY, setRotationY] = useState(-0.2);
  useEffect(() => {
    let frame;
    const animate = () => {
      setRotationY((prev) => prev + 0.002);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Glow effect for screen (simple mesh overlay)
  const screenGlow = (
    <mesh position={[0, -3.2, -1.1]}>
      <planeGeometry args={[1.2, 0.7]} />
      <meshBasicMaterial color={isLightOn ? '#ffe066' : '#222'} transparent opacity={isLightOn ? 0.25 : 0.1} />
    </mesh>
  );

  // Pulsing shadow effect
  const [shadowOpacity, setShadowOpacity] = useState(0.3);
  useEffect(() => {
    let up = true;
    let frame;
    const pulse = () => {
      setShadowOpacity((prev) => {
        if (up && prev < 0.5) return prev + 0.01;
        if (!up && prev > 0.2) return prev - 0.01;
        up = !up;
        return prev;
      });
      frame = requestAnimationFrame(pulse);
    };
    frame = requestAnimationFrame(pulse);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <group>
      {/* Subtle pulsing shadow under computer */}
      <mesh position={[0, -4.2, -1.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.2, 32]} />
        <meshBasicMaterial color={'#222'} transparent opacity={shadowOpacity} />
      </mesh>
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
          scale={scale}
          position={position}
          rotation={[-0.01, rotationY, -0.1]}
        />
      </mesh>
      {/* Glow overlay for screen */}
      {screenGlow}
    </group>
  );
};

const ComputersCanvas = ({ isLightOn = true }) => {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const checkDeviceType = () => {
      if (window.innerWidth <= 500) {
        setDeviceType('mobile');
      } else if (window.innerWidth <= 900) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  // Responsive camera position and FOV
  let cameraPosition = [20, 3, 5];
  let fov = 25;
  if (deviceType === 'mobile') {
    cameraPosition = [18, 2.5, 7];
    fov = 32;
  } else if (deviceType === 'tablet') {
    cameraPosition = [19, 2.8, 6];
    fov = 28;
  }

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: cameraPosition, fov }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true,
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
        <Computers isMobile={deviceType} isLightOn={isLightOn} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;