import React from 'react';
import useCustomCursor from '../../hooks/useCustomCursor';
import { color, motion } from 'framer-motion';
import './cursor.css';


const CustomCursorComponent = () => {
  const cursorPosition = useCustomCursor();


  return (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: 'red',
        transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
        opacity: 0.75, 
        zIndex: 3  
      }}>
       
    </div>
  );
};

export default CustomCursorComponent;