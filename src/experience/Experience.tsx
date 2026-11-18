import { Canvas } from '@react-three/fiber'

export default function Experience() {
  return (
    <div style={{ width: '100%', height: '70vh' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={['#080b12']} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={3} />

        <mesh rotation={[0.4, 0.6, 0]}>
          <icosahedronGeometry args={[1.4, 0]} />
          <meshStandardMaterial
            color="#65e8dc"
            metalness={0.5}
            roughness={0.3}
            flatShading
          />
        </mesh>
      </Canvas>
    </div>
  )
}