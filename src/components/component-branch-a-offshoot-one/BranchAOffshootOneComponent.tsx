import {useContext} from "react";
import {MyContext} from "../../contaxt/MyContextProvider.tsx";
import './branchAOffshootOneComponent.css'

export const BranchAOffshootOneComponent = () => {
    const {theme} = useContext(MyContext);

    return (
        <div className={theme}>
            {theme}
        </div>
    );
};