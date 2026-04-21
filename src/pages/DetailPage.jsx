import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailPage({ saved, dispatch }) {
    const { barcode } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
            .then((res) => res.json())
            .then((data) => setProduct(data.product));
    }, [barcode]);

    if (!product) return <p>Loading...</p>;

    const isSaved = saved.find((item) => item.code === product.code);

    return (
        <div>
            <h2>{product.product_name}</h2>
            <p>{product.brands}</p>

            <button
                onClick={() =>
                    isSaved
                        ? dispatch({ type: "REMOVE", code: product.code })
                        : dispatch({ type: "ADD", product })
                }
            >
                {isSaved ? "Remove" : "Save"}
            </button>
        </div>
    );
}

export default DetailPage;