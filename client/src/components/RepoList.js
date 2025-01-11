import { useLocation, Link } from "react-router-dom";

const RepoList = ({ repos: initialRepos, user }) => {
  const location = useLocation();
  const repos = location.state?.repos || initialRepos;


  console.log(user);

  return (
    <div className="repo-list-container">
      {user && (
        <div className="user-info">
          <div className="user-details">
            <div className="followers-following">
            <button className="followers-button">
              <Link to="/followers" state={{ username: user.login }} style={{ textDecoration: "none" }}>
                View Followers
              </Link>
            </button>
            </div>
          </div>
        </div>
      )}
      <div className="repo-list">
        {repos &&
          repos.map((repo) => (
            <div key={repo.id} className="repo-card">
              <Link
                to={`/repository/${repo.name}`}
                state={{ repo, repos, username: user?.login }}
                className="repo-link"
                style={{ textDecoration: "none" }}
              >
                <div className="repo-header">
                  <img
                    src="https://banner2.cleanpng.com/20180503/asq/avdqubk64.webp"
                    alt="Avatar"
                    className="repo-avatar"
                  />
                  <div>
                    <div className="repo-name">{repo.name}</div>
                    <div className="repo-description">{repo.description}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div>
        {!user && !repos && (
          <div className="no-repo-container">
            <div className="no-repo-text">
              <div><h3>GitHub user to view their repositories </h3></div>
            </div>
            <div className="no-repo-avatar"> 
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/768px-Octicons-mark-github.svg.png" alt="Avatar" className="no-repo-avatar" />
            </div>
          </div>

        )}
      </div>
    </div>
  );
};

export default RepoList;
