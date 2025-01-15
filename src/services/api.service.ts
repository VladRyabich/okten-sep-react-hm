import {IUserResponseModel} from "../models/IUserResponseModel.ts";
import {ICartResponseModel} from "../models/ICartResponseModel.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;

const userService = {
    getAllUsers: async ():Promise<IUserResponseModel> => {
        return await fetch(baseUrl + '/users')
            .then(response => response.json());
    }
};

const cartService = {
    getCartsOfUser: async (userId:string):Promise<ICartResponseModel> => {
        return await fetch(baseUrl + '/carts/user/' + userId)
            .then(response => response.json());
    }
};

export {
    baseUrl,
    userService,
    cartService
}