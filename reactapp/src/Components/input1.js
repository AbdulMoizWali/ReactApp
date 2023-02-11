import './ComponentCss/input.css'

function Input({ InputChange, ClassName, Value, Placeholder }) {
    return (
        <input
            onChange={InputChange}
            className={ClassName ? ClassName : "primary-input"}
            value={Value}
            placeholder={Placeholder}
        />
    );
}

export default Input; 