import {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.ts";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator.ts";
import './createCarComponent.css';
import {isValidElement} from "react";

export const CreateCarComponent = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<ICar>({
        mode: "all",
        resolver:joiResolver(carValidator)
    });

    const createHandler = (data: ICar) => {
        addCar(data);
    };
    return (
        <>
            <form onSubmit={handleSubmit(createHandler)}>
                <div className={'create-input-block'}>
                    <input type="text" {...register('brand')}/>
                    <div className={'create-input-error'}>{errors.brand?.message}</div>
                </div>
                <div className={'create-input-block'}>
                    <input type="number" {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div className={'create-input-block'}>
                    <input type="number" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>

                <button
                    disabled={!isValid}
                    className={'create-btn'}>Save car</button>
            </form>
        </>
    );
};