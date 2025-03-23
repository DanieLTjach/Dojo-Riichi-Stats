import { useState } from "react";
import PlayersCard from "../../../components/mobile/playersCard/PlayersCard";
import  usePlayerPagination  from "../../../entities/utils/usePlayerPagination";
import "./style.css";

const Statistics = ({ playerList }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState("active");
    const itemsPerPage = 25;

    const { sortedItems, totalItems } = usePlayerPagination(playerList, sortOption, currentPage, itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        setCurrentPage(1); 
    };

return (
    <div className="app__main_statistics">
        <div className="app__main_statistics_title">
            <h1>Гравці</h1>
            <select onChange={handleSortChange} value={sortOption}>
                <option value="default">За замовчуванням</option>
                <option value="active">Зіграли найбільше</option>
                <option value="inactive">Зіграли найменше</option>
            </select>
        </div>
        <div className="players">
            { 
                sortedItems.length === 0 ? <p className="loader">Завантаження...</p> :
                <>
                    <button className="pagination__btn" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
                    <div className="players__content">
                        {
                            sortedItems.map((player, index) => (
                                <PlayersCard key={index} id={player.id} nickname={player.name} games={player.playerStats.gamesPlayed}/>
                            ))
                        }   
                    </div>
                    <button className="pagination__btn" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}>&gt;</button>
                </>
            }
        </div>
    </div>
);
};

export default Statistics;
