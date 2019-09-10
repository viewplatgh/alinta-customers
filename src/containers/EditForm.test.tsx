import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import EditForm from './EditForm';
import alintaReducer from '../reducers';

const store = createStore(alintaReducer);

describe('Test Header component', () => {
  it('renders without crashing', () => {
    const addform = shallow(
      <Provider store={store}>
        <EditForm />
      </Provider>
    );
    expect(addform).toMatchSnapshot();
  });
});
