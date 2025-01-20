import {IUsersResponseModel} from "../models/IUsersResponseModel.ts";

export const baseUrl = import.meta.env.VITE_BASE_URL;

export const userService = async (page: string): Promise<IUsersResponseModel> => {
    const limit = 30;
    const skip = limit * Number(page) - limit;

    return await fetch(baseUrl + '/users' + '?skip=' + skip)
        .then(res => res.json())
};