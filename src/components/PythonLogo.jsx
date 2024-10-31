/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: AnshiNoWara (https://sketchfab.com/AnshiNoWara)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/python-8be4a2579dd84586b915068e475073ee
Title: Python
*/

import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { Color } from 'three'

const PythonLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/python.glb')

    // Adjust material properties for a lighter appearance
    materials.Python.color = new Color(0xeeeeff) // Light pastel color
    // materials.Python.emissive = new Color(0x4444ff) // Soft blue emissive glow
    materials.Python.emissiveIntensity = 0.5 // Adjust emissive intensity for more glow

    return (
        <Float floatIntensity={5}>
            <group {...props} dispose={null} scale={0.005}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Python_Python_0.geometry}
                    material={materials.Python}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={5}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/python.glb')

export default PythonLogo