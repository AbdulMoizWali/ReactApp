//Componenets
/*
To make code reuseable and call it many times
*/

import Button from "../../Components/button";
import Input from "../../Components/input";
import '../../Components/ComponentCss/button.css'

export function Lab9() {
    return (
        <div>
            <Button label='By default' />
            <Button label='With Classname' className="danger-button" />
            <Button label='With BtnClick' BtnClick={() => console.log("With BtnClick clicked")} />
            <Button label='With Classname and BtnClick' className="danger-button" BtnClick={() => console.log("With Classname and BtnClick clicked")} />

            <Input Placeholder="placeholder" />
        </div>
    );
}