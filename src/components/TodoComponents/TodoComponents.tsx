import {TodoComponent} from "../TodoComponent/TodoComponent.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";

export const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((iTodos: ITodo[]) => {
                setTodos(iTodos);
            });
    })

    return (
        <>
            {
                todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
            }
        </>
    );
};