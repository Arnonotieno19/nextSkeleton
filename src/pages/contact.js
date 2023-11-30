import React from 'react'
import styles from '../../styles/contact.module.css'
import Image from 'next/image'
import contactImage from '../assets/22.jpg'
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
      <div className={styles.body}>
        <div className={styles.sectionInner}>
          <div className={styles.leftSection}>
            <div className={styles.headerHolder}>
              <h1 className={styles.header1}>Don't be a stranger,</h1>
              <span className={styles.spanHeader}>Say hello to us!</span> 
            </div>
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
                      placeholder="Company"
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
                      placeholder="+254700000000 (9+ digit)"
                      color='#2d5477'
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
                      placeholder="Message"
                      required
                      className={styles.textArea}
                />
                <button className= {styles.submitButton} type='submit' >Submit</button>        
            </form>
          </div>
          <div className={styles.rightSection}>
            <h1 className={styles.header2}>Contact us</h1>

            <div className={styles.contactUsInner}>
                <div className={styles.item1}>
                  <div className={styles.icon}>
                      <FiMapPin color='073c64' fontSize={20} />
                  </div>
                  <a
                        href="https://maps.app.goo.gl/xTC28KWbawYskkQKA"
                        rel="noreferrer"
                        target="_blank"
                        title="Open on google maps"
                        className={styles.atag}
                      >

                        <span style={{fontWeight:'bold'}}>Address: </span>
                        Bishop magua center 4th floor,Ngong road
                  </a>
                </div>

                <div className={styles.item1}>
                    <div className={styles.icon}>
                      <MdMarkEmailRead color='073c64' fontSize={25}/>
                    </div>
                  <a
                      href="mailto:info@africomltd.com?subject=Service Inquiry&body=Hi! I am interested in knowing more about your services. Please call me back"
                      rel="noreferrer"
                      target="_blank"
                      title="Send us a mail"
                      className={styles.atag}
                    ><span style={{fontWeight:'bold'}}>Email: </span>
                      info@africomltd.com
                    </a>
                </div>

                <div className={styles.item1}>
                  <div className={styles.icon}>
                    <IoCallSharp color='073c64' fontSize={25}/>
                  </div>  
                    <a  className={styles.atag} href='tel:+254716000005' title="call us">
                    <span style={{fontWeight:'bold'}}>Talk to us: </span>+254716000005</a>
                </div>

                <h2 className={styles.header3}>Our Social Media Platforms:</h2>

                <div className={styles.item1}>
                  <div className={styles.icon}>
                    <FaInstagram color='073c64' fontSize={25}/>
                  </div>  
                    <a  className={styles.atag} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <span style={{fontWeight:'bold'}}>Instagram</span>
                    </a>
                </div>

                <div className={styles.item1}>
                  <div className={styles.icon}>
                    <FaTwitter color='073c64' fontSize={25}/>
                  </div>  
                    <a  className={styles.atag} href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                    <span style={{fontWeight:'bold'}}>Twitter</span>
                    </a>
                </div>

                <div className={styles.item1}>
                  <div className={styles.icon}>
                    <FaLinkedinIn color='073c64' fontSize={25}/>
                  </div>  
                    <a  className={styles.atag} href="https://www.linkedin.com/company/africom-media-ltd/about/" target="_blank" rel="noopener noreferrer">
                    <span style={{fontWeight:'bold'}}>LinkedIn</span>
                    </a>
                </div>

                <div className={styles.item1}>
                  <div className={styles.icon}>
                    <FaFacebookSquare color='073c64' fontSize={25}/>
                  </div>  
                    <a  className={styles.atag} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <span style={{fontWeight:'bold'}}>Facebook</span>
                    </a>
                </div>

                {/* <h2 className={styles.header3}>Our social Media Platforms:</h2>
                <div className={styles.socialsHolder}>
                    <div  aria-label="Instagram">
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

                    
                    <div aria-label="Facebook">
                      <a className={styles.SocialIcons} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare />
                      </a>	
                    </div>
              </div> */}
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default contact

