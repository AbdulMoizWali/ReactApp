import { useState } from "react";

export function Lab8() {
    //State
    // [State, setState] terms in older version
    /* [variablename, methodname_to_Change_variablename]  = useState(value) or the methodName */

    const [count, setCount] = useState(0);
    const [arr, setArr] = useState(["dbf", "hh"]);
    const [Text, setText] = useState('');
    //Equivalent to const count = 0

    // let count = 0;


    let add = () => {
        //Will not work
        // count++
        // console.log(count)

        setCount(count + 1)
    };

    let AddArr = () => {
        arr.push(Text);
        console.log(arr);
        setArr([...arr]);
    };



    return (
        <div className="App">
            <header className="App-header">
                <p>{count}</p>
                <button onClick={add}>Add</button>

                <input onChange={(e) => {
                    console.log(e.target.value);
                    setText(e.target.value);
                }} type="text" placeholder="Enter text" />
                <p>{Text}</p>
                <button onClick={AddArr}>Add Array Value</button>
                {
                    arr.map((x, i) => {
                        return <p key={i}>{x}</p>
                    })
                }


            </header>
        </div>
    )
}