import React from "react";
import styles from "./accounts.module.css";
import { FaArrowsTurnRight } from "react-icons/fa6";
import { FaChartPie, FaMarsStroke, FaSnowflake } from "react-icons/fa";
import CreditCard from "./card";

const accounts = [
  {
    title: "Payroll",
    amount: "$120,544",
    account: "**** 1234",
  },

  {
    title: "Savings",
    amount: "$120,544",
    account: "**** 1234",
  },
  {
    title: "Current",
    amount: "$120,544",
    account: "**** 1234",
  },
  {
    title: "Checking",
    amount: "$120,544",
    account: "**** 1234",
  },
];

const Accounts = () => {
  const calculateOpacity = (length: number, index: number) => {
    if (length <= 1) {
      return 1;
    } else {
      return 0.5 + (index / (length - 1)) * 0.5;
    }
  };

  const calculateWidth = (length: number, index: number) => {
    if (length <= 1) {
        return '100%';
    } else {
        return 75 + (index / (length - 1)) * 25 + '%';
    }
}

  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <h4>My Accounts</h4>
        <button>See All</button>
      </div>
      <div className={styles.cards} style={{minHeight: `${220 +(accounts.length * 10)}px`}}>
        {accounts.map((account, index) => (
          <div
            key={`card_${index}`}
            className={`${styles.card} `}
            style={{
              top: `${index * 20}px`,
              opacity: `${calculateOpacity(accounts.length, index)}`,
              width: calculateWidth(accounts.length, index)
            }}
          >
            <CreditCard {...account} isLast={index === (accounts.length - 1)} />
          </div>
        ))}
      </div>
      <div className={styles.actions}>
        <div className={styles.action}>
          <span className={styles.icon}>
            <FaArrowsTurnRight />
          </span>
          <p>Transfer</p>
        </div>
        <div className={styles.action}>
          <span className={styles.icon}>
            <FaSnowflake />
          </span>
          <p>Freeze</p>
        </div>
        <div className={styles.action}>
          <span className={styles.icon}>
            <FaChartPie />
          </span>
          <p>Analytics</p>
        </div>
        <div className={styles.action}>
          <span className={styles.icon}>
            <FaMarsStroke />
          </span>
          <p>More</p>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
