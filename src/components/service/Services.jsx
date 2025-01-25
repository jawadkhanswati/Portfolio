import "../service/service.css"
import { BiCheck } from 'react-icons/bi'
import {motion} from "framer-motion"

const Services = () => {
  return (
    <motion.section initial={{scale:0.6,opacity:0.6}}
    whileInView={{scale:1 ,opacity:1,transition:{stiffness:120,delay:0.2}}} className='pt-44 leading-3 -mt-0' id="services">
    
    <h5 className='texts leading-3 mb-5 offer'>What I Offer</h5>
    <h2 className='text-4xl leading-3 sm:md-7 md:mb-0 font-bold serviceheading texts'>Services</h2>
    <div className='container flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4 items-center service__container '>

      <article className='w-full -mb-16 sm:-mb-156 md:mb-0 md:w-[50%] lg:w-[50%]'>
        <div className='p-12 shadow-md shadow-gray-900 w-full bg-cyan-600 rounded-b-2xl mb-6  text-center'>
          Front-end Development
        </div>
        <li className='flex gap-3 mb-3'>
          <BiCheck/>
          <p className='leading-6'>Reactjs, and html, css, vinillaJS development.</p>
        </li>
        <li className='flex gap-3 mb-3'>
          <BiCheck/>
          <p className='leading-6'>Mobile-first and responsive design.</p>
        </li>
        <li className='flex gap-3 mb-3'>
          <BiCheck/>
          <p className='leading-6'>Animated Responsive Websites.</p>
        </li>
        <li className='flex gap-3 mb-3'>
          <BiCheck/>
          <p className='leading-6'>UI/UX design and development.</p>
        </li>
        <li className='flex gap-3 mb-3'>
          <BiCheck/>
          <p className='leading-6'>Accessibility and usability optimization.</p>
        </li>
        <li className='flex gap-3 mb-3'>
          <BiCheck/>
          <p className='leading-6'>Full stack MERN development.</p>
        </li>
      </article>

      <article className='w-full md:w-[50%] lg:w-[50%]'>
        <div className='p-12 rounded-b-2xl shadow-md shadow-gray-900 w-full bg-cyan-600  mb-6 text-center'>
          Back-end Development
        </div>

        <li className='flex gap-3 mb-3'>
          <BiCheck/>
          <p className='leading-6'>Node.js, Express.js, and MongoDB development</p>
        </li>
        <li className='flex gap-3 mb-3'>
          <BiCheck/>
          <p className='leading-6'>Create Secure Authentication with JWT and OAuth</p>
        </li>
        <li className='flex gap-3'>
          <BiCheck/>
          <p className='leading-6 mb-3'>Restful Api design and development.</p>
        </li>
        <li className='flex gap-3 mb-3'>
          <BiCheck/>
          <p className='leading-6'>Server-side redering and optimization.</p>
        </li>
        <li className='flex gap-3 mb-3'>
          <BiCheck/>
          <p className='leading-6'>Database design and managment.</p>
        </li>
        <li className='flex gap-3 mb-3'>
          <BiCheck/>
          <p className='leading-6'>Full stack MERN development.</p>
        </li>
      
      </article>
      </div>
     
    </motion.section>
  )
}

export default Services
