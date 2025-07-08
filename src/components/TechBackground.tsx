import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#667eea"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function GeometricShapes() {
  const mesh1 = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);
  const mesh3 = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh1.current) {
      mesh1.current.rotation.x = state.clock.elapsedTime * 0.3;
      mesh1.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (mesh2.current) {
      mesh2.current.rotation.x = state.clock.elapsedTime * 0.4;
      mesh2.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
    if (mesh3.current) {
      mesh3.current.rotation.y = state.clock.elapsedTime * 0.5;
      mesh3.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });
  
  return (
    <>
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={mesh1} position={[-4, 2, -8]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#764ba2"
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      </Float>
      
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={mesh2} position={[4, -2, -10]}>
          <octahedronGeometry args={[1.5]} />
          <meshStandardMaterial
            color="#f093fb"
            transparent
            opacity={0.2}
            wireframe
          />
        </mesh>
      </Float>
      
      <Float speed={1.2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={mesh3} position={[0, 3, -12]}>
          <tetrahedronGeometry args={[1.2]} />
          <meshStandardMaterial
            color="#4facfe"
            transparent
            opacity={0.25}
            wireframe
          />
        </mesh>
      </Float>
    </>
  );
}

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });
  
  const nodes = useMemo(() => {
    const nodePositions = [];
    for (let i = 0; i < 20; i++) {
      nodePositions.push([
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8
      ]);
    }
    return nodePositions;
  }, []);
  
  return (
    <group ref={groupRef}>
      {nodes.map((position, index) => (
        <Float key={index} speed={1 + index * 0.1} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={position as [number, number, number]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial
              color="#f5576c"
              transparent
              opacity={0.6}
              emissive="#f5576c"
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function TechBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#667eea" />
        
        <Particles />
        <GeometricShapes />
        <NeuralNetwork />
      </Canvas>
    </div>
  );
}