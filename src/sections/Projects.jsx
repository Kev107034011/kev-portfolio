import { myProjects } from "../constants"

const Project = () => {

    return (
        <section className="c-space my-20">
            <p className="head-text">My Work</p>
            <div className="grid lg:grid-cols-2 grid-col-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <img src={myProjects[0].spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl"/>

                </div>

            </div>

        </section>
    )
}

export default Project