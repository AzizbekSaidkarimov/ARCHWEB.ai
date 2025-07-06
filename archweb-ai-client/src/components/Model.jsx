import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const modelRef = useRef();
  const { scene } = useGLTF('/house.glb'); 
  const [direction, setDirection] = useState({ x: 0, z: 0 });

  // Rotate + move
//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += 0.003;
//     }
//   });

  // Keyboard control with WASD
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key.toLowerCase()) {
        case 'w':
          setDirection((dir) => ({ ...dir, z: -1 }));
          break;
        case 's':
          setDirection((dir) => ({ ...dir, z: 1 }));
          break;
        case 'a':
          setDirection((dir) => ({ ...dir, x: -1 }));
          break;
        case 'd':
          setDirection((dir) => ({ ...dir, x: 1 }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.key.toLowerCase()) {
        case 'w':
        case 's':
          setDirection((dir) => ({ ...dir, z: 0 }));
          break;
        case 'a':
        case 'd':
          setDirection((dir) => ({ ...dir, x: 0 }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return <primitive ref={modelRef} object={scene} {...props} />;
}
