import React from 'react'
import styles from "./cont.module.css"

const Opg = ({children}) => (
<>	
  <div>
  <div 
    className={styles.hdlopg}>
    <b>Oppgåver</b> 
    </div>
    <div
		className={styles.blkopg}
		>
		<ul className={styles.atch}>
		{children}
		</ul>
		</div>
    </div>
</>    
    )



export default Opg
 
    
