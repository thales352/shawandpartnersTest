import React from "react";
import styles from "../../assets/styles/app.module.css";
import { Link } from "react-router-dom";

const App = ({ children }) => {
  return (
    <>
      <header>
        <nav className={styles.menu}>
          <Link to="/" className={styles.link}>
            Ínicio
          </Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.links}>
          <a
            className={styles.link}
            href="https://shawandpartners.com/full-back-front-test/"
            target="blank"
          >
            Test conditions
          </a>
        </div>
        <p className={styles.copyrights}>&copy; 2023 Web-app-git</p>
      </footer>
    </>
  );
};

export default App;
