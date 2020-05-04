import React from 'react';

import './Card.css';

export default ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};
