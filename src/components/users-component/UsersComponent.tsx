import {useEffect, useState} from "react";
import {getAll} from "../../services/general.api.service.ts";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import './usersComponent.css';

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getAll<IBaseResponseModel & { users: IUser[] }>('/users')
            .then(({users}) => setUsers(users));
    }, []);

    return (
        <ul className={'users-list'}>
            {
                users.map((user:IUser)=> <UserComponent key={user.id} user={user}/>)
            }
        </ul>
    );
};