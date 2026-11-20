import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'

type CameraRigProps = {
  reducedMotion: boolean
}

export default function CameraRig({ reducedMotion }: CameraRigProps) {
  useFrame(({ camera, pointer }, delta) => {
    if (reducedMotion) return

    const safeDelta = Math.min(delta, 0.1)

    camera.position.x = MathUtils.damp(
      camera.position.x,
      pointer.x * 0.4,
      4,
      safeDelta,
    )

    camera.position.y = MathUtils.damp(
      camera.position.y,
      pointer.y * 0.25,
      4,
      safeDelta,
    )

    camera.lookAt(0, 0, 0)
  })

  return null
}