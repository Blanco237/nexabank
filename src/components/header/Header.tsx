import React from "react";
import styles from "./header.module.css";
import { FaSearch } from "react-icons/fa";
import { FaArrowsTurnRight } from "react-icons/fa6";

const Header = () => {
  return (
    <header className={styles.body}>
      <div className={styles.text}>
        <h5>Welcome, Rose</h5>
        <p>Ascendia Financial Group</p>
      </div>
      <div className={styles.actions}>
        <div className={styles.searchField}>
          <input type="text" placeholder="Search anything..." />
          <span className={styles.icon}>
            <FaSearch />
          </span>
        </div>
        <button className={styles.transfer}>
          <span className={styles.icon}>{<FaArrowsTurnRight />}</span>
          Transfer Money
        </button>
      </div>
    </header>
  );
};

export default Header;
