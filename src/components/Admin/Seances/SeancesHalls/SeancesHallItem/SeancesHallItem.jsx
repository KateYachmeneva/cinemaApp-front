/* eslint-disable react/prop-types */
import HallTimeLine from "./HallTimeLine/HallTimeLine.jsx";
import {showPopup} from "../../../../../reducers/popupSlice";
import {useDispatch} from "react-redux";
import RadioButton from "../../../Buttons/RadioButton/RadioButton.jsx";

export default function SeancesHallItem(props) {
    const {hallId, name} = props;
    const dispatch = useDispatch();

    return (
        <div className="conf-step__seances-hall">
            <div className="conf-step__selectors-box">
                <RadioButton
                    name={name}
                    checked={false}
                    callback={() => dispatch(showPopup({title: "Добавление сеанса", form: "addSeance", id: hallId}))}
                />
            </div>
            <HallTimeLine hall={hallId}/>
        </div>
    );
}
