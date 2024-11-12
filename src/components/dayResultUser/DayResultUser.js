import "./style.css";

const DayResultUser = (props) => {

    return (
        <div className="app__main_dayResultsUser_item">
            <p>{props.user.UserName}</p>
            <span>{props.user.RatingChange}</span>
        </div>
    );
}

export default DayResultUser;