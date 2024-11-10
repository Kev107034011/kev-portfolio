import { educationBackground } from "../constants"
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
                            <p className="grid-headtext">About Me</p>
                            <p className="grid-subtext">I'm a Data Scientist | Analyst with 3 years of experience in the semiconductor industry, dedicated to improving efficiency and quality through data-driven insights.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/robot.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain border-4 rounded-lg border-black-500" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">Skilled in Python, SQL, PowerBI, Statistics, Machine Learning, full-stack development (Django, Flask, React.js, Tailwind CSS, Bootstrap, Html, JavaScript, CSS) and well-versed in team work and Agile methodologies, including Scrum and Git.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h=[326px] h-fit flex justify-center items-center">
                            <CustomGlobe />
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotely across most timezones</p>
                            <p className="grid-subtext">I'm based in Taiwan and open to work worldwide.</p>
                            {/* <Button name="Contact Me" isBeam containerClass="w-full mt-10" /> */}
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        {/* <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" /> */}
                        <p className="grid-headtext text-center">Educational Background</p>
                        <div className="w-full text-white-600">
                            {/* <p className="grid-subtext">I believe that "There's always a better way to increase the quality of my work, my team, and my life." And Coding is such a powerful tool to achieve all that.</p> */
                                <div className="work-content">
                                    <div className="sm:py-2.5 py-2.5 sm:px-5 px-2.5">
                                        {educationBackground.map(({ id, name, pos, icon, duration, title }) => (
                                            <div
                                                key={id}
                                                className="work-content_container group"
                                            >
                                                <div className="flex flex-col h-full justify-start items-center py-2">
                                                    <div className="work-content_logo">
                                                        <img src={icon} alt="logo" className="w-full h-full" />
                                                    </div>
                                                    <div className="work-content_bar" />
                                                </div>
                                                <div className="sm:p-5 px-2.5 py-5">
                                                    <p className="font-bold text-white-800">{name}</p>
                                                    <p className="text-sm">{pos}</p>
                                                    <p className="text-sm mb-2">{duration}</p>
                                                    {/* Render title as a list */}
                                                    <ul className="group-hover:text-white transition ease-in-out duration-500 list-disc list-inside text-sm">
                                                        {title.map((item, index) => (
                                                            <li key={index}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[266px] sm:h-[266px] h-fit object-contain sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-headtext text-center">My Contact Info</p>
                            <div className="flex gap-3 justify-center">
                                <a href="https://www.linkedin.com/in/syuanyi0529/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
                                </a>
                                <a href="https://github.com/Kev107034011" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                                </a>
                                <a href="https://www.instagram.com/kevinleeyee/profilecard/?igsh=cWY2dzQ2bzZqNmxs" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
                                </a>
                            </div>
                            <div className="copy-container" onClick={handleCopy}>
                                {/* <p className="lg:text-sm md:text-xs font-medium text-gray_gradient text-white">Email: iuhfyi25282135@gmail.com</p> */}
                                <p className="grid-subtext">Email: iuhfyi25282135@gmail.com</p>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About