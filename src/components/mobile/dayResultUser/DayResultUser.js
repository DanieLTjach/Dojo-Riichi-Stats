import "./style.css";

const DayResultUser = (props) => {
    return (
        <div className="mobile__main_userItem">
            <p>{props.user.UserName}</p>
            <span>{parseFloat(props.user.RatingChange).toFixed(1)}</span>
        </div>
    );
}

export default DayResultUser;