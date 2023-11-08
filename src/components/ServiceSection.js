import React from 'react'
import styles from '../../styles/service.module.css'
import {services} from '../utils/services'
import Image from 'next/image'

const ServiceSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainServiceHeader}> Our Services</h2>
      <div className={styles.servicesWrapper}>
        {services.map((item, index)=>(
          <div key={index} className={styles.serviceContainer}>
            <div className={styles.imageHolder}>
              <Image className={styles.serviceImage} src={item.image} alt="Service" />
            </div>
            <div className={styles.serviceDescription}>
              <h3 className={styles.serviceHeader}>{item.name}</h3>
              <p className={styles.serviceDesc}>{item.desc}</p>
            </div>
            <span className={styles.clickMore}>
              Read More
            </span>
          </div>
        ))}
      </div>  
    </div>
  )
}

export default ServiceSection