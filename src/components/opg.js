import React from 'react'
import {blkopg, atch, hdlopg} from "./cont.module.css"

const Opg = ({children}) => (
<>	
  <div>
  <div 
    className={hdlopg}>
    <b>Andre hjelpemiddel</b> 
    </div>
    <div
		className={blkopg}
		>
		<ul className={atch}>
		{children}
		</ul>
		</div>
    </div>
</>    
    )



export default Opg
 
    
