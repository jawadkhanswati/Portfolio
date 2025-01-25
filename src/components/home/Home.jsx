import Abouts from "../about/Abouts"
import Contact from "../contact/Contact"
import Experience from "../experience/Experience"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import Navbar from "../nav/Navbar"
import Portfolio from "../portfolio/Portfolio"
import Services from "../service/Services"



const Home = () => {
  return (
    
    <div className='bg'>
        <Header/>
     <Navbar/>
     <Abouts/>
     <Experience/>
      <Services/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default Home
