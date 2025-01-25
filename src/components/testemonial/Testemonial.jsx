import { data } from "./Jsondata"
import "./testemonial.css"

const Testemonial = () => {
  return (
    <section>
     <h5>Review Fro</h5>
     <div className="flex gap-2 flex-wrap">
     {
       data.map((ele)=>(
         <div key={ele.id} className="bg-blue-950">
        <div>{ele.text}</div>
        </div>
      ))
    }
    </div>
    </section>
  )
}

export default Testemonial
