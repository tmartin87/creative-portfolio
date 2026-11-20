import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Core from "./Core";
import CameraRig from "./CameraRig";
import { destinations } from "../data/destinations";

export default function Experience() {
  const [destinationIndex, setDestinationIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updatePreference() {
      setReducedMotion(media.matches);
    }

    updatePreference();
    media.addEventListener("change", updatePreference);

    return () => {
      media.removeEventListener("change", updatePreference);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "70vh" }}>
        <section aria-live="polite" aria-atomic="true">
  <h2>{destinations[destinationIndex].title}</h2>
  <p>{destinations[destinationIndex].description}</p>
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
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        frameloop={reducedMotion ? "demand" : "always"}
      >
        <color attach="background" args={["#080b12"]} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={3} />

        <Core reducedMotion={reducedMotion} />
        <CameraRig
          destination={destinations[destinationIndex]}
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
  );
}
