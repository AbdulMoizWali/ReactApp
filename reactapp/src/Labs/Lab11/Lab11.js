import { useState } from "react"

export function Lab11() {
    const [count, setCount] = useState(0);
    const [arr, setArr] = useState(['sfv', 'fd']);

    const countHandler = () => {
        //Not working two times
        //setCount(count + 1);
        //setCount(count + 1);


        setCount((prevVal) => prevVal + 1);
        setCount((prevVal) => prevVal + 1);

    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={countHandler}>+</button>

        </div>
    )
}


