import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ to, children }) => {
  return (
    <div style={
      { 
        display: 'inline-block',
        marginTop: '5px',
        padding: '5px', 
        border: '1px solid #0875FF', 
        borderRadius: '3px' 
      }
    }>
      <Link to={to} style={{ textDecoration: 'none', color: '#0875FF' }}>
        {children}
      </Link>
    </div>
  )
};

export default LinkButton;