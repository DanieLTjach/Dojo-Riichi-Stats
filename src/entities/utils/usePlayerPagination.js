import { useState, useEffect } from "react";

const usePlayerPagination = (playerList, sortOption, currentPage, itemsPerPage) => {
    const [sortedItems, setSortedItems] = useState([]);
    const totalItems = playerList.length;

    useEffect(() => {
        let sortedList = [...playerList];

        switch (sortOption) {
            case "default":
                sortedList.sort((a, b) => a.id - b.id);
                break;
            case "active":
                sortedList.sort((a, b) => b.playerStats.gamesPlayed - a.playerStats.gamesPlayed);
                break;
            case "inactive":
                sortedList.sort((a, b) => a.playerStats.gamesPlayed - b.playerStats.gamesPlayed);
                break;
            default:
                break;
        }

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = sortedList.slice(indexOfFirstItem, indexOfLastItem);

        setSortedItems(currentItems);
    }, [sortOption, currentPage, playerList, itemsPerPage]);

    return { sortedItems, totalItems };
};

export default usePlayerPagination;
