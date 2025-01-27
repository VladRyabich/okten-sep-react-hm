import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IBaseResponseModelType} from "../models/IBaseResponseModelType.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

// створюємо типізацію для логінації в ситсемі
type LoginDate = {
    username: string;
    password: string;
    // час валідності токена
    expiresInMins: number;
};

// створюємо базу для роботи з апі через axios
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

// використовуємо метод axios для перехоплення запитів до апі
axiosInstance.interceptors.request.use((requestObject) => {
    // перевіряємо чи метод запиту насправді GET
    if (requestObject.method?.toUpperCase() === 'GET') {
        /* якщо перевірка пройдена, додаємо в наш об'єкт
           хедер авторизації, як Bearer + наш access токен, який підтягнули
           з local storage через метод retrieveLocalStorage */
        requestObject.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;
});

// функція яка виконує логінацію, яка приймає в себе тип LoginData
export const login =
    async ({username, password, expiresInMins}: LoginDate): Promise<IUserWithTokens> => {

        /* - використовуємо axios метод post для аунтифікації
           - додаємо потрібну частину url та об'єкт з типу LoginDate для входу, як авторизований користувач
           - деструктуруємо отриману відповідь
           - отримуємо об'єкт, що містить інформацію про авторизованого користувача разом з токеном */
        const {data: userWithTokens} = await axiosInstance
            .post<IUserWithTokens>('/login', {username, password, expiresInMins});

        // зберігаємо отримані дані в local storage
        localStorage.setItem('user', JSON.stringify(userWithTokens));
        return userWithTokens;
    };

// авторизований запит до апі на отримання продуктів
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IBaseResponseModelType & {products: IProduct[]}>('/products');
    return products;
};

// функція заміни токену на новий
export const refresh = async () => {
    const iUserWithTokens = retrieveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance
        .post<ITokenPair>('/refresh', {
            refreshToken: iUserWithTokens.refreshToken,
            expiresInMin: 1
        });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
};