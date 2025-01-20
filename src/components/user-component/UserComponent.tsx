import {IUser} from "../../models/IUser.ts";
import './userComponent.css'

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (
        <li className={'border-2 user-item'}>
            <h2 className={'font-bold'}>{user.id}</h2>
            <h3 className={'font-bold'}>{user.firstName} {user.lastName}</h3>
            <ul className={'user-info'}>
                <li className={'user-info-title'}>Info about person:</li>
                <li>{user.username}</li>
                <li>{user.age}</li>
                <li>{user.gender}</li>
                <li>{user.birthDate}</li>
                <li>{user.email}</li>
                <li>{user.phone}</li>
            </ul>
        </li>
    );
};