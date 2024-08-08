import React from 'react'
import styles from './card.module.css';
import { FaCcMastercard } from 'react-icons/fa';

interface CreditCardProps {
    title: string;
    account: string;
    amount: string;
    isLast?: boolean;
}

const CreditCard:React.FC<CreditCardProps> = ({title, account, amount, isLast = false}) => {
  return (
    <div className={`${styles.body} ${isLast ? '' : styles.hidden}`}>
        <div className={`${styles.ellipse} -left-1/3 -top-4`} />
        <div className={`${styles.ellipse} -left-1/3 bottom-20`} />
        <span className='absolute top-4 right-4 text-5xl text-white'><FaCcMastercard /></span>
        <div className={styles.amount}>
            <p>{title}</p>
            <h4>{amount}</h4>
        </div>

        <p className={styles.account}>{account}</p>
    </div>
  )
}

export default CreditCard