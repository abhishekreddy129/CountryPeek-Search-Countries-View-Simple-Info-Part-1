function SavedPage({ saved }) {
    return (
        <div>
            <h2>Saved Items</h2>

            {saved.length === 0 && <p>No saved items</p>}

            {saved.map((item) => (
                <div key={item.code}>
                    <h3>{item.product_name}</h3>
                    <p>{item.brands}</p>
                </div>
            ))}
        </div>
    );
}

export default SavedPage;