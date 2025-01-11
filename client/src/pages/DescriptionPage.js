


import { useLocation, Link, useNavigate } from "react-router-dom";

const DescriptionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { repo, repos } = location.state || {};
  if (!repo) {
    return <div>No repository details available.</div>;
  }

  return (
    <div className="repo-description-page">
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>
      <p>
        <strong>Language:</strong> {repo.language || "Not specified"}
      </p>
      <p>
        <strong>Forks:</strong> {repo.forks_count}
      </p>
      <p>
        <strong>Stars:</strong> {repo.stargazers_count}
      </p>
      <p>
        <strong>Open Issues:</strong> {repo.open_issues_count}
      </p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
      <br />


      <button
        className="back-button"
        onClick={() =>
          navigate(-1)
        }
      >
        Back to Repository List
      </button>
    </div>
  );
};

export default DescriptionPage;
