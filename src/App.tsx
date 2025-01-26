import './App.css'
import {useFetch} from "./hooks/useFetch.tsx";
import {IUser} from "./models/IUser.ts";

function App() {
    const users = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users');

    return (
        <>
            {
                users &&
                users.map((user)=>(
                    <div key={user.id}>
                        {user.id}. {user.name}
                    </div>
                ))
            }
        </>
    );
}

export default App
