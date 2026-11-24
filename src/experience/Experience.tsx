import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { destinations } from '../data/destinations'
import Core from './Core'
import CameraRig from './CameraRig'
import SpatialGrid from './SpatialGrid'

export default function Experience() {
  const [destinationIndex, setDestinationIndex] = useState(0)

  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  const activeDestination = destinations[destinationIndex]

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
    <div className="experience">
      <div className="experience__scene">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          frameloop={reducedMotion ? 'demand' : 'always'}
        >
          <color attach="background" args={['#080b12']} />
          <fog attach="fog" args={['#080b12', 8, 25]} />

          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 4, 5]} intensity={3} />
          <SpatialGrid />

          <Core reducedMotion={reducedMotion} />

          <CameraRig
            destination={activeDestination}
            reducedMotion={reducedMotion}
          />

          <mesh position={[4, 0, 0]} rotation={[0.3, 0.4, 0]}>
            <torusKnotGeometry args={[0.8, 0.25, 96, 16]} />
            <meshStandardMaterial
              color="#b794ff"
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
        </Canvas>
      </div>

      <div className="experience__interface">
        <section aria-live="polite" aria-atomic="true">
          <h2>{activeDestination.title}</h2>
          <p>{activeDestination.description}</p>
        </section>

        <nav aria-label="Destinos del portfolio">
          {destinations.map((destination, index) => (
            <button
              key={destination.id}
              type="button"
              aria-pressed={destinationIndex === index}
              onClick={() => setDestinationIndex(index)}
            >
              {destination.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}