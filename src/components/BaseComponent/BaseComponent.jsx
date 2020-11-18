import React from 'react';
import './BaseComponent.css';

const BaseComponent = ({ text, variantStyle }) => {
  return <div className={`main red ${variantStyle}`}>{text}</div>;
};

export default BaseComponent;
