import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentParams = Number(searchParams.get('page')||'1');

    return (
        <div className={'flex justify-center m-2'}>
            <button
                className={'border-2 bg-black text-white w-1/5 flex justify-center text-2xl p-2'}
                onClick={() => {
                if (currentParams > 1) {
                    setSearchParams({page: (--currentParams).toString()});
                }
            }}>Prev Page</button>
            <button
                className={'border-2 bg-black text-white w-1/5 flex justify-center text-2xl p-2'}
                onClick={() => {
                setSearchParams({page: (++currentParams).toString()})
            }}>Next page</button>
        </div>
    );
};