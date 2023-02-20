import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileBox from "../common/ProfileBox";
import Paginate from "../common/Paginate";
import styles from "../../assets/styles/user_list.module.css";

export default function Home() {
  const { since } = useParams() || 0;
  const [users, setUsers] = useState([]);
  const [link, setlink] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        `https://git-resourses.onrender.com/api/users?since=${since}`
      );
      const { data, link } = await response.json();
      setUsers(data);
      setlink(link);
    }
    getUsers();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  return !users ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>Users</h1>
      <ul className={styles.cards}>
        {currentItems.map((user) => (
          <ProfileBox user={user}></ProfileBox>
        ))}
      </ul>
      <Paginate
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
        paginate={paginate}
      />
    </div>
  );
}
