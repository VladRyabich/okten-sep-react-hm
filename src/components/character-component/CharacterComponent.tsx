import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";
import './CharacterComponent.css'

interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className='m-3 p-3 border-2 border-cyan-300 shadow-md'>
            <h2 className='ml-6 font-bold text-2xl text-center'>{item.name} {item.surname}</h2>
            <img src={item.photo} alt={item.name}/>
            <p className='mx-3'>{children}</p>
        </div>
    );
};