import { useState, useEffect } from "react";
import PlayersCard from "../../components/playerCard/PlayersCard";
import playerList from "../../entities/utils/playersList";
import "./style.css";

const Statistics = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState("default");
    const [sortedItems, setSortedItems] = useState([]);
    const itemsPerPage = 25;
    const totalItems = playerList.length;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        let sortedList = [...playerList];
        switch (sortOption) {
        case "default":
            sortedList.sort((a, b) => a.id - b.id);
            break;
        case "active":
            sortedList.sort((a, b) => b.gamesPlayed - a.gamesPlayed);
            break;
        case "inactive":
            sortedList.sort((a, b) => a.gamesPlayed - b.gamesPlayed);
            break;
        default:
            break;
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedList.slice(indexOfFirstItem, indexOfLastItem);

    setSortedItems(currentItems);

    }, [sortOption, currentPage]);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        setCurrentPage(1); 
    };

return (
    <div className="app__main_statistics">
        <div className="app__main_statistics_title">
            <h1>Players</h1>
            <select onChange={handleSortChange} value={sortOption}>
                <option value="default">По замовчуванню</option>
                <option value="active">Від великої кількості ігор до меншого</option>
                <option value="inactive">Від меншої кількості ігор до більшої</option>
            </select>
        </div>
        <div className="players">
            { 
                sortedItems.length === 0 ? <p style={{fontSize: 30 + 'px', fontWeight: 600}}>Гравців не знайдено</p> :
                <>
                    <button className="pagination__btn" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
                    <div className="players__content">
                        {
                            sortedItems.map((player) => (
                                <PlayersCard key={player.id} id={player.id} nickname={player.name} games={player.gamesPlayed}/>
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
