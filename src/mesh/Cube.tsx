import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface CubeProps {
  geometry?: [width: number, height: number, depth: number];
  color: THREE.ColorRepresentation;
  x: number;
  rotateSpeed?: number;
}

const Cube = ({
  geometry = [1, 1, 1],
  color,
  x,
  rotateSpeed = 1,
}: CubeProps) => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const boxGeoRef = useRef<THREE.BoxGeometry>(null);
  useFrame(({ clock }) => {
    if (!cubeRef.current) return;
    const speed = 0.5 + rotateSpeed * 0.05;
    const rotationAmount = clock.elapsedTime * speed;
    cubeRef.current.rotation.x = rotationAmount;
    cubeRef.current.rotation.y = rotationAmount;
  });
  useEffect(() => {
    if (!cubeRef.current) return;
    cubeRef.current.position.x = x;
  }, [x, cubeRef]);
  return (
    <mesh ref={cubeRef}>
      <boxGeometry ref={boxGeoRef} args={[...geometry]} />
      <meshPhongMaterial color={color} />
    </mesh>
  );
};

export default Cube;
