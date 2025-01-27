import {UserComponent} from "../user-component/UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

export const UsersComponent = () => {
    const [users, setUsers] = useState([]);
    console.log(users);

    //кешує function для уникнення рендиренгу
    const foo = useCallback(() => {
        console.log('test');
    }, []);

    //useMemo мемомізує, тобто кешує наш масив для уникнення рирендерингу компонента,
    //який залежить від цього масиву за умови, що масив не буде змінено в процесі
    const arr: number[] = useMemo(() => {
        return [11, 22, 33];
    }, []);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(value => {
                        setUsers(value);
                    });
        return () => {

            //return спрацьовує при знищенні поточного компонента
            console.log('unsubscribe');
        };
    }, []);

    return (
        <div>
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};