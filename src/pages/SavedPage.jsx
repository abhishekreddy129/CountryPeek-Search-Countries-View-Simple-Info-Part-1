import { useNavigate } from "react-router-dom";

function SavedPage({ saved, dispatch }) {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Saved Items</h2>

            {saved.length === 0 && <p>No saved items</p>}

            {saved.map((item) => (
                <div key={item.code}>
                    <p>{item.product_name}</p>

                    <button onClick={() => navigate(`/product/${item.code}`)}>
                        View
                    </button>

                    <button
                        onClick={() =>
                            dispatch({ type: "REMOVE", code: item.code })
                        }
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
}

export default SavedPage;