import { Link } from "react-router-dom";


export default function NavBar() {

  return (
    <nav>
      <h1 className="test">
        <Link to="/">Home Page-</Link>
      </h1>
      <div className="bothnav-btn">
        <button className="nav-btn">
        <Link to="/transactions">All Transaction</Link>
      </button>
      <button className="nav-btn">
        <Link to="/transactions/new">Add New</Link>
      </button>
      </div>
          </nav>
  );
}