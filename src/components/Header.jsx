import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav">
      <div className="container">
        <Link to="/" className="brand">
          User Management
        </Link>
      </div>
    </nav>
  );
}
