import React from 'react'
import styles from '../../../styles/digital.module.css'

const digital = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroItems}>
          <div className={styles.contentHolder}>
                <div className={styles.titleHolder}>
                    <h1 className={styles.unique}  style={{ color: "Aqua"}}>Unleash Your Brand's Potential, Ignite Digital Success with us!</h1>
                </div>
                <div className={styles.titleHolder}>
                    <p className={styles.irresistible} >At Africom Media Ltd, we're not just a service. We're your strategic partner in digital success. Our experienced team crafts compelling content, optimizes your online presence, and defines industry trends. Trust us as your digital ally, turning challenges into opportunities and transforming your brand into a standout presence. </p>
                </div>
                <a className={styles.button} href='/contact'>Join Us Today!</a>
          </div>
      </div>      
    </div>
  )
}

export default digital