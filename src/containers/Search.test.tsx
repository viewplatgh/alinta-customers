import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import Search from './Search';
import alintaReducer from '../reducers';

const store = createStore(alintaReducer);

describe('Test Header component', () => {
  it('renders without crashing', () => {
    const addform = shallow(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(addform).toMatchSnapshot();
  });
});
