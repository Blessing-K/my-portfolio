import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "#4B0082" },
        },
        fpsLimit: 120,
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.5, width: 1 },
          move: { enable: true, speed: 1, direction: "none", random: true },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: { min: 1, max: 3 }, random: true },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;
