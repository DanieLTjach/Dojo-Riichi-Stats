import { useState, useEffect } from "react";

const useResultsData = () => {
    const [currentPageUser, setCurrentPageUser] = useState(1);
    const [currentPageGame, setCurrentPageGame] = useState(1);
    const [dayGamesList, setDayGamesList] = useState([]);
    const [userList, setUserList] = useState([]);

    // fetch data
    useEffect(() => {
        async function getResultsUser() {
            try {
                const response = await fetch('http://localhost:5500/getLastDayGames');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setDayGamesList(data);

                // Calculate RatingChange for each user
                const calculatedUserList = [];
                for (let game of data) {
                    for (let key in game) {
                        if (typeof game[key] === 'object') {
                            const userObject = game[key];
                            const existingUser = calculatedUserList.find((user) => user.UserID === userObject.UserID);
                            if (existingUser) {
                                existingUser.RatingChange = parseFloat((existingUser.RatingChange + userObject.RatingChange).toFixed(1));
                            } else {
                                calculatedUserList.push({ ...userObject });
                            }
                        }
                    }
                }
                setUserList(calculatedUserList);
            } catch (error) {
                console.error("Ошибка: " + error);
            }
        }
        getResultsUser();
    }, []);

    // Pagination logic for users
    const itemsPerPageUser = 8;
    const totalUsers = userList.length;
    const indexOfLastUser = currentPageUser * itemsPerPageUser;
    const indexOfFirstUser = indexOfLastUser - itemsPerPageUser;
    const currentUsers = userList.slice(indexOfFirstUser, indexOfLastUser);
    const countPagesUser = Math.ceil(totalUsers / itemsPerPageUser);
    const paginateUser = (pageNumber) => setCurrentPageUser(pageNumber);

    // Pagination logic for games
    const itemsPerPageGame = 6;
    const totalGames = dayGamesList.length;
    const indexOfLastGame = currentPageGame * itemsPerPageGame;
    const indexOfFirstGame = indexOfLastGame - itemsPerPageGame;
    const currentGame = dayGamesList.slice(indexOfFirstGame, indexOfLastGame);
    const countPagesGame = Math.ceil(totalGames / itemsPerPageGame);
    const paginateGame = (pageNumber) => setCurrentPageGame(pageNumber);

    return {
        currentPageUser,
        currentPageGame,
        currentUsers,
        countPagesUser,
        paginateUser,
        currentGame,
        countPagesGame,
        paginateGame,
        dayGamesList,
    };
};

export default useResultsData;
