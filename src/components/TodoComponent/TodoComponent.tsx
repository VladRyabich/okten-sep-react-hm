import {ITodo} from "../../models/ITodo.ts";

interface TodoComponentProps {
    todo: ITodo;
}

export const TodoComponent = ({todo}: TodoComponentProps) => {
    return (
        <>
            <div className={'p-7 ml-6 mt-2 border-2'}>
                <h2>
                    <span className={'font-bold mr-3'}>User ID:</span>
                    <span className={'text-2xl'}>{todo.userId}</span>
                </h2>
                <h3>
                    <span className={'font-bold mr-3'}>ID:</span>
                    <span className={'text-2xl'}>{todo.id}</span>
                </h3>
                <p className={todo.completed ? 'complete' : 'not-complete'}>
                    {todo.todo}
                </p>
            </div>
        </>
    );
};