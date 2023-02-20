import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../../assets/styles/user_details.module.css";
import Paginate from "../common/Paginate";
import formatDate from "../../utils/Functions";

export default function Details() {
  const { login } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        `https://git-resourses.onrender.com/api/users/${login}/details`
      );
      const data = await response.json();
      setUser(data);
    }
    getUser();
  }, [login]);

  useEffect(() => {
    async function getRepos() {
      const response = await fetch(
        `https://git-resourses.onrender.com/api/users/${login}/repos`
      );
      const data = await response.json();
      setRepos(data);
    }
    getRepos();
  }, [login]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = repos.slice(indexOfFirstItem, indexOfLastItem);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.all}>
      <h1>User Details</h1>
      <div className={styles.card}>
        <p>ID: {user.id}</p>
        <p>Login: {user.login}</p>
        <p>Profile URL: {user.html_url}</p>
        <p>Creation Date: {formatDate(user.created_at)}</p>
      </div>
      <h2>Public Repositories</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.id}</td>
              <td>{repo.name}</td>
              <td>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.html_url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginate
        itemsPerPage={itemsPerPage}
        totalItems={repos.length}
        paginate={paginate}
      />
    </div>
  );
}
