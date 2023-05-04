import closeImg from "../img/close.png";
import AddHall from "./AddHall/AddHall.jsx";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import {closePopup} from "../../../reducers/popupSlice";
import DeleteHall from "./DeleteHall/DeleteHall.jsx";
import AddMovie from "./AddMovie/AddMovie.jsx";
import EditMovie from "./EditMovie/EditMovie.jsx";
import DeleteMovie from "./DeleteMovie/DeleteMovie.jsx";
import AddSeance from "./AddSeance/AddSeance.jsx";
import EditSeance from "./EditSeance/EditSeance.jsx";
import DeleteSeance from "./DeleteSeance/DeleteSeance.jsx";

export default function Popup() {
    const {active, title, form} = useSelector((state) => state.popup);
    const dispatch = useDispatch();

    return (
        <div className={classNames("popup", {"active": active})}>
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            {title}
                            <a
                                className="popup__dismiss"
                                onClick={() => dispatch(closePopup())}
                            >
                                <img src={closeImg} alt="Закрыть"/>
                            </a>
                        </h2>
                    </div>
                    <div className="popup__wrapper">
                        {form === "addHall" && <AddHall/>}
                        {form === "editHall" && <AddHall edit/>}
                        {form === "deleteHall" && <DeleteHall/>}
                        {form === "addMovie" && <AddMovie/>}
                        {form === "editMovie" && <EditMovie/>}
                        {form === "deleteMovie" && <DeleteMovie/>}
                        {form === "addSeance" && <AddSeance/>}
                        {form === "editSeance" && <EditSeance/>}
                        {form === "deleteSeance" && <DeleteSeance/>}
                    </div>
                </div>
            </div>
        </div>
    );
}