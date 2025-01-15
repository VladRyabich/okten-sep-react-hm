import {useEffect, useState} from "react";
import {IUserResponseModel} from "../../models/IUserResponseModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {IUser} from "../../models/IUser.ts";
import {userService} from "../../services/api.service.ts";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUsers()
            .then(({users}: IUserResponseModel) => {
                setUsers(users);
            });
    }, []);

    return (
        <>
            {
                users.map((user:IUser)=> <UserComponent key={user.id} user={user}/>)
            }
        </>
    );
};