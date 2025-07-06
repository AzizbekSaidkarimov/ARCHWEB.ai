// src/components/PlayerControls.jsx
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';

export default function PlayerControls() {
  const { camera } = useThree();
  const [movement, setMovement] = useState({ forward: 0, right: 0 });

  // WASD controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key.toLowerCase()) {
        case 'w':
          setMovement((m) => ({ ...m, forward: -1 }));
          break;
        case 's':
          setMovement((m) => ({ ...m, forward: 1 }));
          break;
        case 'a':
          setMovement((m) => ({ ...m, right: -1 }));
          break;
        case 'd':
          setMovement((m) => ({ ...m, right: 1 }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.key.toLowerCase()) {
        case 'w':
        case 's':
          setMovement((m) => ({ ...m, forward: 0 }));
          break;
        case 'a':
        case 'd':
          setMovement((m) => ({ ...m, right: 0 }));
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

  // Move the camera
  useFrame(() => {
    const speed = 0.1;
    camera.position.x += movement.right * speed;
    camera.position.z += movement.forward * speed;
  });

  return null; // No visual output, just camera control
}
