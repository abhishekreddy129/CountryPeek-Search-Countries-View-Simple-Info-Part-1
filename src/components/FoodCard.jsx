import { Link } from "react-router-dom";

function FoodCard({ product }) {
    return (
        <Link to={`/product/${product.code}`} style={{ textDecoration: "none" }}>
            <div style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "15px",
                margin: "15px",
                width: "250px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "0.3s",
                background: "#fff"
            }}>
                <img
                    src={product.image_small_url || "https://via.placeholder.com/150"}
                    alt="food"
                    style={{ width: "100%", borderRadius: "10px" }}
                />

                <h3 style={{ color: "#333", marginTop: "10px" }}>
                    {product.product_name || "No Name"}
                </h3>

                <p style={{ color: "#777" }}>
                    {product.brands || "Unknown Brand"}
                </p>
            </div>
        </Link>
    );
}

export default FoodCard;