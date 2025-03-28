import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Header from "./components/mobile/header/Header";
import Results from "./pages/mobile/results/Results";
import Statistics from "./pages/mobile/statistics/Statistics";
import Player from "./pages/mobile/player/Player";
import Rating from "./pages/mobile/rating/Rating";
import Resources from "./pages/mobile/resources/Resources";
import { addEmojiToName } from './entities/utils/playerEmojis';

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
            const filteredData = data.filter(player => player.playerStats.gamesPlayed > 0);
            filteredData.forEach(player => {
                player.name = addEmojiToName(player.name);
            });
            setPlayerList(filteredData);
        } catch (error) {
            console.error("Помилка: " + error);
        }
    }
    useEffect(() => {
        getPlayerList();
    }, []);

    return (
        <Router>
            <div className="mobile__app">
                <Header />
                <div className="mobile__app_main">
                    <Routes>
                        <Route path="/" element={<Results />} />
                        <Route path="/statistics" element={<Statistics playerList={playerList} />} />
                        <Route path="/player/:id" element={<Player playerList={playerList} />} />
                        <Route path="/rating" element={<Rating />} />
                        <Route path="/resources" element={<Resources />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
