import {useDispatch, useSelector} from "react-redux";
import {
    createScheme,
    selectHallScheme,
    changeHallSize,
    getSeats,
    updateSeats,
    createSeats,
    updateHall,
    getHalls,
} from "../../../reducers/adminSlice";
import RadioHall from "../Buttons/RadioButton/RadioButton.jsx";
import ArmChair from "./ArmChair/ArmChair.jsx";
import SeatsScheme from "./SeatsScheme/SeatsScheme.jsx";
import CancelSave from "../Buttons/CancelSave/CancelSave.jsx";

export default function Seats() {
    const {halls, selectedHallScheme} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    const handleSelect = (id) => {
        dispatch(selectHallScheme(halls.find((hall) => hall.id === id)));
        dispatch(getSeats(id));
    }

    
}