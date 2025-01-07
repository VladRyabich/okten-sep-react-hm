import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";

const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((iTodos: ITodo[]) => {
                setTodos(iTodos)
            });
    });

    return (
        <>
            {
                todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </>
    );
};

export {
    TodoComponents
}