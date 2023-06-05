/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import {useSelector} from "react-redux";
import {useCountableEnd} from "../../../../customHooks/useCountableEnd";
const baseLink = process.env.REACT_APP_BASE_URL || window.location;

export default function MovieInfo(props) {
    const {films} = useSelector((state) => state.schedule);
    const {id} = props;
    const film = films.find((film) => film.id === id);
    const [filmDuration, durationEnding] = useCountableEnd(film.duration, ['минут', 'минуты', 'минута']);

    return (
        <div className="movie__info">
            <div className="movie__poster">
                <img className="movie__poster-image" alt={`${film.title} постер`}
                     src={baseLink + process.env.REACT_APP_IMAGES + `${film.poster}`.substr(7)}/>
            </div>
            <div className="movie__description">
                <h2 className="movie__title">{film.title}</h2>
                <p className="movie__synopsis">{film.description}</p>
                <p className="movie__data">
                    <span className="movie__data-duration">{filmDuration} {durationEnding}</span>
                    {" - "}
                    <span className="movie__data-origin">{film.country}</span>
                </p>
            </div>
        </div>
    );
}