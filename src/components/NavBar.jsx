import { Link } from "react-router-dom";

function NavBar({ count }) {
    return (
        <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
            <Link to="/">Home</Link>
            <Link to="/saved">Saved ({count})</Link>
        </nav>
    );
}

export default NavBar;