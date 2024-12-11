import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  // Cargar el modelo desde public/models/computer.glb
  const gltf = useGLTF('/models/computer.glb');
  return <primitive object={gltf.scene} {...props} />;
}

