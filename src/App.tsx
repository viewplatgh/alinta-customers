import React from 'react';
import './App.css';

import Header from './components/Header';
import AddForm from './containers/AddForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="navbar">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="section">
        <div className="container">
          <AddForm />
        </div>
      </div>
    </div>
  );
};

export default App;
