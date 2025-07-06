import { useThree } from '@react-three/fiber';
import { Vector3, Raycaster } from 'three';
import React, { useEffect } from 'react';

export default function Focus() {
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    const raycaster = new Raycaster();
    const mouse = new Vector3();

    const handleDoubleClick = (event) => {
      // Get mouse position normalized (-1 to 1)
      const rect = gl.domElement.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mouse.set(x, y, 0.5);

      // Set up raycaster
      raycaster.setFromCamera({ x, y }, camera);

      // Find intersections
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        const target = intersects[0].object;
        const targetPos = intersects[0].point;

        // Move the camera to look at the object
        camera.position.lerpVectors(camera.position, targetPos.clone().add(new Vector3(0, 1, 5)), 0.5);
        camera.lookAt(target.position);
      }
    };

    gl.domElement.addEventListener('dblclick', handleDoubleClick);
    return () => gl.domElement.removeEventListener('dblclick', handleDoubleClick);
  }, [camera, gl, scene]);

  return null;
}