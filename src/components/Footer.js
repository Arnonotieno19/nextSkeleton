import React from 'react'
import styles from '../../styles/footer.module.css'
import Link from 'next/link'
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    let date = new Date().getFullYear();

  return (
    <div className={styles.container}>
        
        <div className={styles.footerHolder}>
            <div className={styles.footerTop}>
                <Link exact className={styles.navItem} href="/">Home</Link> | <Link exact className={styles.navItem} href="/">Services</Link> |  <Link exact className={styles.navItem} href="/">Contact</Link>

            </div>
            <div className={styles.footerSocials}>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className={styles.socialIcon}/></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn  className={styles.socialIcon}/></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.socialIcon}/></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaTwitter className={styles.socialIcon}/></a>
            </div>
            <div className={styles.footerBottom}>
                <a href="mailto:info@africomltd.com?subject=Service Inquiry&body=Hi! I am interested in knowing more about your services. Please call me back" rel="noreferrer" target="_blank" title="Send us mail">info@africomltd.com</a> | +254716000005 <br />
                        © {date} Africom Media. All right reserved
            </div>
        </div>       
    </div>
  )
}

export default Footer