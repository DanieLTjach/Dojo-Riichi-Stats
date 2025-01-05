import useRatingData from "../../../entities/utils/useRatingData";
import "./style.css";

const Rating = () => {

    const {ratingData} = useRatingData();

    return (
        <div className="mobile__rating">
            <div className="mobile__rating_season">
                <span>Сезон:</span>
                <select>
                    <option value="season1">Сезон 1</option>
                    <option value="season2">Сезон 2</option>
                    <option value="season3">Сезон 3</option>
                </select>
            </div>
            <h1 className="mobile__rating_title">Таблиця загального рейтингу</h1>
            <table className="mobile__rating_table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Гравець</th>
                        <th>Загальна кількість очок</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ratingData === null ? <tr><td colSpan="3">Завантаження...</td></tr> :
                        ratingData.map((player, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{player.Name}</td>
                                <td>{parseFloat(player.Rating).toFixed(1)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Rating;