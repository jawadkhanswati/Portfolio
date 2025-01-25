import { BsPatchCheckFill } from "react-icons/bs"
import "./experience.css"
import {motion} from "framer-motion"

const Experience = () => {
  return (
    <motion.section className="pt-24 -mb-16" initial={{scale:0.6,opacity:0.6}} whileInView={{scale:1,opacity:1,
     transition:{delay:0.2,stiffness:120}}} id="experience">
      <h5 className="skills-have">What Skills I Have</h5>
      <h2 className=" whatskill">My Experience</h2>

      <div className="container experience__container flex lg:flex-row sm:flex-col flex-col">

        {/*======== FRONTEND EXPERIENCE ==========*/}
        <div className="experience__frontend  md:w-full lg:w-[45%] sm:w-full sm:flex w-full">
          <h3>Frontend Development</h3>
          <div className="experience__content md:grid md:grid-cols-4 md:-mt-12 lg:grid lg:grid-cols-2 ">
            <article className="experience__details">
              <div className="row-icon">
              <BsPatchCheckFill/>
              <h4>HTML</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <div className="row-icon">
              <BsPatchCheckFill/>
              <h4>CSS</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <div className="row-icon">
              <BsPatchCheckFill/>
              <h4>JAVASCRIPT</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <div className="row-icon">
              <BsPatchCheckFill/>
              <h4>TYPESCRIPT</h4>
              </div>
              <small className="text-light">BASICS</small>
            </article>
            <article className="experience__details">
              <div className="row-icon">
              <BsPatchCheckFill/>
              <h4>REACT</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <div className="row-icon">
              <BsPatchCheckFill/>
              <h4>TAILWINDCSS</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <div className="row-icon">
              <BsPatchCheckFill/>
              <h4>BOOTSTRAP</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
           
            <article className="experience__details">
            <div className="row-icon">
              <BsPatchCheckFill/>
              <h4>FramerMotion</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>

        {/*======== BACKEND EXPERIENCE ==========*/}
        <div className="experience__backend md:w-full lg:w-[45%] sm:w-full w-full">
          <h3>BACKEND Development</h3>
          <div className="experience__content md:grid md:grid-cols-3 md:-mt-12 lg:grid-cols-2">
            <article className="experience__details">
            <div className="row-icon">
              <BsPatchCheckFill/>
              <h4>EXPRESS.JS</h4>
                </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
            <div className="row-icon">
              <BsPatchCheckFill/>
              <h4>NODE.JS</h4>
                </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
            <div className="row-icon">
              <BsPatchCheckFill/>
              <h4>MONGODB</h4>
                </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
            <div className="row-icon">
              <BsPatchCheckFill/>
              <h4>WEBSOCKETS</h4>
                </div>
              <small className="text-light">Experienced</small>
            </article>
           
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Experience
