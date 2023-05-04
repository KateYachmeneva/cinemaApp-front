import Button from "../Buttons/Button/Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {showPopup} from "../../../reducers/popupSlice";
import {getHalls} from "../../../reducers/adminSlice";
import {useEffect} from "react";
import HallItem from "./HallItem/HallItem.jsx";

export default function Halls() {
    const {halls} = useSelector((state) => state.admin);
    console.log(halls);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHalls());
    }, []);

    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Доступные залы:</p>
            <ul className="conf-step__list">
                {halls.map((hall) =>
                    <HallItem
                        id={hall.id}
                        name={hall.name}
                        key={hall.id}
                    />
                )}
                {halls.length === 0 &&  <p className="conf-step__paragraph">Залы отсутствуют</p>}
            </ul>
            <Button
                text={"Создать зал"}
                callback={() => dispatch(showPopup({title: "Добавление зала", form: "addHall"}))}
            />
        </div>
    );
}