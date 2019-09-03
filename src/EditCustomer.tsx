import React from 'react';
import './App.css';

import Header from './components/Header';
import EditForm from './containers/EditForm';

const EditCustomer: React.FC = (props: any) => {
  return (
    <div className="App">
      <div className="navbar">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="section">
        <div className="container">
          <EditForm
            customerID={props.match.params.id}
            history={props.history}
          />
        </div>
      </div>
    </div>
  );
};

export default EditCustomer;
