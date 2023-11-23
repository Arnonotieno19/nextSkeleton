import React from 'react'
import styles from '../../../styles/vas.module.css'

const vas = () => {
  return (
    <div>
        <div className={styles.heroItems}>
            <div className={styles.titleHolder}>
                 <h1 className={styles.unique}  style={{ color: "#cae9ff"}}>UNIQUE</h1>
            </div>
            <div className={styles.titleHolder}>
                 <h1 className={styles.irresistible} >IRRESISTIBLE</h1>
            </div>
            <div className={styles.titleHolder}>
                 <h1 className={styles.modern} style={{ color: "#00d2d1" }}>MODERN</h1>
            </div>
        </div>
    </div>
  )
}

export default vas