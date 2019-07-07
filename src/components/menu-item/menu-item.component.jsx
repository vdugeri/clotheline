import React from 'react';
import './menu-item.styles.scss';

export const MenuItem = ({ title, imgUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div className="background-image"
      style={{ background: `url(${imgUrl})` }}
    />
    <div className="content">
      <h2 className="title">{title.toUpperCase()}</h2>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

