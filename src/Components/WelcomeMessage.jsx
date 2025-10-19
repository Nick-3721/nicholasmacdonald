import React from 'react';
import styles from './WelcomeMessage.module.css';


export default function WelcomeMessage( { height } ) {
  const messageHeight = height // *1.5 - to change calculation 
  const messageText = "Click to see work - ";
  const rotation = 360 / messageText.length;

  return (
      <div 
        className={`${styles.message} WELCOME`}
        style={{
          width: messageHeight,
          height: messageHeight
        }}
      >
        {messageText.split("").map((char, index) => (
          <span
            key={index}
            className={styles.character}
            style={{ 
              fontSize: messageHeight / 2,
              height: 35,
              width: messageHeight / 2,
              transform: `rotate(${index * rotation}deg) translate(0px, -${messageHeight/2}px)` 
            }}
          >
              {char}
            </span>
        ))}
      </div>
  );
}
