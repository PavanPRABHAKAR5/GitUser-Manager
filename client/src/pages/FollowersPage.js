import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FollowersPage = () => {
  const location = useLocation();
  const { username } = location.state || {}; // Retrieve the username from state
  const [followers, setFollowers] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    const fetchFollowers = async () => {
      if (username) {
        try {
          const response = await axios.get(
            `https://api.github.com/users/${username}/followers`
          );
          setFollowers(response.data);
        } catch (err) {
          console.error("Failed to fetch followers:", err.message);
        }
      }
    };

    fetchFollowers();
  }, [username]);

  if (!username) {
    return <div>No username provided</div>;
  }

  return (
    <div className="followers-page">
      <h1>{username}'s Followers</h1>
      <div className="followers-list">
        {followers.map((follower) => (
          <div key={follower.id} className="follower-card">
            <img
              src={follower.avatar_url}
              alt={follower.login}
              className="follower-avatar"
            />
            <a
              href={follower.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {follower.login}
            </a>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate('/') }>
        Back to Repository List
      </button>
    </div>
  );
};

export default FollowersPage;



