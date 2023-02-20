import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const { since } = useParams() || 0;
  const [users, setUsers] = useState([]);
  const [link, setlink] = useState([]);

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

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={{
                pathname: `/user/${user.login}`,
              }}
            >
              {user.id} - {user.login}
            </Link>
          </li>
        ))}
      </ul>
      <p>{link}</p>
    </div>
  );
}
