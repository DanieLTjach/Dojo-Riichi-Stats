import useRatingData from "../../../entities/utils/useRatingData";
import "./style.css";

const Rating = () => {

    const {ratingData} = useRatingData();

    return (
        <div className="mobile__rating">
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