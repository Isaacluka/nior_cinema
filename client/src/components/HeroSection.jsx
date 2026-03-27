// "use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function HeroSection() {
  const canvasRef = useRef(null);
  const beamsRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // const dpr = window.devicePixelRatio || 1;

      // canvas.width = window.innerWidth * dpr;
      // canvas.height = window.innerHeight * dpr;

      // canvas.style.width = window.innerWidth + "px";
      // canvas.style.height = window.innerHeight + "px";

      // ctx.scale(dpr, dpr);

      beamsRef.current = Array.from({ length: 10 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: 80 + Math.random() * 100,
        length: canvas.height * 1.5,
        speed: 0.5 + Math.random(),
        opacity: 0.15 + Math.random() * 0.15,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    function drawBeam(beam) {
      const gradient = ctx.createLinearGradient(
        beam.x,
        beam.y,
        beam.x,
        beam.y + beam.length
      );

      gradient.addColorStop(0, "rgba(0,0,0,.7)");
      gradient.addColorStop(0.5, `rgba(0,0,0,${beam.opacity})`);
      gradient.addColorStop(1, "rgba(0,0,0,.7)");

      ctx.fillStyle = gradient;
      ctx.fillRect(beam.x, beam.y, beam.width, beam.length);
    }
    
    let lastTime = 0;

    function animate(time) {
      if (!ctx) return;

      if (time - lastTime < 33) { // ~30fps
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = "blur(20px)";

      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed;

        if (beam.y + beam.length < 0) {
          beam.y = canvas.height;
          beam.x = Math.random() * canvas.width;
        }

        drawBeam(beam);
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative h-screen -mb-6 -pb-6 w-full overflow-hidden bg-dark">

      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 bg-red-500" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Film grain */}
      {/* <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" /> */}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stream African Stories
          <br />
          {/* <span className="text-primary">
            Anywhere in the World
          </span> */}
          <motion.span 
                    style={{overflow: "hidden", whiteSpace: "nowrap", display: "inline-block"}}
                    initial={{ clipPath: "inset(0 100% 0 0)", filter: "blur(3px)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)", filter: "blur(0px)" }}
                    transition={{ duration: 2, ease: "easeInOut"}}
                    className="text-primary italic">{"  "}Anywhere <br /> in the World
                    <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        >
                        |
                    </motion.span>
                </motion.span> 

        </motion.h1>
         
        <motion.p
          className="mt-6 max-w-2xl text-lg md:text-xl text-white/60"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Connecting filmmakers to global audiences without borders.
        </motion.p>

        <motion.div
          className="mt-10 flex md:flex-row gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* block w-full bg-primary hover:primary/90 text-white  py-4 rounded transition-color tracking-[0.2em] active:scale-95 shadow-lg shadow-primary/20' */}
          <button className="px-10 py-4 bg-primary block font-medium text-white rounded hover:bg-primary/90 transition tracking-[0.2em]">
            Join Waitlist
          </button>

          <button className="px-10 py-4 border border-white/30 font-medium text-white rounded hover:bg-white/10 transition tracking-[0.2em]">
            Watch Demo
          </button>
        </motion.div>

      </div>
    </div>
  );
}