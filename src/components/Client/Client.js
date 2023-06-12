/* eslint-disable react/prop-types */
import Header from "./Header/Header.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import MovieNotFound from "./MainMovie/MovieNotFound/MovieNotFound.jsx";


export default function Client(props) {
    console.log(props.children);
    return (
        <>
            <Header/>
            {props.nav && <Navigation/>}
            <main>
                {props.children}
            </main>
            { props.children.length === 0 && <MovieNotFound/>}
        </>
    );
}
