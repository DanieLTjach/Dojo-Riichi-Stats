import "./style.css";

const DayResultUser = (props) => {
    return (
        <div className="app__main_dayResultsUser_item">
            <p>{props.user.name}</p>
            <span>{props.user.ratingChange}</span>
        </div>
    );
}

export default DayResultUser;