//First letter should be capital

function Button(props) {
    //console.log(props);//value as a parameter
    return <button onClick={props.BtnClick}
        className={props.className ? props.className : "primary-button"}>{props.label}</button>;
}

export default Button; //Button is function name