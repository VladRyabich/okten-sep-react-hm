import {useEffect} from "react";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {useAddDispatch, useAppSelector} from "../../../redux/store.ts";
import {userAction} from "../../../slices/UserSlice.ts";
import {IUser} from "../../../models/IUser.ts";

export const UsersComponent = () => {

    const dispatch = useAddDispatch();
    const users = useAppSelector(state => state.userStoreSlice.users);

    useEffect(() => {
        dispatch(userAction.loadUsers());
    }, []);

    return (
        <>
            {users.map((user:IUser)=>(<UserComponent key={user.id} user={user}/>))}
        </>
    );
};