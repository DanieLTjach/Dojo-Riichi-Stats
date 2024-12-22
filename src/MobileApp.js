import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Header from "./components/mobile/header/Header";
import Results from "./pages/mobile/results/Results";
import Statistics from "./pages/mobile/statistics/Statistics";
import Player from "./pages/mobile/player/Player";
import Rating from "./pages/mobile/rating/Rating";

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
            setPlayerList(data);
        } catch (error) {
            console.error("Ошибка: " + error);
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
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
