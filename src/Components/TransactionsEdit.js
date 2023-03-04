import { useState, useEffect } from "react";
import { useParams, Link , useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function TransactionEdit() {
  const navigate = useNavigate()
  let { index } = useParams();

  const [transaction, setTransaction] = useState({
        date: "",
        item_name:"",
        amount: "",
        from: "",
        category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setTransaction({ ...transaction, isFavorite: !transaction.isFavorite });
  };

  useEffect(() => {
    axios
    .get(`${API}/transactions/${index}`)
    .then((res) => setTransaction(res.data))
    .catch(err => console.log(err))
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
    .put(`${API}/transactions/${index}`, transaction)
    .then((res) => {
      setTransaction(res.data)
      navigate(`/transactions/${index}`)
    })
    .catch(err => console.log(err))


  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          pattern="date"
          type="date"
          onChange={handleTextChange}
          placeholder="yyyy-mm-dd"
          required
        />
        <label htmlFor="item_name">Item:</label>
        <input
          id="item_name"
          type="text"
          value={transaction.item_name}
          placeholder="income, savings, food, bills etc."
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          required
          value={transaction.amount}
          placeholder="50, 300, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="from">From:</label>
        <textarea
          id="from"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="employer, bank, store"
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          required
          value={transaction.category}
          placeholder="income, savings, food, rent"
          onChange={handleCheckboxChange}
        />   
        <br />

        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button className="remove">Remove it!</button>
      </Link>
    </div>
  );
}

export default TransactionEdit;