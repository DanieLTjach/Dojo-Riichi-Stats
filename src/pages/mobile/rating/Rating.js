import ratingList from "../../../entities/utils/ratingList";
import "./style.css";

const Rating = () => {
    return (
        <div className="mobile__rating">
            <h1 className="mobile__rating_title">Rating</h1>
            <table className="mobile__rating_table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Player</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {ratingList.map((player, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{player.PlayerName}</td>
                            <td>{player.TotalScore}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Rating;