import { useState } from "react";

function useFoodSearch() {
    const [results, setResults] = useState([]);

    const searchFood = async (query) => {
        if (!query) return;

        try {
            const res = await fetch(
                `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1`
            );

            const data = await res.json();
            setResults(data.products);
        } catch (error) {
            console.error(error);
        }
    };

    return { results, searchFood };
}

export default useFoodSearch;