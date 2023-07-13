import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Text, MeshTransmissionMaterial, OrbitControls, RoundedBox } from '@react-three/drei'

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0.5, 4], fov: 25 }}>
      <color attach="background" args={['#151520']} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <RoundedBox radius={0.075} smoothness={3}>
        <MeshTransmissionMaterial
          backside
          thickness={0.2}
          anisotropy={0.5}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
        />
        <Button position={[0, 0.3, 0.45]}>Game Play</Button>
        <Button rotation={[0, 0, -Math.PI / 2]} position={[0.3, 0, 0.45]}>
          Calendar
        </Button>
        <Button position={[0, -0.3, 0.45]}>Memory Card</Button>
        <Button rotation={[0, 0, Math.PI / 2]} position={[-0.3, 0, 0.45]}>
          Options
        </Button>
      </RoundedBox>
      <OrbitControls />
    </Canvas>
  )
}

function Button({ children, color = 'white', ...props }) {
  const ref = useRef()
  return (
    <Text
      ref={ref}
      color={color}
      onPointerOver={() => ref.current.material.color.set('orange')}
      onPointerOut={() => ref.current.material.color.set(color)}
      font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZs.woff"
      anchorY="middle"
      anchorX="center"
      fontSize={0.09}
      {...props}>
      {children}
    </Text>
  )
}
