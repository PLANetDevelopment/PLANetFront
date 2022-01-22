import React from 'react';
import { Link } from 'react-router-dom';
import { RiHomeLine } from 'react-icons/ri';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { FiBook } from 'react-icons/fi';
import { AiOutlineGift } from 'react-icons/ai';
import styles from '../Footer/Footer.module.css';




function Footer({activeMenu}) {
  return (
    <div className={styles.menu} >
      <Link to="/" className={activeMenu === 'home' ? styles.focused:styles.link}>
        <RiHomeLine  className={styles.icon}/>
      </Link>
      <Link to="/calendar" className={activeMenu === 'calendar' ? styles.focused:styles.link}>
        <IoCalendarNumberOutline  className={styles.icon}/>
      </Link>
      <Link to="/statistics" className={activeMenu === 'statistics' ? styles.focused:styles.link}>
        <IoAnalyticsOutline  className={styles.icon}/>
      </Link>
      <Link to="/diary" className={activeMenu === 'diary' ? styles.focused:styles.link}>
        <FiBook  className={styles.icon}/>
      </Link>
      <Link to="/news" className={activeMenu === 'news' ? styles.focused:styles.link}>
        <AiOutlineGift  className={styles.icon}/>
      </Link>
    </div>
  );
}

export default Footer;
