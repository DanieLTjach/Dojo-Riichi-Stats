import useResultsData from "../../../entities/utils/useResultsData";
import "./style.css";
import DayResultsGame from "../../../components/desktop/dayResultsGame/DayResultsGame";
import DayResultUser from "../../../components/desktop/dayResultUser/DayResultUser";

const Results = () => {

    const {
        currentPageUser,
        currentPageGame,
        currentUsers,
        countPagesUser,
        paginateUser,
        currentGame,
        countPagesGame,
        paginateGame,
        dayGamesList,
    } = useResultsData();

    return (
        <div className="app__main_results">
            <div className="app__main_dayResultsUser">
                <h2>Результати гравців за день</h2>
                <div className="app__main_dayResultsUser_list">
                    <div className="app__main_dayResultsUser_list_title">
                        <p>Гравець:</p>
                        <span>Результат:</span>
                    </div>
                    {
                        currentUsers.length === 0 ? <p className="loader">Завантаження...</p> :
                            currentUsers.map((user, index) => {
                                return (
                                    <DayResultUser key={index} user={user} />
                                );
                            })
                    }
                    {countPagesUser > 1 && (
                        <div className="app__main_dayResultsUser_pagination">
                            {Array.from({ length: countPagesUser }).map((_, index) => (
                                <button
                                    className={currentPageUser === index + 1 ? "app__main_dayResultsGame_pagination_btn active" : "app__main_dayResultsGame_pagination_btn"}
                                    key={index}
                                    onClick={() => paginateUser(index + 1)}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="app__main_dayResultsGame">
                <h2>Останні ігри за день</h2>
                <div className="app__main_dayResultsGame_list">
                    {
                        dayGamesList.length === 0 ? <p className="loader">Завантаження...</p> :
                            currentGame.map((game, index) => {
                                return (
                                    <DayResultsGame key={index} game={game} />
                                );
                            })
                    }
                </div>
                {countPagesGame > 1 && (
                    <div className="app__main_dayResultsGame_pagination">
                        {
                            Array.from({ length: countPagesGame }).map((_, index) => {
                                return (
                                    <button
                                        className={currentPageGame === index + 1 ? "app__main_dayResultsGame_pagination_btn active" : "app__main_dayResultsGame_pagination_btn"}
                                        key={index}
                                        onClick={() => paginateGame(index + 1)}>{index + 1}
                                    </button>
                                );
                            })
                        }
                    </div>
                )}
            </div>
        </div>
    );
}

export default Results;
