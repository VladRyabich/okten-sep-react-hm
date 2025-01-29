const baseUrl = import.meta.env.VITE_API_URL;

export const getAll = async <T>(endpoint: string) => {
    const responseResult = await fetch(`${baseUrl}${endpoint}`)
        .then((response: Response) => response.json());
    return responseResult as T;
};