import {Link} from "react-router";
import './menuComponent.css';

export const MenuComponent = () => {

    return (
        <ul className={'menu-list'}>
            <li className={'menu-item'}><Link to={'cars'}>Cars</Link></li>
            <li className={'menu-item'}><Link to={'cars/create'}>Create</Link></li>
        </ul>
    );
};