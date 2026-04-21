import { useState } from "react";
import useFoodSearch from "../hooks/useFoodSearch";
import FoodCard from "../components/FoodCard";

function HomePage() {
    const [query, setQuery] = useState("");
    const { results, searchFood } = useFoodSearch();

    const handleSearch = () => {
        searchFood(query);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>FoodFacts</h1>

            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search food"
                style={{ padding: "8px", width: "200px" }}
            />

            <button onClick={handleSearch} style={{ padding: "8px" }}>
                Search
            </button>

            {/* GRID */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: "20px"
                }}
            >
                {results.map((item, index) => (
                    <FoodCard key={index} product={item} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;