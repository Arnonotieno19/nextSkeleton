import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import pic1 from '../assets/creative/1.png'
import pic2 from '../assets/creative/2.png'
import pic3 from '../assets/creative/11.jpg'
import pic4 from '../assets/creative/4.png'
import pic5 from '../assets/creative/5.jpg'
import pic6 from '../assets/creative/6.jpg'
import pic7 from '../assets/creative/7.jpg'
import pic8 from '../assets/creative/8.jpg'
import pic9 from '../assets/creative/9.png'
import pic10 from '../assets/creative/10.jpg'
import pic11 from '../assets/creative/11.jpg'
import pic12 from '../assets/creative/12.jpg'
import pic13 from '../assets/creative/13.jpg'
import styles from  '../../styles/shuffle.module.css'
import Image from 'next/image';


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



const creativeshuffle =[
  {
      id: 1,
      img:pic1,
  }, 
  {
      id: 2,
      img:pic3,
  }, 
  {
      id: 3,
      img:pic6,
  }, 
  {
      id: 4,
      img:pic9,
  }, 
  {
      id: 5,
      img:pic2,
  },
  {
      id: 6,
      img:pic5,
  }, 
  {
      id: 7,
      img:pic13,
  }, 
  {
      id: 8,
      img:pic7,
  }, 
  {
      id: 9,
      img:pic12,
  }, 
  {
      id: 10,
      img:pic8,
  }, 
  {
      id: 11,
      img:pic4,
  }, 
  {
      id: 12,
      img:pic13,
  },   
  
]


const generateSquares = () => {
  return shuffle(creativeshuffle).map((content, id) => (
    <motion.div
      key={content.id}
      layout
      transition={{ duration: 1.5, type: 'spring' }}
      className={styles.shuffleHolder}
      style={{
      
        backgroundSize: "cover",
      }}
    ><Image key={id} src={content.img} alt="Africom"  className={styles.creativeImage}/></motion.div>
  ));
};

const ShuffleGrid = () => {
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
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((content) => content)}
    </div>
  );
};

export default ShuffleGrid;



const squareStyle = {
  width: '25%',
  height: '25%',
  display: 'inline-block',
  margin: '0',
  padding: '0',
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  height: '450px',
  gap: '1rem',
};
