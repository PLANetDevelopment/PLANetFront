import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { FiCalendar, FiSettings } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { AiOutlineLineChart } from "react-icons/ai";
import styles from "../Footer/Footer.module.css";

function Footer({ activeMenu }) {
  return (
    <div className={styles.menu}>
      <Link
        to="/"
        replace={true}
        style={activeMenu === "home" ? { pointerEvents: "none" } : null}
        className={activeMenu === "home" ? styles.focused : styles.link}
      >
        <RiHomeLine className={styles.icon} />
        <p className={activeMenu === "home" ? styles.text : styles.text2}>홈</p>
      </Link>
      <Link
        to="/calendar"
        replace={true}
        style={activeMenu === "calendar" ? { pointerEvents: "none" } : null}
        className={activeMenu === "calendar" ? styles.focused : styles.link}
      >
        <FiCalendar className={styles.icon} />
        <p className={activeMenu === "calendar" ? styles.text : styles.text2}>
          캘린더
        </p>
      </Link>
      <Link
        to="/statistics"
        replace={true}
        style={activeMenu === "statistics" ? { pointerEvents: "none" } : null}
        className={activeMenu === "statistics" ? styles.focused : styles.link}
      >
        <AiOutlineLineChart className={styles.icon} />
        <p className={activeMenu === "statistics" ? styles.text : styles.text2}>
          통계
        </p>
      </Link>
      <Link
        to="/diary"
        replace={true}
        style={activeMenu === "diary" ? { pointerEvents: "none" } : null}
        className={activeMenu === "diary" ? styles.focused : styles.link}
      >
        <img className={styles.icon_img} src="img/talk.png" alt="talk"></img>
        <p className={activeMenu === "diary" ? styles.text : styles.text2}>
          별별톡
        </p>
      </Link>
      <Link
        to="/setting"
        replace={true}
        style={activeMenu === "setting" ? { pointerEvents: "none" } : null}
        className={activeMenu === "setting" ? styles.focused : styles.link}
      >
        <FiSettings className={styles.icon} />
        <p className={activeMenu === "setting" ? styles.text : styles.text2}>
          설정
        </p>
      </Link>
    </div>
  );
}

export default Footer;
