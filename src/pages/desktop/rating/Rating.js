import useRatingData from "../../../entities/utils/useRatingData";
import "./style.css";

const Rating = () => {

    const { currentUsers, countPagesUser, paginateUser, itemsPerPage , currentPageUser} = useRatingData();

    const startingIndex = (currentPageUser - 1) * itemsPerPage;

    return (
        <div className="rating">
            <h1 className="rating__title">Таблиця загального рейтингу</h1>
            <table className="rating__table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Гравець</th>
                        <th>Загальна кількість очок</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentUsers === null ? <tr><td colSpan="3">Завантаження...</td></tr> :
                        currentUsers.map((player, index) => (
                            <tr key={index}>
                                <td>{startingIndex + index + 1}</td>
                                <td>{player.Name}</td>
                                <td>{parseFloat(player.Rating).toFixed(1)}</td>
                            </tr>
                        ))
                    }
                </tbody>
                {
                    <div className="rating__pagination">
                        {
                            Array.from({length: countPagesUser}, (v, k) => k + 1).map((page, index) => (
                                <div key={index} className="rating__pagination-item">
                                    <button className={currentPageUser === index + 1 ? "rating__pagination_btn active" : "rating__pagination_btn"} onClick={() => paginateUser(page)}>{page}</button>
                                </div>
                            ))
                        }
                    </div>
                }
            </table>
        </div>
    );
}

export default Rating;
