
import {useDispatch, useSelector} from "react-redux";
import CloseOk from "../CloseOk/CloseOk.jsx";
import {deleteSeance, getSeances} from "../../../../reducers/adminSlice";
import {closePopup} from "../../../../reducers/popupSlice";

export default function DeleteSeance() {
    const {id} = useSelector((state) => state.popup);
    const {seances, movies} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    const seance = seances.find ((seance) => +seance.id === id );
    const seance1 = seances.find ((seance) => seance.id === id );
    console.log (seance);
    console.log (seance1);
    const title = movies.find ((movie) => movie.id === +seance.film_id).title;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteSeance(id).then (() => {
            dispatch(closePopup());
            dispatch(getSeances());
        }))
    };
  return (
    <form onSubmit={handleSubmit}>
            <p className="conf-step__paragraph">Вы действительно хотите снять с сеанса
                фильм <span>{title}</span> назначенный на {seance.datetime}?</p>
            <CloseOk text={"Удалить"}/>
        </form>
    );
  }
