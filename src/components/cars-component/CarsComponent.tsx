import {useEffect, useState} from "react";
import {getCars} from "../../services/api.service.ts";
import {ICar} from "../../models/ICar.ts";
import {CarComponent} from "../car-component/CarComponent.tsx";
import './carsComponent.css';

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getCars().then(cars => setCars(cars));
    }, []);

    return (
        <section className={'section-cars'}>
            {
                cars.map(car => <CarComponent key={car.id} car={car}/>)
            }
        </section>
    );
};