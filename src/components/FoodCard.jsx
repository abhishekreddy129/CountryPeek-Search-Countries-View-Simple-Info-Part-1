import { useNavigate } from "react-router-dom";

function FoodCard({ product }) {
    const navigate = useNavigate();

    return (
        <div
            style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
            onClick={() => navigate(`/product/${product.code}`)}
        >
            <h3>{product.product_name}</h3>
            <p>{product.brands}</p>
        </div>
    );
}

export default FoodCard;