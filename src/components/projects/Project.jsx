import React from 'react'
import projData from '/src/assets/data/Projects.json'
import styles from './Project.module.css'
import PJCard from './PJCard'


const Project = () => {
  return (
    <section className={styles.container} id='projects'>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.proj}>
            {
                projData.map((project, id) => {
                    return <PJCard key={id} project={project}/>
                })
            }
        </div>
    </section>
  )
}

export default Project
