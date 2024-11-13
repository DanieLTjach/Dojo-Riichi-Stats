import "./style.css";

const DayResultUser = (props) => {
    return (
        <div className="mobile__main_userItem">
            <p>{props.user.UserName}</p>
            <span>{props.user.RatingChange}</span>
        </div>
    );
}

export default DayResultUser;