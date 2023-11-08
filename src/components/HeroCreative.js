import React from 'react'
import styles from '../../styles/heroCreative.module.css'
import { creativeshuffle } from '@/utils/creativeShuffle'
import Image from 'next/image'


const HeroCreative = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentTextHolder}>
        <h2 className={styles.contextH1}>We do better everyday</h2>
        <h1 className={styles.contextMain}>Unlocking the next level in Telecom</h1>
        <p className={styles.contextDesc}>At Africom Media, we are a tech-driven organization 
           with an aim of using the right technology to explore, 
           and innovate new solutions in the dynamic world of mobile and web content. <br/> 
        </p>
        <div className= {styles.missionHolder}> 
          <h2 className={styles.contextH1b}>Our Mission</h2>
          <p className={styles.contextDesc}>To be at the forefront of digital transformation across Africa.</p>
          <h2 className={styles.contextH1b}>Our Promise</h2>
          <p className={styles.contextDesc}>We promise to be your innovative brain with outstanding customer service and excellent value for money.</p>
        </div>

        <span className={styles.learnMore}>Contact us</span>
      </div>
      <div className={styles.imageShuffleHolder}>
        {creativeshuffle.map((item, id)=>(
          <Image key={id} src={item.img} alt="Africom"  className={styles.creativeImage}/>
        ))}
      </div>
    </div>
  )
}

export default HeroCreative