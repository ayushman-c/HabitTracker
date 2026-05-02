import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion"
import React, { useRef } from "react"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"
import FloatingHex from "./FlaotingHex"


const FloatingCube: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += 0.002
    meshRef.current.rotation.y += 0.003
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.6, 1.6, 1.6]} />


        <meshPhysicalMaterial
          color="#2D5BFF"
          roughness={0.2}
          metalness={0.6}
          transmission={0.3}   // glass effect
          thickness={1}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>
    </Float>
  )
}

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const yText = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  }

  const item = {
    hidden: { opacity: 0, y: 50, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#F8F8F8]"
    >

      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>


      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[11px] font-mono text-black/10"
            style={{ left: `${i * 10}%` }}
            animate={{ y: ["-20%", "120%"] }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.4,
            }}
          >
            {`010101
build()
focus()`}
          </motion.div>
        ))}
      </div>


      <div className="absolute inset-0 z-[2] pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>

          <ambientLight intensity={0.4} />

          <directionalLight position={[3, 3, 5]} intensity={1} />
          <pointLight position={[-3, -2, 5]} intensity={0.6} />

          {/* subtle blue glow */}
          <pointLight position={[0, 0, 2]} intensity={1} color="#2D5BFF" />

          <FloatingHex />
        </Canvas>
      </div>


      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        style={{ y: yText, opacity }}
        className="relative z-10 flex justify-center items-center min-h-screen px-5"
      >
        <div className="flex flex-col items-center text-center gap-5 max-w-4xl">


          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 border-[2.5px] border-black px-4 py-1.5 font-extrabold text-xs tracking-[0.2em] uppercase"
            style={{ background: "#E0FF00" }}
          >
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-blue-500"
              animate={{
                scale: [0.9, 1.2, 0.9],
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            STATUS : UNSTOPPABLE
          </motion.div>


          <div
            className="font-black leading-none"
            style={{ fontSize: "clamp(40px, 10vw, 100px)" }}
          >
            <motion.div variants={item}>BUILD</motion.div>

            <motion.div
              variants={item}
              className="relative text-[#2D5BFF] overflow-hidden"
            >
              <span className="relative z-10">UNSTOPPABLE</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>

            <motion.div variants={item}>MOMENTUM</motion.div>
          </div>


          <motion.p
            variants={item}
            className="font-bold text-[#5c6370] max-w-md"
          >
            MODULAR HABIT TRACKING SYSTEM DESIGNED FOR DISCIPLINE.
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-col md:flex-row gap-4 mt-6"
          >
            <a href="#concluding">
              <div
                className="border-[2.5px] border-black px-8 py-3 text-white bg-[#2D5BFF]
      shadow-[5px_5px_0_0_#000]
      hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000]
      transition-all duration-300 font-extrabold tracking-wider cursor-pointer"
              >
                INITIALIZE CORE
              </div>
            </a>

            <a href="#concluding">
              <div
                className="border-[2.5px] border-black px-8 py-3 text-black bg-white
      shadow-[5px_5px_0_0_#000]
      hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000]
      transition-all duration-300 font-extrabold tracking-wider cursor-pointer"
              >
                VIEW SYSTEMS
              </div>
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}

export default Hero