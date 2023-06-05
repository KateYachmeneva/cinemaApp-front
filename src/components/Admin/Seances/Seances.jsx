import Movies from "./Movies/Movies.jsx";
import SeancesHalls from "./SeancesHalls/SeancesHalls.jsx";
import SeancesPickDate from "./SeancesPickDate/SeancesPickDate.jsx";

export default function Seances() {
    return (
        <div className="conf-step__wrapper">
            <Movies />
            <p className="conf-step__paragraph">Нажмите на название зала для добавления сеанса, на название фильма в расписании для редактирования</p>
            <SeancesPickDate />
            <SeancesHalls />
        </div>
    );
}
