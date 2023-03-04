import { useEffect } from "react";

import Transaction from "./Transaction";
import axios from "axios";
const API = process.env.REACT_APP_API_URL


function Transactions({transactions, setTransactions}) {

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error(err));
  }, [setTransactions]);
  
  return (
    <div>
        <section>
        <table>
          
          <thead className="index-cart">
            <tr>
              <th><h2>Date:</h2></th>
              <th><h2>Item:</h2></th>
              <th><h2 className="amount">Amount:</h2></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Transactions