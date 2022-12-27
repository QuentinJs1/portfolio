import { useTexture, useGLTF, OrbitControls } from '@react-three/drei'
import { button, useControls } from 'leva'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'

export default function Experience() {

    const { perfVisible } = useControls({
        perfVisible: true
    })

    const model = useGLTF('./models/assembly-line-test.glb')

    return <>

        {perfVisible ? <Perf position="top-left" /> : null}

        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <primitive object={model.scene} scale={0.5} position-y={-1} />

    </>
}