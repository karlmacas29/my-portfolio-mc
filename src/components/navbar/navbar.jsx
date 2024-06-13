import React from 'react'
import styles from './navbar.module.css'
import { useState } from 'react'

import { RiMenuUnfoldLine } from "@react-icons/all-files/ri/RiMenuUnfoldLine";
import { RiMenuFoldLine } from "@react-icons/all-files/ri/RiMenuFoldLine";


const Navbar = () => {
    const [menuOpen, setmenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>My Portfolio</a>
        <div className={styles.menu}>
            {/* <img className={styles.menuBtn} src={getImageUrl()} alt="" /> */}
            <i onClick={()=> setmenuOpen(!menuOpen)} className={styles.navIcon}>{menuOpen ? <RiMenuUnfoldLine /> : <RiMenuFoldLine/>}</i>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setmenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#links">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
