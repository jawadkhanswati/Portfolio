import CTA from "./CTA"
import "./header.css"
import ME from "../../assets/myimg.png"
import HeaderSocial from "./HeaderSocial"
import {motion} from "framer-motion"

const Header = () => {
  return (
    <header className="-mb-20">
    <motion.div initial={{scale:0.5}} whileInView={{scale:1,transition:{delay:0.1,stiffness:120}}} className=" container header__container">
      <div className="socialpart">
      <HeaderSocial/>
      </div>

      <div className="midpart">
        <div className="textsec">
      <h5 className="sayhello helo">hello I'am</h5>
      <h1 className="myname">Jawad Ahmad</h1>
      <h5 className="text-light sayhello">MERN STACK DEVELOPER</h5>
      <CTA/>
        </div>

      <div className="me ">
        <img src={ME} className="h-[395px] sm:h-[350px] md:h-[380px]  sm:mt-16 mee mt-2 ml-3" alt="" />
      </div>
      </div>

<div className="rightpart">
  <div className="rotate">
      <a href="#contact" className="scroll__down">Scroll Down</a>

  </div>
</div>

    </motion.div>
    </header>
  )
}

export default Header
