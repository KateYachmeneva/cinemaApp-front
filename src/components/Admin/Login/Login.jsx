import Header from '../../Header/Header.jsx';
import  { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector, connect} from 'react-redux';
import {useNavigate} from "react-router-dom";
import {fetchToken, resetAuthStatus} from "../../../reducers/authSlice";

export default function Login() {
    const {status} = useSelector((state) => state.auth);
    const EMPTY_STATE = {mail: "", pwd: ""};
    const [loginForm, setLoginForm] = useState(EMPTY_STATE);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        
        if (status === "success") {
            dispatch(resetAuthStatus());
            navigate('/admin');
        } else if (status === "error") {
            setLoginForm(EMPTY_STATE);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setLoginForm((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
         event.preventDefault();
        dispatch(fetchToken({email: loginForm.mail, password: loginForm.pwd}));
    };

    return (
        <>
            <Header/>
            <main>
                <section className="login">
                    <header className="login__header">
                        <h2 className="login__title">Авторизация</h2>
                    </header>
                    <div className="login__wrapper">
                        <form
                            className="login__form"
                            acceptCharset="utf-8"
                            onSubmit={handleSubmit}
                        >
                            <label
                                className="login__label"
                                htmlFor="mail">
                                E-mail
                                <input
                                    className="login__input"
                                    type="mail"
                                    placeholder="admin@gmail.com"
                                    name="mail"
                                    value={loginForm.mail}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label
                                className="login__label"
                                htmlFor="pwd">
                                Пароль
                                <input
                                    className="login__input"
                                    type="password"
                                    placeholder="admin"
                                    name="pwd"
                                    value={loginForm.pwd}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <div className="text-center">
                                <input
                                    value="Авторизоваться"
                                    type="submit"
                                    className="login__button"
                                />
                            </div>
                        </form>
                        {status === "error" &&
                        <div className="conf-step__error text-center">Ошибка авторизации!</div>
                        }
                    </div>
                </section>
            </main>
        </>
    );
}