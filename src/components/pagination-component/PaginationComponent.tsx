import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentParams = Number(searchParams.get('page')||'1');

    return (
        <div>
            <button onClick={() => {
                if (currentParams > 1) {
                    setSearchParams({page: (--currentParams).toString()});
                }
            }}>Prev Page</button>
            <button onClick={() => {
                setSearchParams({page: (++currentParams).toString()})
            }}>Next page</button>
        </div>
    );
};