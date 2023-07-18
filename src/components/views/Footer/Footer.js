import React from 'react';
import styles from './Footer.module.scss'; 

const Footer = () => {
  return (
    <div className={styles['footer-container']}>
      Copyright &copy; BlogApp 2023
    </div>
  );
};

export default Footer;
