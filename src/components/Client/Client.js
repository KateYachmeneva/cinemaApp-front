/* eslint-disable react/prop-types */
import Header from "./Header/Header.jsx";
import Navigation from "./Navigation/Navigation.jsx";

export default function Client(props) {
    return (
        <>
            <Header/>
            {props.nav && <Navigation/>}
            <main>
                {props.children}
            </main>
        </>
    );
}
