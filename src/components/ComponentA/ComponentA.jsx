import React from 'react';
import './ComponentA.css';

const ComponentA = ({text, style}) => {
    return (
          <div className={`main red ${style}`}>
            {text || 'Component A'}
          </div>
    );
};

export default ComponentA;