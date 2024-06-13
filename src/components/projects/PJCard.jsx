import React from 'react'
import styles from './PJCard.module.css'
import { getImageUrl } from '../../utils'

const PJCard = ({project:{title, imgSrc, description, tools, source}}) => {
  return (
    <div className={styles.container}>
        <img src={getImageUrl(imgSrc)} alt="Image" />
        <h3>{title}</h3>
        <p>{description}</p>
            <ul className={styles.listText}>
                    {
                        tools.map((t,id)=>{
                            return <li key={id}>{t}</li> 
                        })
                    }
            </ul>
        <div className={styles.links}>
            <a href={source} target='_blank'>Source</a>
        </div>
    </div>
  )
}

export default PJCard
