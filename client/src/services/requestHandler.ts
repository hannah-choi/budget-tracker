export const requestHandler = async <T>(url: string, config?: RequestInit): Promise<T> => {
    try {
        const response = await fetch(url, config);
        if (!response.ok) {
            throw new Error("Something is wrong with the request");
        }

        return await response.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
};
