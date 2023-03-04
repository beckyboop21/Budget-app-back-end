import React from 'react';
import TransactionsEdit from '../Components/TransactionsEdit';

const Edit = () => {
    return (
        <div className="New-Edit">
        
      <div>
        <h2>Edit</h2>
        <TransactionsEdit />
      </div>
         <div>
        <img
          className="edit-logo"
          
          src=""
          alt="edit-logo"
          width={300}
        />
      </div>
      </div>
    );
};

export default Edit;