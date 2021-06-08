import React from 'react'
import {blkvids, atch, hdlvids} from "./cont.module.css"

const Vids = ({children}) => (
<>	
  <div>
  <div 
    className={hdlvids}>
    <b>Videoar</b> 
    </div>
    <div
		className={blkvids}
		>
		<ul className={atch}>
		{children}
		</ul>
		</div>
    </div>
</>    
    )



export default Vids
 
    
