import { useState } from "react";
import useResultsData from "../../../entities/utils/useResultsData";
import DayResultUser from "../../../components/mobile/dayResultUser/DayResultUser"
import DayResultGame from "../../../components/mobile/dayResultsGame/DayResultsGame"
import "./style.css"

const Result = () => {
    const {currentUsers,currentGame} = useResultsData();
    const [activeTab, setActiveTab] = useState("users");

    return (
        <main className="mobile__result_main">
            <div className="mobile__result_main_nav">
                <div className={`mobile__result_main_nav_back ${activeTab === "users" ? "active" : ""}`} onClick={() => setActiveTab("users")}>Результати гравців</div>
                <div className={`mobile__result_main_nav_back ${activeTab === "games" ? "active" : ""}`} onClick={() => setActiveTab("games")}>Останні ігри</div>
            </div>

            <div className="mobile__result_main_content">
                {
                    activeTab === "users" ? (
                        <div className="mobile__result_main_content_userItem">
                            <div className="mobile__result_main_item_title">
                                <p>Гравець:</p>
                                <p>Результат:</p>
                            </div>
                                {
                                    currentUsers.length === 0 ? <p className="loader">Loading...</p> :
                                    currentUsers.map((user, index) => (
                                        <DayResultUser key={index} user={user} />
                                    ))
                                }
                        </div>
                    ) : (
                        <div className="mobile__result_main_content_gameItem">
                            {
                                currentGame.length === 0 ? <p className="loader">Loading...</p> :
                                currentGame.map((game, index) => (
                                    <DayResultGame key={index} game={game} />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </main>
    );
}

export default Result;