/* eslint-disable react/prop-types */
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CloseOk from "../CloseOk/CloseOk.jsx";
import {createHall, getHalls, updateHall} from "../../../../reducers/adminSlice";
import {closePopup} from "../../../../reducers/popupSlice";

export default function AddHall(props) {
    const dispatch = useDispatch();
    const {edit} = props;

    const INIT_STATE = {name: ""};
    const {halls} = useSelector((state) => state.admin);
    let hall = {};
    if (edit) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const {id} = useSelector((state) => state.popup);
        hall = halls.find((hall) => hall.id === id);
        INIT_STATE.name = hall.name;
    }
    const [form, setForm] = useState(INIT_STATE);

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setForm((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (edit) {
            dispatch(updateHall({...hall, name: form.name})).then(() => {
                dispatch(closePopup());
                dispatch(getHalls());
            });
        } else {
            dispatch(createHall(form.name)).then(() => {
                dispatch(closePopup());
                dispatch(getHalls());
            });
        }
    };

    return (
        <form acceptCharset="utf-8" onSubmit={handleSubmit}>
            <label
                className="conf-step__label conf-step__label-fullsize"
                htmlFor="name"
            >
                Название зала
                <input
                    className="conf-step__input"
                    type="text"
                    placeholder="Например, &laquo;Зал 1&raquo;"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <CloseOk text={edit ? "Сохранить" : "Добавить зал"}/>
        </form>
    );
}