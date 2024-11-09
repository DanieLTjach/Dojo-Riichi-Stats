import { useState } from "react";
import "./style.css";
import DayResultsGame from "../../components/dayResultsGame/DayResultsGame";
import dayGamesList from "../../entities/utils/dayGamesList";

const Results = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 6;
    const totalItems = dayGamesList.length;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dayGamesList.slice(indexOfFirstItem, indexOfLastItem);

    const countPages = Math.ceil(totalItems / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className="app__main_results">
            <div className="app__main_dayResultsUser">
                <h2>Результати гравців за день</h2>
                <div className="app__main_dayResultsUser_list">
                <div className="app__main_dayResultsUser_list_title">
                    <p>Гравець:</p>
                    <span>Результат:</span>
                </div>
                <div className="app__main_dayResultsUser_item">
                    <p>Nickname</p>
                    <span>-12</span>
                </div>
                </div>
            </div>
            <div className="app__main_dayResultsGame">
                <h2>Останні ігри за день</h2>
                <div className="app__main_dayResultsGame_list">
                    {
                        currentItems.length === 0 ? <p>Ігор не знайдено</p> :
                        currentItems.map((game) => (
                            <DayResultsGame key={game.id} game={game} />
                        ))
                    }
                </div>
                <div className="app__main_dayResultsGame_pagination">
                    {
                        Array.from({ length: countPages }, (_, i) => (
                            <button className={currentPage === i + 1 ? "app__main_dayResultsGame_pagination_btn active" : "app__main_dayResultsGame_pagination_btn"} key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Results;