import FoodCard from "./FoodCard";

function FoodList({ products }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {products.map((item) => (
                <FoodCard key={item.code} product={item} />
            ))}
        </div>
    );
}

export default FoodList;