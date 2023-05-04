import {useDispatch} from "react-redux";
import {createMovie} from "../../../../reducers/adminSlice";
import FormMovie from "./FormMovie/FormMovie.jsx";

export default function AddMovie() {
    const dispatch = useDispatch();


  return (
   <FormMovie
       callbackSubmit = { (title, description, duration, country, poster) => dispatch (createMovie({
        title,
        description,
        duration,
        country,
        poster,
       }))}
       />
  );
}


