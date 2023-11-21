import React from 'react'
import styles from '../../styles/contact.module.css'
import Image from 'next/image'
import contactImage from '../assets/contact.jpg'
import Footer from '../components/Footer'
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { FiMapPin } from 'react-icons/fi'
import { motion } from "framer-motion";
import { MdMarkEmailRead } from "react-icons/md";

import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.titleHolder}>
          <div className={styles.innerHolder}>
            <h1 className={styles.header1}>Get in touch</h1>
            <i>
               <span className={styles.spanHeader}>Don't be a stranger, We'd love to hear from you. Here's how you can reach us.</span>
            </i>
          </div>
        </div>
        <div className={styles.ImageHolder}>
          <Image className={styles.image} src ={contactImage} alt='Contact Image'/>
        </div>
      </div>
      <motion.div 
            layout
            className={styles.sectionB}
            transition={{ duration: 2.5, type: "spring" }}
            animate={{ y: -10 }}>
        <div className={styles.socials}>
          <div className={styles.contactCall}>
            <IoCallSharp color='2ed7da' fontSize={50}/>
            <h1 className={styles.headerTag}>Talk to us</h1>
            <span>You can give us a call directly on </span>
            <a  className={styles.atag} href='tel:+254716000005' title="call us">+254716000005</a>
          </div>

          <h1 className={styles.headerTag}>Visit us at</h1>
          <div className={styles.item1}>
            <FiMapPin color='073c64' fontSize={20}/>
            <a
                  href="https://maps.app.goo.gl/xTC28KWbawYskkQKA"
                  rel="noreferrer"
                  target="_blank"
                  title="Open on google maps"
                  className={styles.atag}
                >
                  {" "}
                  Bishop magua center 4th floor,Ngong road
            </a>
          </div>

          <h1 className={styles.headerTag}>Email us at</h1>
          <div className={styles.item1}>
            <MdMarkEmailRead color='073c64' fontSize={25}/>
            <a
								href="mailto:info@africomltd.com?subject=Service Inquiry&body=Hi! I am interested in knowing more about your services. Please call me back"
								rel="noreferrer"
								target="_blank"
								title="Send us a mail"
                className={styles.atag}
							>
								info@africomltd.com
							</a>
          </div>

          <div className={styles.socialIconsSection}>
							<div  to="/contact" aria-label="Instagram">
								<a className={styles.SocialIcons} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
									<FaInstagram />
								</a>	
							</div>

							<div  aria-label="Twitter">
								<a className={styles.SocialIcons} href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
									<FaTwitter />
								</a>	
							</div>
							
							<div  aria-label="Linkedin">
								<a className={styles.SocialIcons} href="https://www.linkedin.com/company/africom-media-ltd/about/" target="_blank" rel="noopener noreferrer">
									<FaLinkedinIn />
								</a>
							</div>

							
							<div    aria-label="Facebook">
								<a className={styles.SocialIcons} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
									<FaFacebookSquare />
								</a>	
							</div>
						</div>
          
        </div>
        <div className={styles.socials}>
          <IoChatbubblesSharp color='2ed7da' fontSize={50}/>
          <h1 className={styles.headerTag}>Send us a message</h1>
          <form className={styles.formHolder}>
            <div className={styles.inputsHolder}>
              <input 
                  type='text'
                  placeholder="Full Name"
                  required
                  className={styles.formInputs}
              />
              <input 
                  type='text'
                  placeholder="company"
                  required
                  className={styles.formInputs}
              />

            </div>
            <div className={styles.inputsHolder}>
              <input 
                  type="email"
									placeholder="Email (xyz@abc.com)"
                  required
                  className={styles.formInputs}
              />
              <input 
                  type="tel"
									id="phone"
									name="phone"
									minLength="9"
									pattern="[0-9]*"
									placeholder="+254700000000  (9+ digit)"
									required
                  className={styles.formInputs}
              />

            </div>
            <input
                  type="text"
                  placeholder="Subject"
                  required
                  className={styles.formInputsSubject}
            />
            <textarea
                  cols="30"
                  rows="4"
                  style={{ width: "95%" }}
                  placeholder="Message"
                  required
                  className={styles.textArea}
            />

            <button className= {styles.submitButton} type='submit' >Submit</button>
            
          </form>
        </div>
      </motion.div> 
      <div className={styles.bottomContainer}>

      </div>
      {/* <Footer className={styles.Footer}/>      */}
    </div>
  )
}

export default contact