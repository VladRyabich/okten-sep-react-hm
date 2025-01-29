import {IUser} from "../../../models/IUser.ts";

type UserComponentProps = {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (
        <div>
            {user.name}
        </div>
    );
};