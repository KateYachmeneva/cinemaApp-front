
import Header from './Header/Header.jsx';
import Halls from "./Halls/Halls.jsx";
import Seats from "./Seats/Seats.jsx";
// import Prices from "./Prices/Prices.jsx";
// import Seances from "./Seances/Seances.jsx";
// import Sales from "./Sales/Sales.jsx";
import Wrapper from "./Wrapper/Wrapper.jsx";
import Popup from "./Popup/Popup.jsx";

export default function Admin() {
    return (
        <>
            <Popup />
            <Header/>
            <main className="conf-steps">
                <Wrapper title={"Управление залами"}>
                    <Halls/>
                </Wrapper>
                <Wrapper title={"Конфигурация залов"}>
                    <Seats/>
                </Wrapper>
                {/* <Wrapper title={"Конфигурация цен"}>
                    <Prices/>
                </Wrapper>
                <Wrapper title={"Сетка сеансов"}>
                    <Seances/>
                </Wrapper>
                <Wrapper title={"Открыть продажи"}>
                    <Start/>
                </Wrapper> */}
            </main>
        </>
    );
}