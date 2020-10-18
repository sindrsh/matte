import React from 'react'
import styles from "./cont.module.css"

const Tema = ({children,props}) => (
<>	
  <div>
  <div 
    className={styles.hdlvids}>
    <b>Addisjon</b> 
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



export default Tema
 
    
