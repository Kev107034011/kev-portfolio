import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { HackerRoom } from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";

const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768})
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    const isShortScreen = useMediaQuery({maxHeight:900})

    const sizes = calculateSizes(isSmall, isMobile, isTablet, isShortScreen)
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I'm Kevin<span className="waving-hand" style={{ marginRight: '20px' }}>👋</span>
                    I have <span className="font-bold">3<sup>+</sup></span> years experience as
                </p>
                <p className="hero_tag text-gray_gradient">Data Analyst | Scientist</p>
                <p className="text-center text-yellow-200 text-base">... and learn Web Development for fun :D</p>
            </div>


            <div className="w-full h-full absolute inset-0 pt-10">
                {/* <Leva /> */}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <group>
                            <Target position={sizes.targetPosition}/>
                        </group>
                        <HackerRoom
                            position={sizes.deskPosition}
                            rotation={[0.3, -Math.PI, 0]}
                            scale={sizes.deskScale} />

                        <ambientLight intensity={1} />
                        <directionalLight intensity={3} position={[10, 10, 10]} />
                    </Suspense>
                </Canvas>
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

// <HackerRoom
// position={[x.positionX, x.positionY, x.positionZ]}
// rotation={[x.rotationX, x.rotationY, x.rotationZ]}
// scale={[x.scale, x.scale, x.scale]} />