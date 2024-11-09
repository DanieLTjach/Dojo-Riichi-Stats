import "./index.css";
import Header from "./components/header/Header";
import Aside from "./components/aside/Aside";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Statistics from "./pages/statistics/Statistics";
import Results from "./pages/results/Results";
import Player from "./pages/player/Player";
import playerList from "./entities/utils/playersList";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__main">
            <Aside />

            <Routes>
              <Route path="/" element={<Results />} />
              <Route path="/statistics" element={<Statistics/>} />
              <Route path="/player/:id" element={<Player playerList={playerList}/>} />
            </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
