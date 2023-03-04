import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function TransactionDetail() {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setTransaction(res.data))
      .catch((err) => navigate("/not-found"));
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((res) => navigate("/transactions"))
      .catch((err) => console.log(err));
  };

  return (
    <article>
      <div className="details-pg">
        <div>
          <img
            className="detailpg-img"
            src="https://media2.giphy.com/media/l0HFkA6omUyjVYqw8/giphy.gif"
            width={600}
            alt="transaction detail"
          />
        </div>
        <div className="details-article">
          <h1>Item: {transaction.item_name}</h1>
          <h3>From: {transaction.from}</h3>
          <h3>Category: {transaction.category}</h3>
          <p>Date: {transaction.date}</p>
          <div className="showNavigation">
            <div>
              {" "}
              <Link to={`/transactions`}>
                <button>Back</button>
              </Link>
            </div>
            <div>
              {" "}
              <Link to={`/transactions/${index}/edit`}>
                <button>Edit</button>
              </Link>
            </div>
            <div>
              {" "}
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetail;

