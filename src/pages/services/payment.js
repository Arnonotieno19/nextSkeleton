import React from 'react'
import styles from '../../../styles/payment.module.css'
import {icons} from '../../utils/carouselCont'
import Image from 'next/image'
import pc from '../../assets/creative/a.png'
import mobile from '../../assets/creative/b.png'
import pay from '../../assets/payco.jpg'

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
               <div className={styles.innerRight}>
                     <h1 className={styles.unique2}  style={{ color: "#2d5477"}}>We offer customized payment solutions for all businesses to accept online, mobile or in-store payments.</h1>
                     <p className={styles.description}>Join our global partners in using our payment gateway that allows your billing model to leverage M-Pesa payment for your Kenyan customers or audience.</p>
               </div> 
          </div>
        </div>
        <div className={styles.secondSection}>
          <div className={styles.ssinner}>
               <div className={styles.secondSectionDesc}>
                    <h1 className={styles.unique3} >Make your payment journey fast, easy, and transparent </h1>
                    <a className={styles.button} href='/contact'>Join Us Today!</a>
               </div>
               <div className={styles.imageHolder}>
               </div>
          </div>
          
        </div>
    </div>
  )
}

export default payment