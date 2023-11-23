import React from 'react'
import styles from '../../../styles/payment.module.css'
import {icons} from '../../utils/carouselCont'
import Image from 'next/image'

const payment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroItems}>
          <div className={styles.contentHolder}>
            <div className={styles.titleHolder}>
                 <h1 className={styles.unique}  style={{ color: "white"}}>Revolutionize your payment experience with our seamless and secure payment solutions.</h1>
            </div>
            <div className={styles.titleHolder}>
                 <p className={styles.irresistible} >We redefine convenience by offering a variety of payment options, from swift digital transactions to traditional methods, ensuring your customers have the flexibility they desire. With our cutting-edge payment technology!</p>
            </div>
            {/* <div className={styles.bookus}>
                 <a href='/contact'className={styles.modern} style={{ color: "white" }}>Book us Today!</a>
            </div> */}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.innerSection}>
               <div className={styles.innerLeft}>
                    {icons.map((item)=>(
                         <div className={styles.itemsHolder}>
                              <Image src={item.icon} alt='product' className={styles.icon}/>  
                              <p className={styles.productDesc}>{item.desc}</p> 
                         </div>
                    ))}
               </div>
               <div className={styles.innerRight}></div> 
          </div>

        </div>
    </div>
  )
}

export default payment