import React from "react";
import { Link } from "@reach/router";
import styles from "../Components/NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.nav}>
      <ul className={styles.navlinks}>
        <b className={styles.header}>RecipeMe </b>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>

        <Link to="About" style={{ textDecoration: "none" }}>
          <li>About</li>
        </Link>
        <Link to="Recipes" style={{ textDecoration: "none" }}>
          <li>Recipes</li>
        </Link>
        <Link to="Build" style={{ textDecoration: "none" }}>
          <li>Build</li>
        </Link>
      </ul>
    </div>
  );
}
export default NavBar;
