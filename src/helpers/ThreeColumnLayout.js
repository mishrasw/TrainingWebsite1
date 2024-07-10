import React from 'react';
import '../style/ThreeColumnLayout.css';

const ThreeColumnLayout = ({ title1, text1, title2, text2, title3,text3 }) => {
    const lines = text1.split('<br />');
    const lines1 = text2.split('<br />');
    const lines2 = text3.split('<br />');
  return (
    <div className="container">
      <div className="column">
        <h2>{title1}</h2>
        <p>
        {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index !== lines.length - 1 && <br />}
        </React.Fragment>
      ))}
        </p>
      </div>
      <div className="column">
        <h2>{title2}</h2>
        <p>      
        {lines1.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index !== lines1.length - 1 && <br />}
        </React.Fragment>
      ))}
      </p>
      </div>
      <div className="column">
        <h2>{title3}</h2>
        <p>      
        {lines2.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index !== lines2.length - 1 && <br />}
        </React.Fragment>
      ))}
      </p>
      </div>
    </div>
  );
};

export default ThreeColumnLayout;