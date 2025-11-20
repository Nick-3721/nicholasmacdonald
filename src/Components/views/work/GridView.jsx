import React from 'react'
import styles from './GridView.module.css'
import { motion } from 'framer-motion';

  const images = import.meta.glob('../../../assets/images/homepage/*{.jpg,gif}', {
    eager: true,
  });
  console.log(images)

export default function GridView() {



  return (
    <div className={styles.grid}>
      {Object.values(images).map((mod, index) => {
        // extract filename from path: /src/assets/images/homepage/filename.jpg => filename
        const fullPath = mod.default;
        const filename = fullPath.substring(fullPath.lastIndexOf('/') + 1);
        const nameWithoutExtension = filename.substring(0, filename.lastIndexOf('.'));
        
        return (
          <motion.div 
            key={index} 
            className={styles.grid_item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.01,  margin: "0px 0px -150px 0px" }}
            // viewport={{ once: false, amount: 0.3, margin: "0px 0px 200px 0px" }}
            
            custom={index}
            variants={{
              hidden: { scale: 1, opacity: 0, filter: "blur(5px)",
 },
              visible: (i) => ({
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  delay: (i % 6) * 0.15, // Reset every 6 items (adjust based on your grid columns)
                  duration: 0.4,
                  ease: "easeOut"
                }
              })
            }}
          >
            <img 
              src={mod.default} 
              alt={`Grid item ${index + 1}`} 
              className={styles.grid_image} 
            />
            <p className={styles.grid_title} >0{index + 1} / {nameWithoutExtension}</p>
          </motion.div>
        );
      })}
    </div>
  )
}
