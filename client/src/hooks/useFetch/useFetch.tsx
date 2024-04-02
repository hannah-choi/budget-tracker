import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
    const [data, setData] = useState<any | null>(null);
    const [isLoading, setisLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error("Response failed");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setisLoading(false);
                setError(null);
            })
            .catch((err) => {
                const error = err as Error;
                setisLoading(false);
                setError(error.message);
            });
        // return () => {
        //     second;
        // };
    }, [url]);

    console.log(data);

    return { data, isLoading, error };
};
