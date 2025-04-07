import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import './App.css'
import Marker from './components/Marker';
import { NumberVec3 } from './models/number-vector3-matrix';
import * as THREE from 'three';

const matrix: NumberVec3[] = [
  [0, 0, 0],
  [4, 0, 0],
  [0, 4, 0],
  [0, 0, 4],
];

const alertMaterial = new THREE.MeshStandardMaterial({ color: 'red' });
const realisticMaterial = new THREE.MeshStandardMaterial({
  color: 'green',         // The base color of the material
  roughness: 0.4,       // Adjust roughness (lower for smoother surfaces, higher for rougher)
  metalness: 0.2,       // Adjust metalness (0 = non-metallic, 1 = metallic)
  emissive: new THREE.Color(0.1, 0.1, 0.1), // Simulate glowing effect
  emissiveIntensity: 0.5, // Intensity of the emissive glow
});
function App() {

  return (
    <>
    <Canvas className='main_canvas'>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {matrix.map((pos, i) => (
        <Marker key={i} position={pos} material={ i % 2 === 0 ? alertMaterial : realisticMaterial}/>
      ))}
      <OrbitControls />
    </Canvas>
    </>
  )
}

export default App
