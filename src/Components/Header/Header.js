import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../images/logo.png";
import Nav from "../../Contants/HeaderNav";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_logoDiv}>
        <img className={styles.header_logoDiv_image} src={Logo} alt="alive" />
      </div>
      <div className={styles.header_nav}>
        {Nav.links.map((nav) => {
          return (
            <Link to={nav.link} key={nav.id} className={styles.header_nav_item}>
              {nav.name}
            </Link>
          );
        })}
      </div>
      <div className={styles.header_login}>Login</div>
    </div>
  );
}
