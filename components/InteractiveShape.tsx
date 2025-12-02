import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const InteractiveShape: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    
    // Gentle floating
    meshRef.current.position.y = Math.sin(time / 2) * 0.2;
    
    // Scale on hover
    const targetScale = hovered ? 1.2 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <Icosahedron
      args={[1, 1]} // radius, detail
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={1}
    >
      <MeshDistortMaterial
        color={hovered ? "#06b6d4" : "#8B5CF6"}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        wireframe={hovered}
      />
    </Icosahedron>
  );
};

export default InteractiveShape;