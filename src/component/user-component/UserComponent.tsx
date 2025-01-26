import {FC, memo} from "react";

//функція memo кешує компонент який не змінюється для уникнення його рирендиренгу
export const UserComponent: FC<{ foo: () => void, arr: number[] }> =
    memo(({arr}) => {
        console.log('user');
        console.log(arr);

    return (
        <div>
            user
        </div>
    );
});