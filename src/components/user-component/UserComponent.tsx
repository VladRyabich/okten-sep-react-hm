import {IUser} from "../../models/IUser.ts";
import './userComponent.css';

interface UserComponentProps {
    user: IUser
}

export function UserComponent({user}: UserComponentProps) {
    return (
        <li className={'user-item'}>
            <h2 className={'id'}><span className={'id-title'}>id:</span>{user.id}</h2>
            <h3 className={'user-name'}>{user.firstName} {user.lastName}</h3>
            <p><span className={'info-title'}>Age:</span>{user.age}</p>
            <p><span className={'info-title'}>Gender:</span>{user.gender}</p>
            <p><span className={'info-title'}>Email:</span>{user.email}</p>
            <p><span className={'info-title'}>Phone:</span>{user.phone}</p>
        </li>
    );
}