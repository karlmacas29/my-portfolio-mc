import React from 'react'
import { getImageUrl } from '../../utils'
import { HiCursorClick } from '@react-icons/all-files/hi/HiCursorClick'
import { FaServer } from '@react-icons/all-files/fa/FaServer'
import { FaFigma } from '@react-icons/all-files/fa/FaFigma'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.imgUser} src={getImageUrl('2.jpg')} alt="user 2" />
            <ul className={styles.aboutItems}>
                <li className={styles.aItems}>
                    <i className={styles.icons}> <HiCursorClick/></i> 
                    <div className={styles.aItemsText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in building responsive and optimized sites.</p>
                    </div>
                </li>
                <li className={styles.aItems}>
                <i className={styles.icons}> <FaServer/></i> 
                    <div className={styles.aItemsText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a backend developer with experience in API, Database, and Machine learning like python.</p>
                    </div>
                </li>
                <li className={styles.aItems}>
                <i className={styles.icons}> <FaFigma/></i> 
                    <div className={styles.aItemsText}>
                        <h3>UI Designer</h3>
                        <p>I have designed mobile ui and web ui systems in figma.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
