import CloseOk from "../../CloseOk/CloseOk.jsx";
import {getMovies} from "../../../../../reducers/adminSlice";
import {closePopup} from "../../../../../reducers/popupSlice";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";

export default function FormMovie(props) {
    // eslint-disable-next-line react/prop-types
    const {title = "", description = "", duration = "", country = "", poster, callbackSubmit, callbackDelete} = props;
    const INIT_STATE = {title, description, duration, country};
    const [form, setForm] = useState(INIT_STATE);
    const fileInput = useRef(null);
    const dispatch = useDispatch();
    const baseLink = process.env.REACT_APP_BASE_URL || window.location;

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setForm((prevState) => ({...prevState, [name]: value}));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        callbackSubmit(
            form.title,
            form.description,
            form.duration,
            form.country,
            fileInput.current.files[0]
        ).then(() => {
            dispatch(closePopup());
            dispatch(getMovies());
        });
     };

  return (
    <form acceptCharset="utf-8" onSubmit={handleSubmit}>

    <label
        className="conf-step__label conf-step__label-fullsize"
        htmlFor="poster"
    >
        Постер фильма (до 2Мб)
        {poster &&
        <div className="conf-step__poster">
            <img src={baseLink + process.env.REACT_APP_IMAGES + (`${poster}`.substr(7))}/>
        </div>
        }
        <input
            className="conf-step__input"
            type="file"
            accept="image/*"
            name="poster"
            ref={fileInput}
            required={!poster}
        />
    </label>
    <label
        className="conf-step__label conf-step__label-fullsize"
        htmlFor="name"
    >
        Название фильма
        <input
            className="conf-step__input"
            type="text"
            placeholder="Например, &laquo;Гражданин Кейн&raquo;"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
        />
    </label>
    <label
        className="conf-step__label conf-step__label-fullsize"
        htmlFor="description"
    >
        Описание
        <input
            className="conf-step__input"
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
        />
    </label>
    <label
        className="conf-step__label conf-step__label-fullsize"
        htmlFor="duration"
    >
        Длительность
        <input
            className="conf-step__input"
            type="number"
            placeholder="120"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            required
        />
    </label>
    <label
        className="conf-step__label conf-step__label-fullsize"
        htmlFor="country"
    >
        Страна
        <input
            className="conf-step__input"
            type="text"
            placeholder="Россия"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
        />
    </label>

    <CloseOk text={"Добавить фильм"} handleDelete={callbackDelete}/>
</form>
  );
}


