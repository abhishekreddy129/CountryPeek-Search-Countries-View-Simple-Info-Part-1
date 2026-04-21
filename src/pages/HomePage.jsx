import { useState } from "react";
import useFoodSearch from "../hooks/useFoodSearch";
import FoodCard from "../components/FoodCard";

function HomePage() {
    const [query, setQuery] = useState("");
    const { results, loading, searchFood } = useFoodSearch();

    const handleSubmit = (e) => {
        e.preventDefault();
        searchFood(query);
    };

    return (
        <div>
            <h1>FoodFacts</h1>

            <form onSubmit={handleSubmit}>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search food"
                />
                <button>Search</button>
            </form>

            {loading && <p>Loading...</p>}

            {results.map((item) => (
                <FoodCard key={item.code} product={item} />
            ))}
        </div>
    );
}

export default HomePage;