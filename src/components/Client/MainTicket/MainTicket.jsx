import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {buyTicket, resetSeance} from "../../../reducers/seanceSlice";
import Client from "../Client";
import TicketHeader from "../TicketHeader/TicketHeader.jsx";
import TicketInfo from "../TicketInfo/TicketInfo.jsx";
import QR from "./QR/QR.jsx";

export default function MainTicket() {
    const {session, seats, ticket} = useSelector((state) => state.seance);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const seatsNumbers = seats.filter((seat) => ticket.seats.includes(seat.id)).map((seat) => seat.number);

    useEffect(() => {
        if (!session.id || !ticket.seanceId) {
            navigate("/");
        }

        dispatch(buyTicket());

        return () => dispatch(resetSeance());
    }, []);

    return (
        <Client>
            <section className="ticket">
                <TicketHeader text={"Электронный билет"}/>
                <div className="ticket__info-wrapper">
                    <TicketInfo
                        film={session.title}
                        seats={seatsNumbers.join(', ')}
                        hall={session.name}
                        time={session.datetime}
                    />
                    {ticket.id &&
                        <QR
                            code={`Билет: ${ticket.id}. Зал: ${session.name}. Время: ${session.datetime}. Места: ${seatsNumbers.join(', ')}`}
                        />
                    }
                    <p className="ticket__hint">Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
                    <p className="ticket__hint">Приятного просмотра!</p>
                </div>
            </section>
        </Client>
    );
}