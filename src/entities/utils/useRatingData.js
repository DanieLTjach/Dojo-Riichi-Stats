import { useState, useEffect } from "react";

const useRatingData = () => {
    const [ratingData, setRatingData] = useState(null);
    const [currentPageUser, setCurrentPageUser] = useState(1);

    useEffect(() => {
        async function fetchAllUsers() {
            try {
                const response = await fetch("https://dojo-stats.pp.ua/api/getAllUsers");
                if (!response.ok) {
                    throw new Error("Failed to fetch rating data");
                }
                const data = await response.json();
                const filteredData = data.filter(player => player.Rating !== 1000);
                setRatingData(filteredData);
            }
            catch (error) {
                console.error("Error fetching rating data", error);
            }
        }
        fetchAllUsers();
    }, []);

    const itemsPerPage = 14;
    const totalUsers = ratingData ? ratingData.length : 0;
    const indexOfLastUser = currentPageUser * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const currentUsers = ratingData ? ratingData.slice(indexOfFirstUser, indexOfLastUser) : [];
    const countPagesUser = Math.ceil(totalUsers / itemsPerPage);
    const paginateUser = (pageNumber) => setCurrentPageUser(pageNumber);

    return {ratingData, currentUsers, countPagesUser, paginateUser, itemsPerPage, currentPageUser};
}

export default useRatingData;
