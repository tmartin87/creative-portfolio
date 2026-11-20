import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MathUtils, Vector3 } from 'three'
import gsap from 'gsap'
import type { Destination } from '../data/destinations'

type CameraRigProps = {
  destination: Destination
  reducedMotion: boolean
}

export default function CameraRig({
  destination,
  reducedMotion,
}: CameraRigProps) {
  const invalidate = useThree((state) => state.invalidate)

  const position = useRef(new Vector3(...destination.cameraPosition))
  const target = useRef(new Vector3(...destination.lookAt))
  const offset = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const [x, y, z] = destination.cameraPosition
    const [targetX, targetY, targetZ] = destination.lookAt

    if (reducedMotion) {
      position.current.set(x, y, z)
      target.current.set(targetX, targetY, targetZ)
      offset.current.x = 0
      offset.current.y = 0

      invalidate()
      return
    }

    const timeline = gsap.timeline({
      defaults: {
        duration: 1.8,
        ease: 'power2.inOut',
      },
    })

    timeline.to(position.current, { x, y, z }, 0)

    timeline.to(
      target.current,
      { x: targetX, y: targetY, z: targetZ },
      0,
    )

    return () => {
      timeline.kill()
    }
  }, [destination, reducedMotion, invalidate])

  useFrame(({ camera, pointer }, delta) => {
    const safeDelta = Math.min(delta, 0.1)

    offset.current.x = reducedMotion
      ? 0
      : MathUtils.damp(
          offset.current.x,
          pointer.x * 0.4,
          4,
          safeDelta,
        )

    offset.current.y = reducedMotion
      ? 0
      : MathUtils.damp(
          offset.current.y,
          pointer.y * 0.25,
          4,
          safeDelta,
        )

    camera.position.set(
      position.current.x + offset.current.x,
      position.current.y + offset.current.y,
      position.current.z,
    )

    camera.lookAt(target.current)
  })

  return null
}