import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";

import UserPost from "./UserPost";
import Create from "./UserPost/Create";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h2>Understand Redux Toolkit Using API</h2>
      <Routes>
        <Route path="/" element={<UserPost history={navigate} />} />
        <Route path="/create" element={<Create history={navigate} />} />
      </Routes>
    </div>
  );
}

export default App;
