import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
// import { Leva, useControls } from "leva";

import { HackerRoom } from "../components/HackerRoom";
import { Cat } from "../components/Cat";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import CoffeeMachine from "../components/CoffeeMachine";
import PythonLogo from "../components/PythonLogo";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    const isShortScreen = useMediaQuery({ maxHeight: 900 })
    const sizes = calculateSizes(isSmall, isMobile, isTablet, isShortScreen)

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I'm Kev<span className="waving-hand" style={{ marginRight: '20px' }}>👋</span>
                    I have <span className="font-bold">3<sup>+</sup></span> years of experience as
                </p>
                <p className="hero_tag text-gray_gradient">Data Analyst | Scientist </p>
                <p className="text-center text-yellow-200 text-base">... and learn Web Development & Brewing Coffee for fun :D</p>
            </div>

            <div className="w-full h-full absolute inset-0 pt-10">
                {/* <Leva /> */}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <HeroCamera>
                            <HackerRoom
                                position={sizes.deskPosition}
                                rotation={[0.3, -Math.PI, 0]}
                                scale={sizes.deskScale} />
                            <Cat
                                position={sizes.catPosition}
                                rotation={[1.1, 0, 0]}
                                scale={6.5} />
                        </HeroCamera>
                        <PerspectiveCamera makeDefault position={[0, 0, 23]} />
                        <ambientLight intensity={1} />
                        <directionalLight intensity={3} position={[10, 10, 10]} />
                        {/* Enable OrbitControls */}
                        <OrbitControls
                            enableZoom
                            enableRotate
                            enablePan={false}
                            minPolarAngle={Math.PI / 4}   // Restrict vertical rotation
                            maxPolarAngle={Math.PI / 1.8}   // Prevent looking underneath
                        />
                        <group>
                            <CoffeeMachine
                                position={sizes.coffeeMachinePosition}
                                scale={8.4}
                                rotation={[0, -0.8, -0.4]} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <PythonLogo position={sizes.pythonPosition} />
                            <Cube position={sizes.cubePosition} />
                        </group>
                    </Suspense>
                </Canvas>
                <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                    <a href="#about" className="w-fit">
                        <Button name="Let's see more detail" isBeam containerClass="sm:w-fit w-full sm:min-w-96 opacity-75 hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero



// {/* for testing */}
// import { Leva, useControls } from "leva";
// const x = useControls('HackerRoom', {
//     positionX: {
//         value: 2.5,
//         min: -10,
//         max: 10
//     },
//     positionY: {
//         value: 2.5,
//         min: -10,
//         max: 10
//     },
//     positionZ: {
//         value: 2.5,
//         min: -10,
//         max: 10
//     },
//     rotationY: {
//         value: 0,
//         min: -10,
//         max: 10
//     },
//     rotationZ: {
//         value: 0,
//         min: -10,
//         max: 10
//     },
//     rotationX: {
//         value: 0,
//         min: -10,
//         max: 10
//     },
//     scale: {
//         value: 1,
//         min: 0.1,
//         max: 10
//     }
// })
//  {/* <Leva /> */}
// <HackerRoom
// position={[x.positionX, x.positionY, x.positionZ]}
// rotation={[x.rotationX, x.rotationY, x.rotationZ]}
// scale={[x.scale, x.scale, x.scale]} />