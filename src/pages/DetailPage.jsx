import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DetailPage({ saved, dispatch }) {
    const { barcode } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
            );
            setProduct(res.data.product);
        };

        fetchData();
    }, [barcode]);

    if (!product) return <p>Loading...</p>;

    const isSaved = saved.some((p) => p.code === barcode);

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>

            <h2>{product.product_name}</h2>

            <button
                onClick={() =>
                    dispatch({
                        type: isSaved ? "REMOVE" : "ADD",
                        product: product,
                        code: barcode,
                    })
                }
            >
                {isSaved ? "Remove" : "Save"}
            </button>
        </div>
    );
}

export default DetailPage;