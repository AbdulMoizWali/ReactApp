import { useState } from 'react';
import '../../Assignment/Assignment2/Assignment2.css'


export function Assignment2(){
    const [todolist, setTodolist] = useState(["Complete Assignment 2" , "Complete the project."]);
    const [todolistEnabled, setTodolistEnabled] = useState([true, true]);
    const [Text, setText] = useState("");

    let AddTodoTask = () => {
        if(Text == ""){
            return;
        }
        todolist.push(Text);
        todolistEnabled.push(true);

        setTodolist([...todolist]);
        setText("");
    };

    let EditTodoBtnPressed = (index) => {
        todolistEnabled[index] = !todolistEnabled[index];
        setTodolistEnabled([...todolistEnabled]);
    }

    let EditTodoTask = (index, Value) => {
        todolist.splice(index, 1, Value);
        console.log(index + " :index edited");
        setTodolist([...todolist]);
    }

    let DeleteTodoTask  = (index) =>{
        todolist.splice(index, 1);
        todolistEnabled.splice(index, 1);
        console.log(index + " :index deleted");
        setTodolist([...todolist]);
        setTodolistEnabled([...todolistEnabled]);
    }

    let DeleteAllTask = ()=>{
        if(window.confirm('Are you sure you want to delete all tasks?'))
        {
            console.log(true);
            setTodolist([...[]]);
            setTodolistEnabled([...[]]);
        }
    }
    
    return (
        <div className="todo">
            <div className="todoHeader">
                <h1>To Do</h1>
                <input className='todoInput' type="text" value={Text} placeholder="Enter here what you want to do..." onChange={(e)=>{
                    setText(e.target.value);
                    console.log(Text);
                }} />
                <input className='todoAdd' type="button" value="Add" onClick={AddTodoTask}/>
                <input className='todoDeleteAll' type="button" value="Delete All" onClick={DeleteAllTask}/>
            </div>
            <div className="todoBody">
                {
                    todolist.map((x, i)=>{
                        return (
                            <div key={i} className="todoList">
                                <span className='listNo'>{i+1}</span>
                                <input className='todoListText' type="text" value={x} disabled={todolistEnabled[i]} onChange={(e)=>{
                                    EditTodoTask(i, e.target.value);
                                }} onBlur={()=>EditTodoBtnPressed(i)}/>
                                <input className='todoEdit' type="button" value="🖋️" onClick={()=>EditTodoBtnPressed(i)}/>
                                <input className='todoDelete' type="button" value="🗑️" onClick={()=>DeleteTodoTask(i)} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
      );
}