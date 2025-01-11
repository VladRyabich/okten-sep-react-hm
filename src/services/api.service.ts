import {ITodosObject} from "../models/ITodosObject.ts";
const url = import.meta.env.VITE_API_URL;

const getAllTodos = async ():Promise<ITodosObject> => {

    const todosResponseObject = await fetch(url + '/todos')
        .then(response => response.json());

    return todosResponseObject;
}

export {
    getAllTodos
}