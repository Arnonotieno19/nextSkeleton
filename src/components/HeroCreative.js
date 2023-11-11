import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react'
import styles from '../../styles/heroCreative.module.css'
import { creativeshuffle } from '../utils/creativeShuffle'
import Image from 'next/image'
import ShuffleGrid from "../utils/Shuffle";



const HeroCreative = () => {

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  
    return array;
  };

  const generateSquares = () => {
    return shuffle(creativeshuffle).map((item, id) => (
      <></>
    ));
  };

  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

return (
    <div className={styles.container}>
      <div className={styles.contentTextHolder}>
        <h2 className={styles.contextH1}>We do better everyday</h2>
        <h1 className={styles.contextMain}>Unlocking the next level in Telecom.</h1>
        <p className={styles.contextDesc}>At Africom Media, we are a tech-driven organization 
           with an aim of using the right technology to explore, 
           and innovate new solutions in the dynamic world of mobile and web content. <br/> 
        </p>
        <div className= {styles.missionHolder}> 
          <h2 className={styles.contextH1b}>Our Mission</h2>
          <p className={styles.contextDesc}>To be at the forefront of digital transformation across Africa.</p>
          <h2 className={styles.contextH1b}>Our Promise</h2>
          <p className={styles.contextDesc}>We promise to be your innovative brain with outstanding customer service and excellent value for money.</p>
        </div>

        <span className={styles.learnMore}>Contact us</span>
      </div>
      <div className={styles.imageShuffleHolder}>
        <ShuffleGrid  />
      </div>
      {/* <div className={styles.imageShuffleHolder}>
        {creativeshuffle.map((item, id)=>(
          <div
           key={id}
           className={styles.creativeImage}
           style={{ backgroundImage: `url(${item.img})` , border:'dotted 1px red'}}
          >
          </div>
          ))} 
      </div> */}
    </div>
  )
}

export default HeroCreative

{/* {creativeshuffle.map((item, id)=>(
          <Image key={id} src={item.img} alt="Africom"  className={styles.creativeImage}/>
        ))} */}

      //   <div className={styles.creativeImage}>
      //     {squares.map((sq) => sq)}
      // </div>

        // <motion.div
      //   key={id}
      //   layout
      //   transition={{ duration: 1.5, type: "spring" }}
      //   className={styles.creativeImage}
      //   style={{
      //     backgroundImage: `url(${item.img})`,
      //     backgroundSize: "cover",
      //   }}
      // ></motion.div>

  //     <motion.div 
  //     key={id}
  //     layout 
  //     transition={{ duration: 5.5, type: "spring" }}
  //     // className={styles.creativeImage}
  //     animate={{ x: 31 }}
  //     style={{ background: `url(${item.img})`, backgroundSize: 'cover', height:'110px', width:'135px' }}
  // >

  // </motion.div>