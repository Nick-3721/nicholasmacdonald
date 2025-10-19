import React, { useState } from 'react'
import { useTheme } from '@/styles/ThemeProvider';
import { motion, AnimatePresence, distance } from 'framer-motion';

export default function ImagePlacer({ children }) {
  const { theme } = useTheme();
  
  const [placedImages, setPlacedImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0)

  const imageArray = import.meta.glob('../assets/images/homepage/*{.jpg,gif}', {
    eager: true,
  });
  
  const images = Object.values(imageArray).map((mod) => mod.default);
  
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ClickX = e.clientX - rect.left;
    const ClickY = e.clientY - rect.top;
    
    // This might need to be changed for mobile widths
    const randomWidth = Math.floor(Math.random() * (320 - 160 + 1) + 160); 

    const newImage = {
      id: Math.random(),
      src: images[imageIndex % images.length],
      x: ClickX,
      y: ClickY,
      width: randomWidth,
    };

    setPlacedImages((prev) => [...prev, newImage]);
    setImageIndex((prev) => prev + 1);
    
    //remove images after X time
    setTimeout(() => {
      setPlacedImages((prev) => prev.filter((img) => img.id !== newImage.id))
    }, 6000)
  }

  const placeImageAt = (x, y) => {
    const randomWidth = Math.floor(Math.random() * (320 - 160 + 1) + 160);
  
    const newImage = {
      id: Math.random(), 
      src: images[imageIndex % images.length],
      x,
      y,
      width: randomWidth,
    };
  
    setPlacedImages((prev) => [...prev, newImage]);
    setImageIndex((prev) => prev + 1);
  
    // Remove image after 2 seconds
    setTimeout(() => {
      setPlacedImages((prev) => prev.filter((img) => img.id !== newImage.id));
    }, 3000);
  };
  
  

  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    const dx = x - lastMousePos.x;
    const dy = y - lastMousePos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
  
    if (distance > 190) {
      placeImageAt(x, y);
      setLastMousePos({ x, y });
    }
  };


  return (
    <div
      onClick={handleClick}
      // onMouseMove={handleMouseMove}
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
      <AnimatePresence>
      {placedImages.map((img) => (
          <motion.img
            // onAnimationComplete={() => console.log("Animation done for", img.id)}
            key={img.id}
            src={img.src}
            alt={img.src.split('/').pop().split('.').slice(0, -1).join('.').replace(/[-_]/g, ' ')}
            style={{
              position: 'absolute',
              top: img.y,
              left: img.x,
              width: `${img.width}px`,
              
              // height: `${img.width}px`,
              // objectFit: "cover",
              // borderRadius: 25,

              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
            // standard spin and fade
            // initial={{ scale: 0, opacity: 0, rotate: -30, x: "-50%", y: "-50%", filter: "blur(8px)" }}
            // animate={{ scale: 1, opacity: 1, rotate: 0, x: "-50%", y: "-50%", filter: "blur(0px)" }}
            // transition={{ duration: 0.2, ease: "easeInOut" }}
            
            // Slide and blur
            // initial={{ x: "-50%", y: "-50%", opacity: 0, filter: "blur(8px)" }}
            // animate={{ x: "-50%", y: "-50%", opacity: 1, filter: "blur(0px)" }}
            // transition={{ duration: 0.3, ease: "easeOut" }}
            initial={{
              scale: 0,
              opacity: 0,
              // rotate: -25,
              x: "-50%",
              y: "-50%",
              filter: "blur(10px)",
            }}
            animate={{
              scale: 1,
              opacity: 1,
              // rotate: 0,
              x: "-50%",
              y: "-50%",
              filter: "blur(0px)",
            }}
            exit={{
              scale: 0,
              opacity: 0,
              // rotate: 15,
              x: "-50%",
              y: "-50%",
              filter: "blur(86px)",
            }}
            transition={{
              scale: { duration: 0.2, ease: "easeOut" },
              opacity: { duration: 0.2, delay: 0.1 },
              // rotate: { duration: 0.3, ease: "easeInOut" },
              filter: { duration: 0.3, delay: 0.1 },
              x: { duration: 0 }, 
              y: { duration: 0 },
            }}
          />
        ))}
        </AnimatePresence>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
