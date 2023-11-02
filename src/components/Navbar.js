import React from 'react'
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'


const Navbar = () => {
  return (
    <nav>
    <ul className={styles.navbar}>
      <li className={styles.navItem}>
        <Link className={styles.navElement} href="/">Home</Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navElement} href="/about">About</Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navElement} href="/services">Services</Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navElement} href="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar