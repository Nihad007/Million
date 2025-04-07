import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import './App.css'
import Marker from './components/Marker';
import { NumberVec3 } from './models/number-vector3-matrix';

const matrix: NumberVec3[] = [
  [0, 0, 0],
  [4, 0, 0],
  [0, 4, 0],
  [0, 0, 4],
];

function App() {

  return (
    <>
    <Canvas className='main_canvas'>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {matrix.map((pos, i) => (
        <Marker key={i} position={pos} />
      ))}
      <OrbitControls />
    </Canvas>
    </>
  )
}

export default App
