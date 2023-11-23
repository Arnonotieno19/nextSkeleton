import React from 'react'
import styles from '../../styles/service.module.css'
import {services} from '../utils/services'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const ServiceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className={styles.container}>
      <h2 className={styles.mainServiceHeader}> Our Services</h2>
      <div className={styles.servicesWrapper}>
        {services.map((item, index)=>(
         
            <motion.div 
              whileHover={{ scale: 0.95 , backgroundColor:'#2d5477', boxShadow: '0px 8px 16px 0px rgba(82, 241, 241, 0.2)',  color: 'white',}}
              whileTap={{ scale: 1 }}
              ref={ref}
              transition={{ duration: 1.5, type: "spring" }}
              animate={inView ? { x: 1 } : {}}
              key={index} className={styles.serviceContainer}
              >
              <div className={styles.imageHolder}>
                <Image className={styles.serviceImage} src={item.image} alt="Service" />
              </div>
              <div className={styles.serviceDescription}>
                <h3 className={styles.serviceHeader}>{item.name}</h3>
                <p className={styles.serviceDesc}>{item.desc}</p>
              </div>
              <h3 className={styles.clickMore}>
                Read More
              </h3>
            </motion.div>
        
        ))}
      </div>  
    </div>
  )
}

export default ServiceSection