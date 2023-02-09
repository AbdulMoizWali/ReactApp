import './ComponentCss/input.css'

function Input(props) {
    return (
        <input
            onChange={props.InputChange}
            className={props.className ? props.className : "primary-input"}
            value={props.Value}
            placeholder={props.Placeholder}
        />
    );
}

export default Input; 