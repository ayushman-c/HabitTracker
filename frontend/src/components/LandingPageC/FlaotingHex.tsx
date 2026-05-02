import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Edges } from "@react-three/drei"
import * as THREE from "three"

const FloatingHex: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null!)

    useFrame(() => {
        if (!meshRef.current) return
        meshRef.current.rotation.y += 0.003
        meshRef.current.rotation.x += 0.0015
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef}>

                <cylinderGeometry args={[1.2, 1.2, 0.6, 6]} />


                <meshBasicMaterial transparent opacity={0} />

                <Edges
                    scale={1.01}
                    threshold={15}
                    color="#2D5BFF"
                />
            </mesh>
        </Float>
    )
}

export default FloatingHex