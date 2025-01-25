import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"


const ProductShow = () => {
   const product=JSON.parse(localStorage.getItem("prodct"))
    const clearingstorage=()=>{
      localStorage.removeItem("prodct")
    }
  return (
    <>
    <Link to={"/"} className="text-white hover:text-blue-300">
    <div onClick={clearingstorage} className="fixed mx-2 sm:mx-2 md:mx-3 lg:mx-7 -mt-3"><FaArrowLeft className="size-5 md:size-7"/></div>
    </Link>
    <div className="text-center font-bold text-2xl mt-5">{product.title}</div>
    <div className="text-center font-bold text-lg mt-5">Click Image To View - Scroll Down To View Details</div>
    <div className="text-center">
      <a href={product?.url} className="text-md hover:text-blue-400 mt-4 bg-blue-700 px-7 py-1 text-white rounded-full">View Github Profile</a>
    </div>
    
     <div className="container portfolio__container grid grid-cols-2 gap-3 sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-4  pt-1">
          
           
             {
                product?.loginimg&&(
           <article  className="portfolio__item w-full px-3 py-3 md:py-5 -mb-14 flex flex-col justify-center">
            <a target="blank" href={product.loginimg}>

             <div className="portfolio__item-image">
               <img className="bg-cover rounded-md sm:h-32 h-24" src={product.loginimg} alt="" />
             </div>
             <h3 className="text-xs md:text-md pt-3 ">{product.logintitle}</h3>
            </a>
         
           </article>

                )
             }
             {
                product?.signupimg&&(
           <article  className="portfolio__item w-full px-3 py-3 md:py-5 -mb-14 flex flex-col justify-center">
            <a target="blank" href={product.signupimg}>

             <div className="portfolio__item-image">
               <img className="w-full bg-cover rounded-md sm:h-32 h-24" src={product.signupimg} alt="" />
             </div>
             <h3 className="text-xs md:text-md pt-3 ">{product.signuptitle}</h3>
            
            </a>
         
           </article>

                )
             }
             {
                product?.homeimg&&(
           <article  className="portfolio__item w-full px-3 py-3 md:py-5 -mb-14 flex flex-col justify-center">
            <a target="blank" href={product.homeimg}>

             <div className="portfolio__item-image">
               <img className="w-full bg-cover rounded-md sm:h-32 h-24" src={product.homeimg} alt="" />
             </div>
             <h3 className="text-xs md:text-md pt-3 ">{product.hometitle}</h3>
            
            </a>
         
           </article>

                )
             }
             {
                product?.image1&&(
           <article  className="portfolio__item w-full px-3 py-3 md:py-5 -mb-14 flex flex-col justify-center">
            <a target="blank" href={product.image1}>

             <div className="portfolio__item-image">
               <img className="w-full bg-cover rounded-md sm:h-32 h-24" src={product.image1} alt="" />
             </div>
             <h3 className="text-xs md:text-md pt-3 ">{product.image1title}</h3>
            
            </a>
         
           </article>

                )
             }
             {
                product?.image2&&(
           <article  className="portfolio__item w-full px-3 py-3 md:py-5 -mb-14 flex flex-col justify-center">
            <a target="blank" href={product.image2}>

             <div className="portfolio__item-image">
               <img className="w-full bg-cover rounded-md sm:h-32 h-24" src={product.image2} alt="" />
             </div>
             <h3 className="text-xs md:text-md pt-3 ">{product.image2title}</h3>
            
            </a>
         
           </article>

                )
             }
             {
                product?.image3&&(
           <article  className="portfolio__item w-full px-3 py-3 md:py-5 -mb-14 flex flex-col justify-center">
            <a target="blank" href={product.image3}>

             <div className="portfolio__item-image">
               <img className="w-full bg-cover rounded-md sm:h-32 h-24" src={product.image3} alt="" />
             </div>
             <h3 className="text-xs md:text-md pt-3 ">{product.image3title}</h3>
            
            </a>
         
           </article>

                )
             }
   
              
             
         </div >
         <div className="mt-24 mx-9 md:mx-20 lg:mx-40 pb-16">
            <h1 className="text-xl font-bold "> description</h1>
            <p className="text-gray-400 mt-3 border-b">{product.desc}</p>
           
           <h2  className="text-xl font-bold  mt-3">features</h2>
           <p className=" text-gray-400">{product.features}</p>

           <h2  className="text-xl font-bold  mt-3">framework Use in frontend</h2>
           <p className=" text-gray-400">{product.fronttech}</p>

           <h2  className="text-xl font-bold  mt-3">framework Use in Backend</h2>
           <p className=" text-gray-400">{product.backtechnology}</p>
         </div>
    </>
   
  )
}

export default ProductShow
