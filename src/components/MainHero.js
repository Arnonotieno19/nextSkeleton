import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {carouselItems} from '../utils/carouselCont'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/mainHero.module.css'
import Image from 'next/image';


const MainHero = () => {
  return (
    <Carousel className={styles.carousel}>
        {carouselItems.map((item, index) => (
            <Carousel.Item  className={styles.carouselItem} key={index}>
                    <Image className={styles.carouselImage} src={item.image} alt="First slide" />
                <Carousel.Caption className={styles.captionHolder}>
                    <h3 className={styles.carouselHeading}>{item.name}</h3>
                    <p  className={styles.carouselDesc}>{item.desc}</p>
                </Carousel.Caption>
            </Carousel.Item>
    
        ))}
    </Carousel>
  )
}

export default MainHero