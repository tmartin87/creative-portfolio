import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { AdditiveBlending } from "three";

type CoreProps = {
  reducedMotion: boolean;
};

export default function Core({ reducedMotion }: CoreProps) {
  const meshRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (reducedMotion || !meshRef.current) return;

    meshRef.current.rotation.y += Math.min(delta, 0.1) * 0.2;
  });

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

        <meshBasicMaterial
          color="#163b45"
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
