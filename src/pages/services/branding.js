import React from 'react'
import styles from '../../../styles/branding.module.css'
import Image from 'next/image'
import bgImage from '../../assets/bg2.jpg'
import image2 from '../../assets/t2.png'
import image3 from '../../assets/creative/booth(b).jpg'
import image4 from '../../assets/r3.jpg'
import image5 from '../../assets/branding.jpg'
import {brandingServices} from '../../utils/services'
import { IoMdArrowForward } from "react-icons/io";

const branding = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heroItems}>
          <div className={styles.spanHolder}>
               <span className={styles.spanText}>MODERN |</span>
               <span className={styles.spanText}>UNIQUE |</span>
               <span className={styles.spanText}>IRRESISTIBLE</span>
          </div>
          <p className={styles.unique}>CRAFTING BRILLIANCE, ONE PRINT AT A TIME.</p>  
          <a href='/contact'  style={{textDecoration:'none'}} className={styles.button}>Get Started Now!</a>                    
        </div>
        <div className={styles.cardsPrintingSection}>
          <div className={styles.cardContainer}>
               <h1 className={styles.brandHeader}>BRAND</h1>
               <p className={styles.HeaderDesc}>Transforming Visions into Iconic Brands.</p>
               <div className={styles.cardItem} >
                    {brandingServices.map((item)=>(
                         <div className={styles.cardInner}>
                              <Image className={styles.imageIcon} src={item.image} alt="icon"/>
                              <h2 className={styles.cardTitle}>{item.name}</h2>
                              <p className={styles.description}>{item.desc}</p>
                         </div>
                    ))}
                    {/* <Image className={styles.brandingImage} src={image5} alt='branding'/> */}
               </div> 

               <div className={styles.buttonOther}>
                         <a  style={{textDecoration:'none'}}href='/contact'>Find out more</a>
                         <IoMdArrowForward fontSize={18} color='#2d5477'/>
               </div> 
               <div className={styles.sectionInner}>
                    <div className={styles.brandingImage}></div> 
                    <div className={styles.sectiondesc}>
                         <p className={styles.slogan}>Find Brilliance In What We Do!</p>
                    </div>
                    <Image src={image3} alt="" className={styles.image2} />
               </div>
               {/* <div className={styles.section2}>
                    <Image src={image3} alt="" className={styles.image2} />
               </div> */}
          </div>                         
        </div>
    </div>
  )
}

export default branding




















// <div className={styles.cardsContent}>
//                <h1 className={styles.printHeader}>Printing</h1>
//                <div className={styles.bodyPrint}>
//                     <p className={styles.bodyParagraph}>
//                          Discover excellence in printing at Africom! We specialize in high-quality solutions, from standout business cards to vibrant flyers and innovative packaging. Our precision, creativity, and top-notch materials ensure your brand shines. Trust us to turn your vision into impactful print materials. Explore our services for print perfection.
//                     </p>
//                     <Image src={image2} alt='' className={styles.imgCards}/>
//                </div>
//           </div>
//           <div className={styles.largeFormat}>
//                <h1 className={styles.spanText}>Large format branding</h1>
//                <ul className={styles.listItems}>
//                     <li>Wall branding</li>
//                     <li>Vehicle branding</li>
//                     <li>canva & many more!!</li>
//                </ul>
//           </div>


{/* <div className={styles.cardsContent}>
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
          </div> */}


          // <div className={styles.titleHolder}>
          //        <h1 className={styles.unique}  style={{ color: "#cae9ff"}}>UNIQUE</h1>
          //   </div>
          //   <div className={styles.titleHolder}>
          //        <h1 className={styles.irresistible} >IRRESISTIBLE</h1>
          //   </div>
          //   <div className={styles.titleHolder}>
          //        <h1 className={styles.modern} style={{ color: "#00d2d1" }}>MODERN</h1>
          //   </div>
