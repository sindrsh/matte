import React from 'react'
import {th, hdlone, cnt} from "./themes.module.css"

function Box(props) {
  return (
  <div className={th}>
	   <div className={hdlone} style={{color: props.pen,backgroundColor: props.colh}}>
	  	<p><b> {props.hdl}</b></p>
	  </div>
	  <div className={cnt} style={{backgroundColor: props.colc, display:"block"}}>
		  {props.children}
	  	</div>
	</div>
  );
}



export default Box
 
    
