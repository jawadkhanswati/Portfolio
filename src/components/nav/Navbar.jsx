import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import "./navbar.css"
import {} from "react-icons"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="mainav">
      <nav className="nav">
        
        <a className="first" href="#"><AiOutlineHome/>
        <p className="text text-xs">home</p>
        </a>
      
        <a href="#about"><AiOutlineUser/>
        <p className="text text-xs">About</p>
        </a>

        <a href="#experience"><BiBook/>
        <p className="text text-xs">Experience</p>
        </a>

        <a href="#services"><BiBook/>
        <p className="text text-xs">service</p>
        </a>
        <a href="#portfolio"><BiBook/>
        <p className="text text-xs">Portfolio</p>
        </a>

        <a className="last" href="#contact"><BiMessageSquareDetail/>
        <p className="text text-xs">Contact</p>
        </a>
      </nav>
      </div>
    </div>
  )
}

export default Navbar
