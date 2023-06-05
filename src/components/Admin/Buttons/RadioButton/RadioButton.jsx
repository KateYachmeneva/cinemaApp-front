export default function RadioHall(props) {
    // eslint-disable-next-line react/prop-types
    const {name, checked, callback} = props;

    const handleChange = () => {
        // // eslint-disable-next-line no-debugger
        // debugger
      
        callback();
    }

    return (
        <li>
            <input
                type="radio"
                className="conf-step__radio"
                value={name}
                checked={checked}
                onChange={() => handleChange()}
            />
            <span className="conf-step__selector">{name}</span>
        </li>
    );
}