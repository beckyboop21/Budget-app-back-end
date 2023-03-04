import React from "react";
import TransactionsNewForm from "../Components/TransactionsNewForm";

function New() {
  return (
    <div className="New-pg">
      <div>
        <img
          className="new-logo"
          src="https://media2.giphy.com/media/l4JyM8m739ujkElJC/giphy.gif"
          width={200}
          alt=""
        />
      </div>
      <div>
        <h2>Add New Transaction</h2>
        <TransactionsNewForm />
      </div>
    </div>
  );
}

export default New;
