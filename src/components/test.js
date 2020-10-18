import React from 'react'
import styles from "./themes.module.css"

function Box(props) {
  return (
  <div className={styles.th}>
	   <div className={styles.hdlone} style={{color: props.pen,backgroundColor: props.colh}}>
	  	<p><b> {props.hdl}</b></p>
	  </div>
	  <div className={styles.cnt} style={{backgroundColor: props.colc, display:"block"}}>
		  {props.children}
	  	</div>
	</div>
  );
}



export default Box
 
    
