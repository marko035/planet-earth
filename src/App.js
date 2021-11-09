import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './App.css';
import Earth from './components/earth/Earth';


function App() {


  return (
    <Canvas>
      <directionalLight color="0xffffff" position={[5, 3, 5]} intensity={1} />
      <Suspense fallback={null}>
        {/* <ambientLight color="0x333333" intensity={0.05} /> */}
        <Earth />
      </Suspense>
    </Canvas>
  );
}

export default App;