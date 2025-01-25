import CV from "../../assets/CV.pdf"
import Degree from "../../assets/Degree.pdf"


const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn text-sm">Download CV</a>
      <a href={Degree} className="btn text-sm flex btn-primary">Download Degree</a>
    </div>
  )
}

export default CTA 
