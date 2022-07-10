import React from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './mesh/Cube';

const App = () => {
  return (
      <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
          }}
      >
        <Canvas>
          <perspectiveCamera fov={75} near={0.1} far={5} position={[0, 0, 2]} />
          <scene>
            <pointLight args={[0xffffff, 0.8]} position={[-1, 2, 4]} />
            <Cube color={'purple'} x={-2} rotateSpeed={4} />
            <Cube color={'teal'} x={0} rotateSpeed={1} />
            <Cube color={'gold'} x={2} rotateSpeed={8} />
          </scene>
        </Canvas>
      </div>
  );
};

export default App;
