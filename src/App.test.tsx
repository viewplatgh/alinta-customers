import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, MemoryRouter } from 'react-router-dom';
import alintaReducer from './reducers';
import { addCustomer } from './actions';
import App from './App';
import EditCustomer from './EditCustomer';

const store = createStore(alintaReducer);

describe('Test router App container', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Route exact path="/" component={App} />
          <Route path="/edit/:id" component={EditCustomer} />
        </MemoryRouter>
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Test router EditCustomer container', () => {
  beforeEach(() => {
    store.dispatch(
      addCustomer({
        id: 'zjckdsf',
        firstName: 'john',
        lastName: 'adam',
        dateOfBirth: new Date()
      })
    );
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/edit/zjckdsf']}>
          <Route exact path="/" component={App} />
          <Route path="/edit/:id" component={EditCustomer} />
        </MemoryRouter>
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
