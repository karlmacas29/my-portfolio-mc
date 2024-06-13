import React from 'react'
import styles from './Links.module.css'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaFacebookMessenger } from '@react-icons/all-files/fa/FaFacebookMessenger'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'

const Links = () => {
  return (
    <footer className={styles.container} id='links'>
        <div className={styles.text}>
            <h2>Contacts</h2>
            <p>Feel free to reach out!</p>
        </div>
        <div className={styles.list}>
            <ul className={styles.link}>
                <li><i><FaFacebook/></i><a href="https://web.facebook.com/null.values.64" target='_blank'>Facebook</a></li>
                <li><i><FaInstagram/></i><a href="https://www.instagram.com/karlmacasracoma?igsh=enlxaTJwZmtxdGV5" target='_blank'>Instagram</a></li>
                <li><i><FaFacebookMessenger/></i><a href="https://m.me/null.values.64?hash=AbZFjdbiKmuU_N-D&source=qr_link_share" target='_blank'>Messenger</a></li>
                <li><i><FaGithub/></i><a href="https://github.com/karlmacas29" target='_blank'>Github</a></li>
                <li><i><SiGmail/></i><a href="mailto:karlracomamacas@gmail.com" target='_blank'>Google Mail</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Links
