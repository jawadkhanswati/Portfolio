import {useState} from 'react'

import PortfolioContext from './Portcontext';

const PortState=(props)=>{
 const [product,setproduct]=useState()
    return(
        <PortfolioContext.Provider value={{product,setproduct}}>
            {props.children}
        </PortfolioContext.Provider>
    )
}

export default PortState;