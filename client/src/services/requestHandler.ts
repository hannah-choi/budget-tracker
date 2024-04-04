export const requestHandler = async <T>(url: string, config: RequestInit = { method: "GET" }): Promise<T> => {
    try {
        const response = await fetch(url, {
            method: config?.method ?? "GET",
            headers: { "Content-Type": "application/json" },
            body: config?.body ?? null
        });

        if (!response.ok) {
            throw new Error("There was a problem with response");
        }
        return await response.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
};
