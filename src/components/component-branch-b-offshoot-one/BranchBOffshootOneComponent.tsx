import {useContext} from "react";
import {MyContext} from "../../contaxt/MyContextProvider.tsx";

export const BranchBOffshootOneComponent = () => {
    const {changeTheme} = useContext(MyContext);
    
    const handlerDark = () => {
        changeTheme('dark');
    };

    const handlerLight = () => {
        changeTheme('light');
    };

    return (
        <div>
            <button onClick={handlerDark}>change theme to dark</button>
            <button onClick={handlerLight}>change theme to light</button>
        </div>
    );
};