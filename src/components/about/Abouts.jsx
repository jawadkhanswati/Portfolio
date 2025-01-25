import "./about.css"
import ME from "../../assets/pic.png"
import {} from "react-icons"
import { FaAward } from "react-icons/fa"
import { VscFolder, VscFolderLibrary } from "react-icons/vsc"
import {motion} from "framer-motion"

const Abouts = () => {
  
  return (
    <motion.section className="-mb-32 pt-20" initial={{scale:0.6,opacity:0.3}} whileInView={{scale:1,opacity:1,transition:{delay:0.2,stiffness:120}}} id="about">
      <div className="about-top pt-3 ">
      <h5 className="get-go -mb-6">Get to Go</h5>
      <h2 className="about_meheading text-3xl font-bold p-7">About Me</h2>
      </div>
      {
      
      }

      <div className="container about__container">
        <div className="about__me -mt-16 mb-6 sm:mb-0 sm:mt-0 w-[80%]  sm:w-[50vw] md:w-[40%] lg:w-[100%]" >
          <div className="about__me-image lg:w-[100%] lg:h-[100%]">
            <img src={ME} className="w-[80vw]" alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="card1 shadow-md md:w-[30%] shadow-blue-900 hover:shadow-blue-900 hover:shadow-lg">
              <FaAward className="about__icon size-6"/>
              <h5 className="card">Experience</h5>
              <small>1.5+ Years Experience</small>
            </article>

            <article className="card2 shadow-md shadow-blue-900 md:w-[30%] hover:shadow-blue-900">
              <VscFolder className="about__icon size-6"/>
              <h5 className="card">Frontend Projects</h5>
              <small>40+ completed projects</small>
            </article>

            <article className="last-card shadow-md md:w-[30%] shadow-blue-900 hover:shadow-blue-900 md:m-0 md:p-0">
              <VscFolderLibrary className="size-6 about__icon"/>
              <h5 className="card">FullStack Projects</h5>
              <small>10+ Completed Projects </small>
            </article>
          </div>

          <p className="mb-3">Hey, I'm JawadAhmad, a  MERN Stack developer with a strong fundation in programming. My journey in programming began 2 years ago, and I've been dedicated to learning and mastering the MERN stack.</p>

          <div className="btns">
          <a href="#contact" className="btn btn-primary ">Let's Talk</a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Abouts
