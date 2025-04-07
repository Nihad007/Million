import { Vector3 } from '@react-three/fiber';

type MarkerPositionProp = {
    position: [number, number, number] | Vector3;
  };

function Marker({position}: MarkerPositionProp) {
    return (
        <group position={position}>
          {/* The circular base of the marker */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="red" />
          </mesh>
    
          {/* The pointed tip of the marker */}
          <mesh position={[0, -0.75, 0]}>
            <coneGeometry args={[0.2, 1.5, 32]} />
            <meshStandardMaterial color="red" />
          </mesh>
        </group>
      );
  }

export default Marker;