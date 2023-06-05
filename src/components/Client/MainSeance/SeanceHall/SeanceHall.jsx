import {useSelector} from "react-redux";
import SeanceSeat from "./SeanceSeat/SeanceSeat.jsx";

export default function SeanceHall(props) {
    // eslint-disable-next-line react/prop-types
    const {callback} = props;
    const {session, seats} = useSelector((state) => state.seance);
    const seatsInRow = seats.length / session.row;

      // делим места на ряды
      const seatsToRow = seats.reduce((result, seat, index) => {
        const chunkIndex = Math.floor(index / seatsInRow);
        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
        }
        result[chunkIndex].push(seat);
        return result
    }, []);

    return (
        <div className="buying-scheme">
            <div className="buying-scheme__wrapper">
                {seatsToRow.map((row, index) =>
                    <div className="buying-scheme__row" key={index}>
                        {row.map((seat) =>
                            <SeanceSeat
                                status={seat.status}
                                callback={() => callback(seat.id, seat.status)}
                                key={seat.id}
                            />)}
                    </div>
                )}
            </div>
            <div className="buying-scheme__legend">
                <div className="col">
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_standard"/> Свободно (<span
                        className="buying-scheme__legend-value">{session.price_standard}</span>руб)
                    </p>
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_vip"/> Свободно VIP (<span
                        className="buying-scheme__legend-value">{session.price_vip}</span>руб)
                    </p>
                </div>
                <div className="col">
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_taken"/> Занято
                    </p>
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_selected"/> Выбрано
                    </p>
                </div>
            </div>
        </div>
    );
}