import { useState, useEffect } from "react";

const useFetch = ({ apiUrl }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setData(data);
            } catch(err) {
                console.log(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [apiUrl]);

    return { data, error, loading };
}

export default useFetch;