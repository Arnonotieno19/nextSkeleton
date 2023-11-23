import React from 'react'
import styles from '../../../styles/events.module.css'


const events = () => {
  return (
    <div className={{height:'100vh'}}>
      <div className={styles.heroItems}>
          <div className={styles.contentHolder}>
            <div className={styles.titleHolder}>
                 <h1 className={styles.unique}  style={{ color: "white"}}>Africa's Best Event Management Agency for Corporate.</h1>
            </div>
            <div className={styles.titleHolder}>
                 <p className={styles.irresistible} >Elevate your events to unforgettable experiences with our expert event services. Whether you're planning a corporate gathering, a milestone celebration, or a product launch, our dedicated team ensures every detail is meticulously curated for success.</p>
            </div>
            <div className={styles.bookus}>
                 <a href='/contact'className={styles.modern} style={{ color: "white" }}>Book us Today!</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default events

// color:  #2d5477;
