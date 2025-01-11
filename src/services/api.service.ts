import {ITodosObject} from "../models/ITodosObject.ts";
const url = import.meta.env.VITE_API_URL;

const getAllTodos = async ():Promise<ITodosObject> => {

    return await fetch(url + '/todos')
        .then(response => response.json());
}

export {
    getAllTodos
}