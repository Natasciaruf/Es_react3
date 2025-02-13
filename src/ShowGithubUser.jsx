import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ShowGithubUser() {
  const { username } = useParams();  // Ottieni il nome utente dalla URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUser(data);
    };
    
    fetchUserData();
  }, [username]);

  if (!user) {
    return <p>Caricamento...</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.avatar_url} alt={user.name} width={100} />
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">Profilo GitHub</a>
    </div>
  );
}

export default ShowGithubUser;
