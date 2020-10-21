import React from 'react'
import Link from "gatsby-link"
import styles from "./menu.module.css"

// For menyen:
const MenuLink = props =>
    <Link 
    to={props.to}
    className={styles.btn}
    activeClassName={styles.btna}>
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
    <div className={styles.menu} >
    
	<ul className={styles.ulmenu}>
<Link
      className={styles.btn}
      exact to="/"
      activeClassName={styles.btna}
    >
    <i></i> Start
    </Link>
    <MenuLine/>
<MenuLink
   	 className={styles.btn}
      to="/tital/"
    >
    <i></i> Titalsystemet
    </MenuLink> 
<MenuLink
   	 className={styles.btn}
      to="/rekning/"
    >
    <i></i> Rekning
    </MenuLink>  
<MenuLink
   	 className={styles.btn}
      to="/brok/"
    >
    <i></i> Brøk
    </MenuLink>
      <MenuLine/>      
<MenuLink
   	 className={styles.btn}
      to="/bok/"
    >
    <i></i> Bok
    </MenuLink>       
      </ul>
    </div>
    
)

export default Menu

