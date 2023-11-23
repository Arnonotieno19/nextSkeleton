import React from 'react'
import styles from '../../../styles/branding.module.css'
import Image from 'next/image'
import bgImage from '../../assets/bg2.jpg'
import image2 from '../../assets/t2.png'
import image3 from '../../assets/creative/11.jpg'
import image4 from '../../assets/r3.jpg'

const branding = () => {
  return (
    <div className={styles.container}>
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
        <div className={styles.cardsPrintingSection}>
          <div className={styles.cardsContent}>
               <h1 className={styles.printHeader}>Printing</h1>
               <div className={styles.bodyPrint}>
                    <p className={styles.bodyParagraph}>
                         Discover excellence in printing at Africom! We specialize in high-quality solutions, from standout business cards to vibrant flyers and innovative packaging. Our precision, creativity, and top-notch materials ensure your brand shines. Trust us to turn your vision into impactful print materials. Explore our services for print perfection.
                    </p>
                    <Image src={image2} alt='' className={styles.imgCards}/>
               </div>
          </div>
          <div className={styles.largeFormat}>
               <h1 className={styles.spanText}>Large format branding</h1>
               <ul className={styles.listItems}>
                    <li>Wall branding</li>
                    <li>Vehicle branding</li>
                    <li>canva & many more!!</li>
               </ul>
          </div>

          <div className={styles.cardsContent}>
               <div className={styles.bodyPrint}>
                    <Image src={image3} alt='' className={styles.imgCards}/>
                    <p className={styles.bodyParagraph}>
                    Transform your brand presence with impactful visuals. From eye-catching wall and vehicle branding to attention-grabbing banners and larger-than-life formats, we turn your ideas into stunning realities. Elevate your visibility, captivate your audience, and make a bold statement with our expert branding solutions.
                    </p>
               </div>
          </div>

          <div className={styles.largeFormat2}>
               <h1 className={styles.spanText}>Also get gadgets & textile branding</h1>
          </div>

          <div className={styles.cardsContent}>
               <a href='/contact' className={styles.contactButton}> Get Started</a>
          </div>

          {/* <div className={styles.footer}>


          </div> */}
        </div>
    </div>
  )
}

export default branding