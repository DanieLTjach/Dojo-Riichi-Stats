import { useState, useEffect } from "react";
import { addEmojiToName } from './playerEmojis';

const useResultsData = () => {
    const [currentPageUser, setCurrentPageUser] = useState(1);
    const [currentPageGame, setCurrentPageGame] = useState(1);
    const [dayGamesList, setDayGamesList] = useState([]);
    const [userList, setUserList] = useState([]);
    const addEmojisToGames = (games) => {
      return games.map(game => {
        const newGame = { ...game };
        for (let i = 1; i <= 4; i++) {
          const playerKey = `player_${i}`;
          if (newGame[playerKey]) {
            newGame[playerKey] = {
              ...newGame[playerKey],
              UserName: addEmojiToName(newGame[playerKey].UserName)
            };
          }
        }
        return newGame;
      });
    };

    // fetch data
    useEffect(() => {
        async function getResultsUser() {
            try {
                const response = await fetch('https://dojo-stats.pp.ua/api/getLastDayGames');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                let data = await response.json();
                data = addEmojisToGames(data);
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
        userList,
    };
};

export default useResultsData;
