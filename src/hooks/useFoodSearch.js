import { useState } from "react";
import axios from "axios";

function useFoodSearch() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchFood = async (query) => {
        try {
            setLoading(true);

            const res = await axios.get(
                "https://world.openfoodfacts.org/cgi/search.pl",
                {
                    params: {
                        search_terms: query,
                        search_simple: 1,
                        action: "process",
                        json: 1,
                    },
                }
            );

            console.log(res.data); // 👈 DEBUG

            const products = res.data.products || [];

            const filtered = products.filter(
                (p) => p.product_name && p.product_name.trim() !== ""
            );

            setResults(filtered);
        } catch (error) {
            console.error("Error:", error);
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    return { results, loading, searchFood };
}

export default useFoodSearch;