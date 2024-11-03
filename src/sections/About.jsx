import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"
import CustomGlobe from "../components/CustomGlobe"

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('iuhfyi25282135@gmail.com')
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 1500)
    }

    return (
        <section className="c-space my=20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-row-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            {/* <p className="grid-headtext">"There's always a better way to increase the quality of my work, my team, and my life.”</p> */}
                            <p className="grid-headtext">About Me</p>
                            <p className="grid-subtext">I'm a Data Scientist/Analyst with 3 years of experience in the semiconductor industry, dedicated to improving efficiency and quality through data-driven insights."</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">Skilled in Python, SQL, PowerBI, Statistics, Machine Learning, full-stack development (Django, Flask, React, Tailwind.css, Bootstrap Html, javascript, css) and well-versed in team work and Agile methodologies, including Scrum and Git.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h=[326px] h-fit flex justify-center items-center">
                            <CustomGlobe />
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotely across most timezones</p>
                            <p className="grid-subtext">I'm based in Taiwan, with remote work available.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">I loving solving problems and building things things through code. Coding isn't just my profession - it is my passion.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">My Info</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-sm md:text-xs font-medium text-gray_gradient text-white">iuhfyi25282135@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About