import { useState } from "react";
import  usePlayerPagination  from "../../../entities/utils/usePlayerPagination";
import PlayersCard from "../../../components/mobile/playersCard/PlayersCard";

import "./style.css";

const Statistics = ({ playerList }) => {
    const [sortOption, setSortOption] = useState("active");

    const { sortedItems } = usePlayerPagination(playerList, sortOption, 1, playerList.length);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

return (
    <div className="mobile__statistics_content">
        <div className="mobile__statistics_content_title">
            <h1>Гравці</h1>
            <select onChange={handleSortChange} value={sortOption}>
                <option value="default">По замовчуванню</option>
                <option value="active">Від великої кількості ігор до меншого</option>
                <option value="inactive">Від меншої кількості ігор до більшої</option>
            </select>
        </div>
        <div className="mobile__statistics_content_players">
            {
                sortedItems.length === 0 ? <p className="loader">Завантаження...</p> :
                sortedItems.map((player, index) => (
                    <PlayersCard key={index} id={player.id} nickname={player.name} games={player.playerStats.gamesPlayed}/>
                ))
            }
        </div>
    </div>
);
};

export default Statistics;
