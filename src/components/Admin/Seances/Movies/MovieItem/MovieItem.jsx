/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useCountableEnd} from "../../../../customHooks/useCountableEnd";
import {useDispatch} from "react-redux";
import {showPopup} from "../../../../../reducers/popupSlice";
const baseLink = process.env.REACT_APP_BASE_URL || window.location;


//baseLink + process.env.REACT_APP_IMAGES + `${img}`

export default function MovieItem(props) {
    const {id, img, title, duration} = props;
    const [filmDuration, durationEnding] = useCountableEnd(duration, ['минут', 'минуты', 'минута']);
    const dispatch = useDispatch();


    return (
        <div
            className="conf-step__movie"
            onClick={() => dispatch(showPopup({title: "Редактирование фильма", form: "editMovie", id}))}
        >
            <img className="conf-step__movie-poster" alt="poster" src={baseLink + process.env.REACT_APP_IMAGES + `${img}`.substr(7)}/>
            <h3 className="conf-step__movie-title">{title}</h3>
            <p className="conf-step__movie-duration">{filmDuration} {durationEnding}</p>
        </div>
    );
}
