import React from "react";
import Transactions from "../Components/Transactions";
import { useEffect, useState } from "react";

function Index() {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);
  const [color, setColor] = useState("default");

  useEffect(() => {
    const calculatedTotal = transactions.reduce(
      (total, transaction) => parseInt(total) + parseInt(transaction.amount),
      0
    );
    setTotal(calculatedTotal);
  }, [transactions]);

  useEffect(() => {
    if (total > 999) {
      setColor("Yellow");
    } else if (total < 0) {
      setColor("red");
    } else {
      setColor("default");
    }
  }, [total]);

  return (
    <div className="index-pg">
      <div>
        <img
          className="indexpg-img"
          src="https://media.self.com/photos/5ac6969fcac68c6bfba4726d/master/pass/spend-less.gif"
          alt="indexpg-img"
          width={500}
        />
      </div>
        <div className="index-amn">
          {" "}
          <h1 className={color}>Account Balance: ${total}</h1>
          <Transactions transactions={transactions} setTransactions={setTransactions} />
        </div>
    </div>
  );
}

export default Index;