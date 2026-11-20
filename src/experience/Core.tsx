import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

type CoreProps = {
  reducedMotion: boolean
}

export default function Core({ reducedMotion }: CoreProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (reducedMotion || !meshRef.current) return

    meshRef.current.rotation.y += Math.min(delta, 0.1) * 0.2
  })

  return (
    <mesh ref={meshRef} rotation={[0.4, 0.6, 0]}>
      <icosahedronGeometry args={[1.4, 0]} />
      <meshStandardMaterial
        color="#65e8dc"
        metalness={0.5}
        roughness={0.3}
        flatShading
      />
    </mesh>
  )
}