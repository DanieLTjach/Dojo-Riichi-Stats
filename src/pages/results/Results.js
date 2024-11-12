import { useState, useEffect } from "react";
import "./style.css";
import DayResultsGame from "../../components/dayResultsGame/DayResultsGame";
import DayResultUser from "../../components/dayResultUser/DayResultUser";

const Results = () => {
    const [currentPageUser, setCurrentPageUser] = useState(1);
    const [currentPageGame, setCurrentPageGame] = useState(1);
    const [dayGamesList, setDayGamesList] = useState([]);


    // fetch data
    async function getResultsUser() {
        try {
            const response = await fetch('http://localhost:5500/getLastDayGames');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setDayGamesList(data); 
        } catch (error) {
            console.error("Ошибка: " + error);
        }
    }
    useEffect(() => {
        getResultsUser();
    }, []);

    // calculate RatingChange for each user
    let userList = [];
    for (let i = 0; i < dayGamesList.length; i++) {
        let tempUser = dayGamesList[i];
    
        for (let key in tempUser) {
            if (typeof tempUser[key] === 'object') {
                const userObject = tempUser[key];
                const existingUser = userList.find((user) => user.UserID === userObject.UserID);
                if (existingUser) {
                    existingUser.RatingChange = parseFloat((existingUser.RatingChange + userObject.RatingChange).toFixed(1));
                } else {
                    userList.push({...userObject});
                }
            }
        }
    }

    //pagination for users
    let currentUsers = [];
    let countPagesUser = 1;
    let paginateUser = (pageNumber) => setCurrentPageUser(pageNumber);

    if(userList.length > 10) {
        const itemsPerPageUser = 8;
        const totalUsers = userList.length;
        
        const indexOfLastUser = currentPageUser * itemsPerPageUser;
        const indexOfFirstUser = indexOfLastUser - itemsPerPageUser;
        currentUsers = userList.slice(indexOfFirstUser, indexOfLastUser);

        countPagesUser = Math.ceil(totalUsers / itemsPerPageUser);

        paginateUser = (pageNumber) => setCurrentPageUser(pageNumber);
    } else {
        currentUsers = userList;
        countPagesUser = 1;
        paginateUser = (pageNumber) => setCurrentPageUser(pageNumber);
    }

    //pagination for games
    let currentGame =[];
    let countPagesGame = 1;
    let paginateGame = (pageNumber) => setCurrentPageGame(pageNumber);

    if(dayGamesList.length > 6) {
        const itemsPerPageGame = 6;
        const totalUsers = dayGamesList.length;
        
        const indexOfLastUser = currentPageUser * itemsPerPageGame;
        const indexOfFirstUser = indexOfLastUser - itemsPerPageGame;
        currentGame = dayGamesList.slice(indexOfFirstUser, indexOfLastUser);

        countPagesGame = Math.ceil(totalUsers / itemsPerPageGame);

        paginateUser = (pageNumber) => setCurrentPageUser(pageNumber);
    } else {
        currentGame = dayGamesList;
        countPagesGame = 1;
        paginateUser = (pageNumber) => setCurrentPageUser(pageNumber);
    }

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
                        currentUsers.length === 0 ? <p className="loader">Loading...</p> :
                        currentUsers.map((user, index) => {
                            return (
                                <DayResultUser key={index} user={user} />
                            );
                        })
                    }
                    {currentUsers.length > 10 && (
                        <div className="app__main_dayResultsUser_pagination">
                            {
                                Array.from({ length: countPagesUser }).map((_, index) => {
                                    return (
                                        <button
                                            className={currentPageUser === index + 1 ? "app__main_dayResultsGame_pagination_btn active" : "app__main_dayResultsGame_pagination_btn"}
                                            key={index} 
                                            onClick={() => paginateUser(index + 1)}>{index + 1}
                                        </button>
                                    );
                                })
                            }
                        </div>
                    )}
                </div>
            </div>
            <div className="app__main_dayResultsGame">
                <h2>Останні ігри за день</h2>
                <div className="app__main_dayResultsGame_list">
                    {
                        dayGamesList.length === 0 ? <p className="loader">Loading...</p> :
                        currentGame.map((game, index) => {
                            return (
                                <DayResultsGame key={index} game={game} />
                            );
                        })
                    }
                </div>
                {dayGamesList.length > 6 && (
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
