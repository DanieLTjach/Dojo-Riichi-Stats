import "./style.css";

const Resources = () => {
    const resourcesData = {
        "Довідкові матеріали": [
            {
                title: "Список термінів",
                url: "https://mjg-repo.neocities.org/pastebin/mahjong-terms"
            },
            {
                title: "Mаджонґ Вікі",
                url: "https://riichi.wiki/Main_Page"
            },
            {
                title: "Правила ріічі по всьому світу",
                url: "https://ooyamaneko.net/en/mahjong/rratw/index.php"
            },
            {
                title: "Карта всіх клубів ріічі",
                url: "https://jellicodemahjong.wordpress.com/world-riichi-map/"
            }
        ],
        "Книги": [
            {
                title: "Архів книг від доджьо",
                url: "https://drive.google.com/drive/folders/1wrIvV2CcEMQRXftKF7XoD_sJhAS5kPQ7?usp=sharing"
            },
            {
                title: "Великий архів книг англійською мовою",
                url: "https://files.riichi.moe/mjg/books%20(en)/"
            },
            {
                title: "Великий архів книг японською мовою",
                url: "https://files.riichi.moe/mjg/books%20(jp)/"
            },
            {
                title: "136 Ready-to-Use Mahjong Strategy and Tactics",
                url: "https://play.google.com/store/books/details/136_Ready_to_Use_Mahjong_Strategy_and_Tactics?id=UjCIEQAAQBAJ&hl=en&pli=1"
            },
            {
                title: "Кобаяші Ґо - Супер цифровий маджонґ",
                url: "https://natsuai.com/mahjong/digital/"
            }

        ],
        "Міні-ігри та тренажери": [
            {
                title: "Міні-гра усі бамбуки",
                url: "https://www.gamedesign.jp/games/bamboo/"
            },
            {
                title: "Тренажер ефективності",
                url: "https://euophrys.itch.io/mahjong-efficiency-trainer"
            },
            {
                title: "Маджонґ вордл",
                url: "https://mahjong-handle.update.sh"
            },
            {
                title: "Тренажер очікувань Mahjong Trainer",
                url: "https://mahjong-trainer.netlify.app"
            },
            {
                title: "Тренажер очікувань Chintore",
                url: "https://chintore-4cc86.web.app/drill"
            },
            {
                title: "Міні-гра маджонґ на двох",
                url: "https://hinakin.main.jp/phone/cm/index.htm"
            }
        ],
        "АІ аналізатори": [
            {
                title: "Naga",
                url: "https://naga.dmv.nico/naga_report/top/"
            },
            {
                title: "Mahjong AI Utilities",
                url: "https://mjai.ekyu.moe"
            }
        ],
        "Медіа та контент": [
            {
                title: "Abema TV",
                url: "https://abema.tv"
            }
        ],
        "Блоги та поради": [
            {
                title: "6 порад феншуй для покращення удачі за столом",
                url: "https://www.customymahjong.com/post/6-feng-shui-tips-to-enhance-your-luck-at-mahjong-table"
            },
            {
                title: "Як не піддаватися емоціям і підніматися в рейтингу",
                url: "https://osamuko.com/how-to-stay-off-tilt-and-climb-in-the-ranks/"
            }
        ]
    };

    return (
        <div className="resources">
            <h1 className="resources__title">Навчальні матеріали</h1>

            {Object.entries(resourcesData).map(([category, links], categoryIndex) => (
                <div key={categoryIndex} className="resources__category">
                    <h2 className="resources__category-title">{category}</h2>
                    <ul className="resources__list">
                        {links.map((link, linkIndex) => (
                            <li key={linkIndex} className="resources__item">
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resources__link"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Resources;
