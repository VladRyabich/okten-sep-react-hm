import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <>
            <ul className={'flex justify-center m-2'}>
                <li className={'border-2 bg-black text-white w-1/5 flex justify-center text-2xl p-2'}>
                    <Link to={'/users'}>Users</Link>
                </li>
            </ul>
        </>
    );
};