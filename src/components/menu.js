import * as React from "react"
import { Link } from "gatsby"
import {mnu,btn,btna, ulmenu} from "./menu.module.css"

// For menyen:
const MenuLink = props =>
    <Link 
    to={props.to}
    className={btn}
    activeClassName={btna}>
    {props.children}
    
    </Link>
    
const MenuLine = () =>
    <div 
    style={{
      height: 2.5,
      background: `#334d4d`,
    }}>
    </div>    

const Menu = () => (
    <div className={mnu} >
    
	<ul className={ulmenu}>
<Link
      className={btn}
      exact to="/"
      activeClassName={btna}
    >
    <i></i> Start
    </Link>
    <MenuLine/>
<MenuLink
   	 className={btn}
      to="/tital/"
    >
    <i></i> Titalsystemet
    </MenuLink> 
<MenuLink
   	 className={btn}
      to="/rekning/"
    >
    <i></i> Rekning
    </MenuLink>  
<MenuLink
   	 className={btn}
      to="/brok/"
    >
    <i></i> Brøk
    </MenuLink>
      <MenuLine/>      
<MenuLink
   	 className={btn}
      to="/bok/"
    >
    <i></i> Bøker
    </MenuLink>    
<MenuLink
   	 className={btn}
      to="/pdf_gen/"
    >
    <i></i> Oppgåvegenerator
    </MenuLink>        
      </ul>
    </div>
)

export default Menu

