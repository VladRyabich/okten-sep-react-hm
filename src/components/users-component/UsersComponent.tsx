import {useEffect, useState} from "react";
import {userService} from "../../services/api.service.tsx";
import {IUser} from "../../models/IUser.ts";
import {useSearchParams} from "react-router-dom";
import {UserComponent} from "../user-component/UserComponent.tsx";
import './usersComponent.css'

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        userService(currentPage)
            .then(({users}) => setUsers(users))
    }, [searchParams]);

    return (
        <ul className={'users-card'}>
            {
                users.map((user) => <UserComponent key={user.id} user={user}/>)
            }
        </ul>
    );
};