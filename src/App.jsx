import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);

      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
        query
      )}&search_simple=1&action=process&json=1`;

      const res = await fetch(
        `https://corsproxy.io/?${encodeURIComponent(url)}`
      );

      const data = await res.json();

      const filtered = data.products.filter(
        (p) => p.product_name && p.product_name.trim() !== ""
      );

      setResults(filtered.slice(0, 1)); // 👈 only one result (optional)

    } catch (error) {
      console.error("Error fetching:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FoodFacts</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {!loading && results.length === 0 && (
        <p>Search for a food to see results</p>
      )}

      {!loading && results.length > 0 && (
        <FoodList products={results} />
      )}
    </div>
  );
}

export default App;