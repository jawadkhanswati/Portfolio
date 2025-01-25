import { Link } from "react-router-dom"
import { backendprojects, frontendproject } from "./portfoiodata"
import "./portfolio.css"
import {motion} from "framer-motion"

const Portfolio = () => {
 
  return (
    <motion.section initial={{scale:0.6,opacity:0.6}} whileInView={{scale:1,opacity:1,transition:{delay:0.2,stiffness:120}}} id="portfolio" className="mt-14 flex flex-col">
      <h5 className="-mb-12 sm:mb-7">My Recent Work</h5>
      <h2 className="-mb-24">Portfolio</h2>
      <div className="container portfolio__container grid grid-cols-2 gap-3 sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-4  pt-16">
        {
          frontendproject.map((ele)=>(
          
        <article key={ele.id} className="portfolio__item w-full px-3 py-3 md:py-5 -mb-14 flex flex-col justify-center">
          <div className="portfolio__item-image">
            <img className="w-full bg-cover rounded-md sm:h-32 h-24" src={ele.image} alt="" />
          </div>
          <h3 className="text-xs md:text-md pt-3 ">{ele.title}</h3>
          <div className="porttitle"></div>
          <div className=" mt-3 border border-red-800 w-full flex justify-center gap-2 md:gap-4">
            <a href={ele.github} className="border-blue-700 px-1 rounded-md flex items-center githublink h-9">Github</a>
            <a href={ele.url} target="blank" className=" btn-primary md:text-sm h-9 text-xs flex items-center rounded-md px-1">LiveDemo</a>
          </div>
        </article>

           
          ))
        }
      </div >
      
      <div className="mt-36 mx-4 md:mx-8 lg:mx-10">
     <h3 className="text-center font-bold -mb-16 sm:- md:-mb-9 text-3xl">Full stack Projects</h3>
     <div className="container portfolio__container grid grid-cols-2 gap-3 sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-4  ">
        {
          backendprojects.map((ele)=>(
        <article key={ele.id} className="portfolio__item w-full px-3 py-3 md:py-5 -mb-16 flex flex-col justify-center">
          {
            ele?.showcaseimg&&(
          <div className="portfolio__item-image">
            <img className="w-full bg-cover rounded-md sm:h-32 h-24" src={ele.showcaseimg} alt="" />
          </div>

            )
          }
          <h3 className="text-xs md:text-md pt-3 ">{ele.title}</h3>
          <div className="porttitle"></div>
          <div className=" mt-3 border border-red-800 text-xs w-full flex justify-center gap-3 md:gap-4">
            <a href={ele.url} className="border-blue-700 px- rounded-md flex items-center githublink px-3 h-9">Github</a>
         
            <Link to={`/product/backend/demo/details/${ele.id}`} onClick={()=>{
            localStorage.setItem("prodct",JSON.stringify(ele))
            }
              } className=" btn-primary md:text-sm h-9 text-xs flex items-center rounded-md px-1">SeeDetails</Link>
         
          </div>
        </article>

           
          ))
        }
      </div >
      </div>
        
    </motion.section>
  )
}

export default Portfolio
