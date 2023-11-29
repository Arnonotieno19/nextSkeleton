import React from 'react'
import styles from '../../../styles/vas.module.css'
import {VASitems} from '../../utils/carouselCont'
import Image from 'next/image'
import {motion} from 'framer-motion'

const vas = () => {
  return (
    <div>
        <div className={styles.heroItems}>
          <div className={styles.contentHolder}>
              <div className={styles.titleHolder}>
                  <h1 className={styles.unique}  style={{ color: "aqua"}}>Enhancing Value with Premium Services.</h1>
              </div>
              <div className={styles.titleHolder}>
                  <p className={styles.irresistible} > From personalized customer support that anticipates your needs to bespoke solutions tailored to your industry, we go beyond the ordinary to add extraordinary value to your operations.</p>
              </div>
          </div>
        </div> 
        <div className={styles.vasBody}>
          <div className={styles.vasContent}>
            {VASitems.map((item)=>(
                <motion.div className={styles.card}
                      whileHover={{ scale: 1.1 ,}}
                      whileTap={{ scale: 1 }}
                      transition={{ duration: 1.5, type: "spring" }}
                      animate={ {x: 1 }}

                >
                  <Image src={item.imageBg} className={styles.backGroundImage}/>
                  <div className={styles.cardDesc}>
                    <div className={styles.imageHolder}>
                      <Image className={styles.imageIcon} src={item.icon} alt='Service'/>
                    </div>
                    <h1 className={styles.cardTitle}>{item.title}</h1>
                  </div>  
                </motion.div >  
            ))}
          </div>
          <div className={styles.vasExtra}>
              <p className={styles.innerParagraph}>Unlock the potential of seamless innovation with our cutting-edge Value-Added Services (VAS). Elevate your business experience through a spectrum of tailored solutions that redefine excellence. Dive into a world where innovation meets efficiency, and let our VAS offerings be the catalyst for your success. Curiosity sparked? Inquire now and embark on a journey of transformative possibilities</p>
              <motion.div 
                    className={styles.contactus}
                    whileHover={{ scale: 1.1 ,backgroundColor:'aqua'}}
                    transition={{ duration: 1.5, type: "spring" }}
                    animate={ {x: 1 }}
                    >
                   <a  className={styles.contactLink} href='/contact'>Get In touch with us!</a>
              </motion.div>
          </div>
        </div> 
    </div>
  )
}

export default vas