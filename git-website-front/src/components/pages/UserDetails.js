import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { login } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

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

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <div>ID: {user.id}</div>
      <div>Login: {user.login}</div>
      <div>Profile URL: {user.html_url}</div>
      <div>Creation Date: {user.created_at}</div>
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
          {repos.map((repo) => (
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
    </div>
  );
}
