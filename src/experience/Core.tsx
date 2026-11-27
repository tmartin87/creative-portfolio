import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { AdditiveBlending, Color } from 'three'
import type { Group } from 'three'
import {
  holographicVertexShader,
  holographicFragmentShader,
} from '../shaders/holographic'
type CoreProps = {
  reducedMotion: boolean
}

export default function Core({ reducedMotion }: CoreProps) {
  const meshRef = useRef<Group>(null)

  const [uniforms] = useState(() => ({
    uColor: { value: new Color('#65e8dc') },
    uTime: { value: 0 },
  }))

  useFrame((_, delta) => {
    if (reducedMotion || !meshRef.current) return

    const safeDelta = Math.min(delta, 0.1)

    meshRef.current.rotation.y += safeDelta * 0.2
    uniforms.uTime.value += safeDelta
  })

  return (
    <group ref={meshRef} rotation={[0.4, 0.6, 0]}>
      <mesh>
        <icosahedronGeometry args={[1.4, 0]} />

        <meshBasicMaterial
          color="#65e8dc"
          wireframe
          transparent
          opacity={0.65}
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </mesh>

      <mesh scale={0.96}>
        <icosahedronGeometry args={[1.4, 0]} />

        <shaderMaterial
          vertexShader={holographicVertexShader}
          fragmentShader={holographicFragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </mesh>
    </group>
  )
}