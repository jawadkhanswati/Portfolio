
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductShow from './components/portfolio/ProductShow'
import Home from './components/home/Home'
import {Toaster} from "react-hot-toast"
import PortState from './components/context/PortState'


const App = () => {
  
  return (
  
    <PortState>

      <BrowserRouter>
     <Routes>
 
      <Route path='/' element={<Home/>}/>
      <Route path='/product/backend/demo/details/:id' element={<ProductShow/>}/>
     </Routes>
    <Toaster/>
    </BrowserRouter>
  
    </PortState>
    
  )
}

export default App
