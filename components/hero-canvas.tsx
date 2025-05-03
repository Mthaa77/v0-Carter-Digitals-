"use client"

import { useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import type { Group } from "three"
import { useTheme } from "next-themes"

function FloatingObject({ position, scale, rotation, color, speed = 1 }: any) {
  const mesh = useRef<Group>(null)

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2 * speed) * 0.1
      mesh.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1 * speed) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <group ref={mesh} position={position} scale={scale} rotation={rotation}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    </Float>
  )
}

function CursorFollower() {
  const { camera, mouse, viewport } = useThree()
  const group = useRef<Group>(null)

  useFrame(() => {
    if (group.current) {
      const x = (mouse.x * viewport.width) / 2
      const y = (mouse.y * viewport.height) / 2

      group.current.position.x += (x - group.current.position.x) * 0.05
      group.current.position.y += (y - group.current.position.y) * 0.05
    }
  })

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ff6600" emissive="#ff6600" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

function Scene() {
  const { theme } = useTheme()

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Environment preset="city" />

      <FloatingObject position={[3, 1, -5]} scale={[0.8, 0.8, 0.8]} rotation={[0, 0, 0]} color="#ff6600" speed={0.8} />
      <FloatingObject
        position={[-3, -1, -3]}
        scale={[1.2, 0.2, 1.2]}
        rotation={[0, 0.5, 0]}
        color="#ff8800"
        speed={1.2}
      />
      <FloatingObject position={[0, 2, -4]} scale={[0.5, 1.5, 0.5]} rotation={[0.5, 0, 0]} color="#ffaa00" speed={1} />
      <FloatingObject
        position={[-2, -2, -2]}
        scale={[0.7, 0.7, 0.7]}
        rotation={[0.2, 0.3, 0]}
        color="#ff4400"
        speed={1.5}
      />
      <FloatingObject
        position={[2, -1, -3]}
        scale={[0.3, 0.3, 1.5]}
        rotation={[0, 0.2, 0.5]}
        color="#ff9900"
        speed={0.7}
      />

      <CursorFollower />
    </>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }} style={{ width: "100%", height: "100%" }}>
      <Scene />
    </Canvas>
  )
}
