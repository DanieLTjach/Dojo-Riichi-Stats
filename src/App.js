import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/desktop/header/Header";
import Aside from "./components/desktop/aside/Aside";
import Statistics from "./pages/desktop/statistics/Statistics";
import Results from "./pages/desktop/results/Results";
import Player from "./pages/desktop/player/Player";
import Rating from "./pages/desktop/rating/Rating";

function App() {
  const [playerList, setPlayerList] = useState([]);

  // fetch data
  async function getPlayerList() {
      try {
          const response = await fetch('https://dojo-stats.pp.ua/api/getUsers');
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          const filteredData = data.filter(player => player.playerStats.gamesPlayed > 1);
          setPlayerList(filteredData);
      } catch (error) {
          console.error("Ошибка: " + error);
      }
  }
  useEffect(() => {
      getPlayerList();
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__main">
            <Aside />

            <Routes>
              <Route path="/" element={<Results />} />
              <Route path="/statistics" element={<Statistics playerList={playerList}/>} />
              <Route path="/player/:id" element={<Player playerList={playerList}/>} />
              <Route path="/rating" element={<Rating />} />
            </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
