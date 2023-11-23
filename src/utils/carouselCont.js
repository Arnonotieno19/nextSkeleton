import banner1 from '../assets/heroFinal2reduced.jpg';
import banner2 from '../assets/vas.jpg'
import banner4 from '../assets/printing.jpg'
import banner3 from '../assets/payment.jpg'
import banner5 from '../assets/eventsnew.jpg'
import banner6 from '../assets/new1.jpg'
import banner7 from '../assets/new1a.jpg'
import Image from 'next/image';
import styles from '../../styles/mainHero.module.css'
import icon from '../assets/creative/check_4505201.png'
import icon2 from '../assets/creative/check_4505201.png'
import icon3 from '../assets/creative/lock_8936903.png'
import icon1 from '../assets/creative/reload_3325405.png'


export const carouselItems = [
    {
        name:'Value Added Services',
        // image: <Image src={banner1} alt='Africom Media ltd' className={styles.carouselImage}  />,
        desc:'Enhancing Value with Premium Services.',
        image:banner2,
    },
    {
        name:'Communication',
        // image:<Image src={banner2} alt='Value Added Service' className={styles.carouselImage} />,
        desc:'Transforming Communication for Better Connections.',
        image:banner1,
    },
    {
        name:'Payments',
        // image:<Image src={banner3} alt='Printing Services' className={styles.carouselImage} />,
        desc:'Elevating Branding and Printing Solutions.',
        image:banner3,
    },
    {
        name:'Branding/Printing',
        // image: <Image src={banner4} alt='Payment Services' className={styles.carouselImage} />,
        desc:'Elevating Branding and Printing Solutions.',
        image:banner4,
    },
    {
        name:'Events',
        // image: <Image src={banner4} alt='Payment Services' className={styles.carouselImage} />,
        desc:'Innovative Event Solutions for You.',
        image:banner5,
    },
]

export const icons = [
    {
        icon:icon1,
        desc:'fast service'
    },
    {
        icon:icon2,
        desc:'easy to use'
    },
    {
        icon:icon3,
        desc:'secure'
    },
]

