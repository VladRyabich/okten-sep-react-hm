import {baseUrl} from "./api.service.tsx";

export const menuService = async () => {
    return await fetch(baseUrl + '/users')
        .then(res => res.json());
};