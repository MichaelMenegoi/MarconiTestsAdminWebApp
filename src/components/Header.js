import React from 'react'
import Styles from '../assets/css/Header.module.css'
import Helpers from '../assets/css/config/Helpers.module.css'
import LogoMarconi from '../assets/icons/logo_marconi.png'

function Header() {
  return (
    <header>
        <img style={{width: "130px"}} src={LogoMarconi} alt="Logo I.T.I.S. Guglielmo Marconi Verona"/>
        <nav>
            <a className={Helpers.link} href="#">Aggiungi materie</a>
            <a className={Helpers.link} href="#">Aggiungi argomenti per materie</a>
            <a className={Helpers.link} href="#">Aggiungi domande</a>
        </nav>
    </header>
  )
}

export default Header