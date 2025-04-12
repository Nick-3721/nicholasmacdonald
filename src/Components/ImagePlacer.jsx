import React, { useState } from 'react'
import { useTheme } from '@/styles/ThemeProvider';
import { motion } from 'framer-motion';



export default function ImagePlacer({ children }) {
  const { theme } = useTheme();
  
  const [placedImages, setPlacedImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0)

  const imageArray = import.meta.glob('../assets/images/*{.jpg,gif}', {
    eager: true,
  });
  
  const images = Object.values(imageArray).map((mod) => mod.default);
  

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const randomWidth = Math.floor(Math.random() * (320 - 160 + 1) + 160); 

    const newImage = {
      src: images[imageIndex % images.length],
      x,
      y,
      width: randomWidth,
    };

    setPlacedImages((prev) => [...prev, newImage]);
    setImageIndex((prev) => prev + 1);
  }

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'relative',
        width: "100",
        height: "100vh",
        minHeight: "800px",
        display: "flex",
        alignItems: "center",
        overflow: 'hidden',
        backgroundColor: theme.primaryColor}}
    >
      {placedImages.map((img, index) => (
        <motion.img
          key={index}
          src={img.src}
          alt={`placed-${index}`}
          style={{
            position: 'absolute',
            top: img.y,
            left: img.x,
            width: `${img.width}px`,
            pointerEvents: 'none',
          }}
          initial={{ scale: 0, opacity: 0, rotate: 30 }}
          animate={{ scale: 1, opacity: 1, rotate: 0}}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        />
      ))}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
