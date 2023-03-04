import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <tr className="index-list">
      <td>
        <h3>{transaction.date}</h3>
        
      </td>
      <td>
          {transaction.item_name}
      </td>
      <td>
        <h3 className="index-amount"><Link to={`/tranactions/${index}`}>{transaction.amount}</Link></h3>
      </td>
    </tr>
  
  );
}

export default Transaction;