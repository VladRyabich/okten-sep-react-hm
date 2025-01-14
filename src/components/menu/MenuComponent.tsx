import {Link} from "react-router-dom";
import './menuComponent.css';

const MenuComponent = () => {
    return (
        <div>
            <ul className={'menu-list'}>
                <li className={'menu-item'}><Link to='/posts'>posts</Link></li>
                <li className={'menu-item'}><Link to='/users'>users</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default MenuComponent;