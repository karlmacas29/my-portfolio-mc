import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
    const imageUrl = getImageUrl('1.jpg');
    console.log(`Image Url: ${imageUrl}`);

  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Karl R. Macas</h1>
            <p className={styles.desc}>I am a student pursuing a Bachelor of Science in Information Technology at Davao Del Norte State College.</p>
            <a className={styles.btn} href="mailto:karlracomamacas@gmail.com" target='_blank'>Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl('1.jpg')} alt="User Profile" />
        <div className={styles.topblur}></div>
        <div className={styles.bottomblur}></div>
    </section>
  )
}

export default Hero
