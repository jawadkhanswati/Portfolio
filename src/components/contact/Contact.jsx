import { MdOutlineEmail } from "react-icons/md"
import "./contact.css"
import { IoCall } from "react-icons/io5"
import { BsWhatsapp } from "react-icons/bs"
import {motion} from "framer-motion"
import emailjs from 'emailjs-com';
import { useRef, useState } from "react"
import toast from "react-hot-toast"

const Contact = () => {
const form =useRef();

const sendEmail=(e)=>{
  e.preventDefault();
  emailjs.sendForm("service_66gi5qb","template_3ckqa15",form.current,"56ZjX0Mrr9LXVvD9z")
    toast.success("message send successfully")

  e.target.reset()

}
  return (
    <motion.section initial={{scale:0.6,opacity:0.6}} whileInView={{
      opacity:1,scale:1,transition:{delay:0.2,stiffness:120}
    }} id="contact" >
    <h5 className="pt-9 mb-0">Get In Touch</h5>
    <h2 className="mt-3 h-12 mb-2 text-2xl font-bold ">Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options -mt-36 sm:-mt-20 flex sm:gap-3 flex-col sm:flex-row  justify-center w-full">
        <div className="flex flex-col w-full sm:w-[45%] sm:mt-0 mt-14 md:w-[35%] items-center sm:items-start border
        ">

        <article className="contact__option  -mb-16 py-9 flex w-full justify-between items-center  flex-col">
          <MdOutlineEmail className="size-7 mb-3"/>
          <h4 className="font-bold text-xl">Email</h4>
          <h5>jawadahmad5105555@gmail.com</h5>
          <a href="mailto:jawadAhmad5105555@gmail.com">Send a message</a>
        </article>
        <article className="contact__option -mb-16 py-9 flex w-full justify-between items-center  flex-col">
          <IoCall className="size-7 mb-3"/>
          <h4 className="text-xl font-bold">Contact Number</h4>
          <h5>NO: 03341103481</h5>
          <a href="mailto:jawadAhmad5105555@gmail.com">Send a message email</a>
        </article>
        <article className="contact__option py-9 mb-5 flex w-full justify-between items-center  flex-col">
          <BsWhatsapp className="size-7 mb-3"/>
          <h4 className="text-xl font-bold">WhatsApp</h4>
          <h5>Contact me on WhatsApp</h5>
          <a href="https://api.whatsapp.com/send?03170545835" target="blank">text message in whatsapp</a>
        </article>
        </div>

        {/* form */}
        <form ref={form} onSubmit={sendEmail} className="flex w-full sm:mt-24 h-[40%] text-white sm:w-[65%] flex-col justify-center gap-5 rounded-lg bg-transparent p-8">
          <input type="text" className="input bg-transparent  p-4 rounded-xl" name="name" placeholder="Your Full Name" required />
          <input type="text" name="email" className="bg-transparent input rounded-xl p-4" placeholder="Your Email" required/>
          <textarea name="message" rows={7} className="rounded-xl bg-transparent p-4  input" placeholder="Your Message" required id=""></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

      </div>
    </div>
    </motion.section>
  )
}

export default Contact
