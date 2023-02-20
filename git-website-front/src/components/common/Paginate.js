import { useState } from "react";
import styles from "../../assets/styles/paginate.module.css";

function Paginate({ itemsPerPage, totalItems, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  function listyle(n) {
    return currentPage === n ? styles["liclick"] : styles["list-item"];
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {pageNumbers.map((number) => (
          <li key={number} className={listyle(number)}>
            <div onClick={() => handleClick(number)} className={styles.button}>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Paginate;
