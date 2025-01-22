import {ICar} from "../../models/ICar.ts";
import './carComponent.css';

interface CarComponentProps {
    car: ICar
}

export const CarComponent = ({car}: CarComponentProps) => {
    return (
        <div className={'car-block'}>
            <div className={'car-info'}><b>{car.id}</b></div>
            <div className={'car-info'}>{car.brand}</div>
            <div className={'car-info'}>{car.year} year</div>
            <div className={'car-info'}>$ {car.price} usd</div>
        </div>
    );
};