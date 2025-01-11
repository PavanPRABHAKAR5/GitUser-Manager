import React, { useState, useEffect } from "react";
import RepoList from "./RepoList";
import axios from 'axios';
import { useLocation } from "react-router-dom";

const SearchInput = () => {
  const [username, setUsername] = useState({
    username: ''
  });
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState(null)
  const location = useLocation();

  const handleSearch = async () => {

 if (username.username === '') {
      alert('Please enter a username')
      return
    }
    try {
      const response = await axios.post('http://localhost:3000/api/v1/users/userInfo', { username: username.username });
      let responseData = response.data.message;
      setUser(responseData)

      if(responseData === 'User already exists'){
        const response = await axios.post('http://localhost:3000/api/v1/users/fetchUser', { username: username.username });
        let responseData = response.data.message;
        setUser(responseData)
      }

      const repoResponse = await axios.get(`https://api.github.com/users/${username.username}/repos`);
      console.log(repoResponse.data)
      setRepos(repoResponse.data)

    } catch (err) {
      if (err) {
        console.log(err.response.data.message)
        alert(err.response.data.message)
        setUsername({ username: '' })
      }
    }
  };

  useEffect(() => {

  }, [location.state]);

  return (
    <>
      <div className="user-search">
        <div >
          <input className="search-input"
            type="text"
            placeholder="Enter GitHub username"
            value={username.username}
            onChange={e => setUsername({ username: e.target.value })}
          />
        </div>
        <div>
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className="user-info">
        {user && user.login &&
          <div className="user-info-container">
            <div className="user-avatar">
              <img className="user-profile" src={user.avatar_url} alt="user avatar" width="350px" height="350px"  style={{ borderRadius: '50%' }} />
            </div>
            <div className="user-details">
              <h2 className="user-h1">{user.login}</h2>
              <p className="user-bio">{user.bio}</p>
              <p className="info-key">Followers: <span className="info-value">{user.followers}</span></p>
              <p className="info-key">Following:<span className="info-value"> {user.following}</span></p>
              <p className="info-key">Public Repos: <span className="info-value">{user.public_repos}</span></p>
              <p className="info-key">Location: <span className="info-value">{user.location}</span></p>
              <p className="info-key">Company:<span className="info-value">{user.company}</span> </p>
              <p className="info-key">Blog:<span className="info-value"><a>{user.blog}</a></span> </p>
            </div>
          </div>}
      </div>

      <RepoList repos={repos}  user={user}/>
    </>
  )
}

export default SearchInput;



