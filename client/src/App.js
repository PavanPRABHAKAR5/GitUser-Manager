import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DescriptionPage from "./pages/DescriptionPage";
import Header from "./components/Header";
import FollowersPage from "./pages/FollowersPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/repository/:repoName" element={<DescriptionPage />} />
          <Route path="/followers" element={<FollowersPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


