import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'
import Image from 'next/image';
import logo from '../assets/africomlogo.png'
import { motion } from 'framer-motion';
import {HiOutlineMenuAlt1} from  'react-icons/hi'
import {navlinks} from  '../utils/navlinks'
import {FiXCircle} from 'react-icons/fi'
import {navlinksMobile} from  '../utils/navlinks'


import { MotionProps, Variants } from "framer-motion";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileNav, setMobileNave] = useState(false);
  // const [isSmallscreen, setIsSmallScreen] = useState(false)


  const menu = {
    closed: {
      scale: 0,
      transition: {
        delay: 0.15,
      },
    },
    open: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };
  
  const itemMain = {
    variants: {
      closed: { x: -16, opacity: 0 },
      open: { x: 0, opacity: 1 },
    },
    transition: { opacity: { duration: 0.2 } },
  };

 

  const [windowWidth, setWindowWidth] = useState(0);
  // console.log(JSON.stringify(navlinks))

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 

  const handleMobileNav =()=> (setMobileNave(!mobileNav));
  const itemMainVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image className={styles.logoImage} width={''} height={''} src= {logo} alt='logo'/>
      </div>
      {windowWidth <= 500 ? 
        (
          <div className={styles.menuHolder} onClick={handleMobileNav}>
            {!mobileNav?( <HiOutlineMenuAlt1 className={styles.menu}/>):(
              <div>
                <FiXCircle className={styles.menu} />
                <div className={styles.mobileNav}>
                    <motion.div
                      className={styles.mobileMenu}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={itemMainVariants}
                      transition={itemMain.transition}
                    >
                        {navlinksMobile.map((item, index) => (
                        <motion.div key={index} className={styles.submenuItem} variants={item.variants}>
                          <Link href={item.link} className={styles.submenLink}>{item.name}</Link>
                        </motion.div>
                      ))}
                    
                    </motion.div>

                </div>
              </div>
            )}
          </div>
        ):(
          <div className={styles.navbarContainer}>
            <ul className={styles.navbar}>
              <li className={styles.navItem}>
              <Link className={styles.navElement} href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <div
                className={styles.navElement}
                onClick={() => setOpen(!open)}
              >
                Services
              </div>
              {open && (
                <motion.div
                  className={styles.submenu}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={itemMain.variants}
                  transition={itemMain.transition}
                >
                    {navlinks.map((item, index) => (
                    <motion.div key={index} className={styles.submenuItem} variants={item.variants}>
                      <Link href={item.link}  onClick={() => setOpen(false)} className={styles.submenLink}>{item.name}</Link>
                    </motion.div>
                  ))}
                
                </motion.div>
              )}
            </li>

            <li className={styles.navItem}>
              <Link className={styles.navElement} href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}  
  </div>
  )
}

export default Navbar