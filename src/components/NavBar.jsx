import { Link } from "react-router-dom";

function NavBar({ count }) {
    return (
        <div style={{
            padding: "15px",
            background: "#222",
            color: "#fff",
            textAlign: "center"
        }}>
            <Link to="/" style={{ color: "#fff", marginRight: "20px" }}>
                Home
            </Link>

            <Link to="/saved" style={{ color: "#fff" }}>
                Saved ({count})
            </Link>
        </div>
    );
}

export default NavBar;