/* eslint-disable react/prop-types */
import {useSelector} from "react-redux";
import TimeLineMovie from "./TimeLineMovie/TimeLineMovie.jsx";

export default function HallTimeLine(props) {
    const {seances} = useSelector((state) => state.admin);
    const {hall} = props;

    const hallSeances = seances.filter((seance) => +seance.hall_id === hall);
    hallSeances.sort((a, b) => Date.parse(a.datetime) - Date.parse(b.datetime));

    return (
        <div className="conf-step__seances-timeline">
            {hallSeances.map((seance) =>
                <TimeLineMovie
                    id={seance.film_id}
                    seance={seance.id}
                    time={seance.datetime}
                    key={seance.id}
                />
            )}
        </div>
    );
}