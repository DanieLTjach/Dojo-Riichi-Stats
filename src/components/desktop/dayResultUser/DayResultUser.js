import "./style.css";

const DayResultUser = (props) => {
    return (
        <div className="app__main_dayResultsUser_item">
            <p>{props.user.UserName}</p>
            <span>{parseFloat(props.user.RatingChange).toFixed(1)}</span>
        </div>
    );
}

export default DayResultUser;