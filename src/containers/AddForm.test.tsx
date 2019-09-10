import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import AddForm from './AddForm';
import alintaReducer from '../reducers';

const store = createStore(alintaReducer);

describe('Test Header component', () => {
  it('renders without crashing', () => {
    const addform = shallow(
      <Provider store={store}>
        <AddForm />
      </Provider>
    );
    expect(addform).toMatchSnapshot();
  });
});
