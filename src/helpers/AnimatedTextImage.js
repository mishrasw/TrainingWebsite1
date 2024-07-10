import React from 'react';
import "../style/AnimatedTextImage.css"

const AnimatedTextImage = ({ title, text, image }) => {
  return (
    <div className="containerhead">
    <h1 className="header">{title}</h1>
    <div className="animatedcontainer">
      <div className="image">
        <img src={image} alt="Sample" />
      </div>
      <div className="text">
        {Array.isArray(text)
        ? text.map(element => {
            return <p className="lines">{element}</p>;
          })
        : text}
      </div>
    </div>
    </div>
  );
};


export default AnimatedTextImage;