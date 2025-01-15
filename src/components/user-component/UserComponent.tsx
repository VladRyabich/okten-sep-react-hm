import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";
import {FC} from "react";
import './userComponent.css'

type UserComponentProps = {
    user: IUser
}

export const UserComponent:FC<UserComponentProps> = ({user}) => {
    const navigate = useNavigate();

    const onButtonClickNavigate = () => {
        navigate('/users/'+ user.id + '/carts')
    };

    return (
        <div className={'user-block'}>
            <h3>{user.username}</h3>

            <p><span>Email:</span> {user.email}</p>

            <button onClick={onButtonClickNavigate}>
                Click me
            </button>
        </div>
    );
};