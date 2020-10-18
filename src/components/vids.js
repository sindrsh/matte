import React from 'react'
import styles from "./cont.module.css"

const Vids = ({children}) => (
<>	
  <div>
  <div 
    className={styles.hdlvids}>
    <b>Videoar</b> 
    </div>
    <div
		className={styles.blkvids}
		>
		<ul className={styles.atch}>
		{children}
		</ul>
		</div>
    </div>
</>    
    )



export default Vids
 
    
