const baseUrl = import.meta.env.VITE_BASE_URL;

export const getUsers = async () => {
    await fetch(`${baseUrl}/users`)
        .then(response => response.json());
};