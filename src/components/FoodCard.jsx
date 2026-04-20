function FoodCard({ product }) {
    if (!product) return null; // 👈 safety check

    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px",
                borderRadius: "10px",
                width: "200px",
            }}
        >
            <h3>{product.product_name || "No Name"}</h3>
            <p>{product.brands || "Unknown Brand"}</p>

            <img
                src={product.image_small_url || "https://via.placeholder.com/100"}
                alt={product.product_name || "food"}
                style={{ width: "100px" }}
            />

            <p>
                Calories: {product.nutriments?.["energy-kcal_100g"] ?? "N/A"}
            </p>
            <p>
                Protein: {product.nutriments?.proteins_100g ?? "N/A"}
            </p>
            <p>
                Carbs: {product.nutriments?.carbohydrates_100g ?? "N/A"}
            </p>
            <p>
                Fat: {product.nutriments?.fat_100g ?? "N/A"}
            </p>
        </div>
    );
}

export default FoodCard;