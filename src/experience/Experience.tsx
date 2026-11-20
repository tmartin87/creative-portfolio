import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Core from './Core'

export default function Experience() {
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')

    function updatePreference() {
      setReducedMotion(media.matches)
    }

    updatePreference()
    media.addEventListener('change', updatePreference)

    return () => {
      media.removeEventListener('change', updatePreference)
    }
  }, [])

  return (
    <div style={{ width: '100%', height: '70vh' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        frameloop={reducedMotion ? 'demand' : 'always'}
      >
        <color attach="background" args={['#080b12']} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={3} />

        <Core reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}