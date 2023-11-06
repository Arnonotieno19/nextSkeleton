import banner1 from '../assets/heroFinal2reduced.jpg';
import banner2 from '../assets/vas.jpg'
import banner4 from '../assets/printing.jpg'
import banner3 from '../assets/payment.jpg'
import Image from 'next/image';
import styles from '../../styles/mainHero.module.css'

export const carouselItems = [
    {
        name:'First Slide Label',
        // image: <Image src={banner1} alt='Africom Media ltd' className={styles.carouselImage}  />,
        desc:'This is the first carousel image',
        image:banner1,
    },
    {
        name:'First Slide Label',
        // image:<Image src={banner2} alt='Value Added Service' className={styles.carouselImage} />,
        desc:'This is the first carousel image',
        image:banner2,
    },
    {
        name:'First Slide Label',
        // image:<Image src={banner3} alt='Printing Services' className={styles.carouselImage} />,
        desc:'This is the first carousel image',
        image:banner3,
    },
    {
        name:'First Slide Label',
        // image: <Image src={banner4} alt='Payment Services' className={styles.carouselImage} />,
        desc:'This is the first carousel image',
        image:banner4,
    },
]
