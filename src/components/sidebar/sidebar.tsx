import React from "react";
import styles from "./sidebar.module.css";
import LogoIcon from "@/icons/logo.icon";
import NavItem from "./navItem";
import {
  FaCalendar,
  FaChartLine,
  FaCog,
  FaCreditCard,
  FaHeadphones,
  FaHome,
  FaPiggyBank,
} from "react-icons/fa";
import NavDropDown from "./navDropDown";
import { FaArrowsTurnRight } from "react-icons/fa6";
import NavUser from "./navUser";

const Sidebar = () => {
  return (
    <section className={styles.body}>
      <div>
        <div className={styles.logoWrapper}>
          <LogoIcon className="size-9" />
          <h3>NexaBank</h3>
        </div>
        <div className={styles.links}>
          <NavItem icon={<FaHome />} link="/" title="Dashboard" />
          <NavDropDown
            icon={<FaPiggyBank />}
            title="Accounts"
            items={[
              { label: "Checking *1234", value: "$2,450.15" },
              { label: "Savings *9844", value: "$503,150.55" },
              { label: "Payroll", value: "$112,456.00" },
            ]}
          />
          <NavItem
            icon={<FaCalendar />}
            link="/transaction"
            title="Transactions"
          />
          <NavItem
            icon={<FaArrowsTurnRight />}
            link="/payment"
            title="Payments"
          />
          <NavItem icon={<FaCreditCard />} link="/card" title="Cards" />
          <NavItem icon={<FaChartLine />} link="/portfolio" title="Portfolio" />
        </div>
      </div>
      <div className={styles.other}>
        <NavItem icon={<FaHeadphones />} link="/support" title="Support" />
        <NavItem icon={<FaCog />} link="/settings" title="Settings" />
        <NavUser
          image="https://images.unsplash.com/photo-1703012741954-be8a263d6c1d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Rose Clancy"
        />
      </div>
    </section>
  );
};

export default Sidebar;
