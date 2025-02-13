import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h3>Lista Utenti GitHub</h3>
      <p>Aggiungi un utente e selezionalo</p>
      <ul>
        {users.map((user) => (
          <li key={user.login}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GithubUserList;
