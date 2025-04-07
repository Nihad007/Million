import { Vector3 } from '@react-three/fiber';
import * as THREE from 'three';

type MarkerPositionProp = {
    position: [number, number, number] | Vector3;
    material: THREE.Material;
  };


function Marker({position, material}: MarkerPositionProp) {
    return (
        <group position={position}>
          {/* The circular base of the marker */}
          <mesh position={[0, 0, 0]} material={material}>
            <sphereGeometry args={[0.5, 32, 32]} />
          </mesh>
    
          {/* The pointed tip of the marker */}
          <mesh position={[0, -0.75, 0]} material={material}>
            <coneGeometry args={[0.2, 1.5, 32]} />
          </mesh>
        </group>
      );
  }

export default Marker;