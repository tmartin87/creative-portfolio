
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Points } from 'three'

type ParticlesProps = {
  reducedMotion: boolean
}

export default function Particles({ reducedMotion }: ParticlesProps) {
  const pointsRef = useRef<Points>(null)
  const [positions] = useState(() => {
    const coordinates = new Float32Array(180 * 3)

    for (let i = 0; i < coordinates.length; i += 3) {
      coordinates[i] = (Math.random() - 0.5) * 24 + 2
      coordinates[i + 1] = Math.random() * 10 - 1.5
      coordinates[i + 2] = (Math.random() - 0.5) * 20
    }

    return coordinates
  })
  useFrame((_, delta) => {
  if (reducedMotion || !pointsRef.current) return

  pointsRef.current.rotation.y += Math.min(delta, 0.1) * 0.015
})

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#8abfc8"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  )
}