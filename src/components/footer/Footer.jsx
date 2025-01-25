import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="flex h-72 pb-32 bg-black flex-col ">
      <div className="text-center  p-4 ">
      <a href="#" className="text-center text-xl font-bold">JD Mern Developer</a>

      </div>
      <div className="grid grid-cols-3 gap-x-[3rem] md:gap-x-32 m-auto">
      <a href="#" className="# cursor-pointer text-gray-400 hover:text-blue-400">Home</a>
      <a href="#about" className=" cursor-pointer text-gray-400 hover:text-blue-400">About</a>
      <a href="#experience" className="#experience cursor-pointer text-gray-400 hover:text-blue-400">Experience</a>
      <a href="#services" className="#services cursor-pointer text-gray-400 hover:text-blue-400">Services</a>
      <a href="#portfolio" className="#portfolio cursor-pointer text-gray-400 hover:text-blue-400">portfolio</a>
      <a href="#contact" className="#contack cursor-pointer text-gray-400 hover:text-blue-400">Contact</a>

      </div>

      <div className="social flex gap-3 mt-3 justify-center">
        <a href="http://facebook.com"><BsWhatsapp/></a>
        <a href="http://instagram.com"><BsInstagram/></a>
        <a href="http://twitter.com"><BsTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer
