import {ITodo} from "../../models/ITodo.ts";

interface TodoComponentProps {
    todo: ITodo;
}

export const TodoComponent = ({todo}: TodoComponentProps) => {
    return (
        <>
            <h3>{todo.title}</h3>
        </>
    );
};