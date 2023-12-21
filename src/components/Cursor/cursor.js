import React from 'react';
import useCustomCursor from '../../hooks/useCustomCursor';
import './cursor.css';


const CustomCursorComponent = () => {
  const cursorPosition = useCustomCursor();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'red',
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
      }}
    />
  );
};

export default CustomCursorComponent;