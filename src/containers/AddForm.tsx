import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCustomer } from '../actions';
import { Customer } from '../types';
import { generateID } from '../utils';
import './Form.css';

interface PropsToPass {
  onAddCustomer: (customer: Customer) => void;
}

class AddForm extends Component<PropsToPass> {
  state = {
    customer: {
      id: generateID(),
      firstName: '',
      lastName: '',
      dateOfBirth: new Date()
    }
  };

  resetForm() {
    this.setState({
      customer: {
        id: generateID(),
        firstName: '',
        lastName: '',
        dateOfBirth: new Date()
      }
    });
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onAddCustomer(this.state.customer);
          this.resetForm();
        }}
      >
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="First Name"
              value={this.state.customer.firstName}
              onChange={e => {
                this.setState({
                  customer: {
                    ...this.state.customer,
                    firstName: e.target.value
                  }
                });
              }}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              value={this.state.customer.lastName}
              onChange={e => {
                this.setState({
                  customer: {
                    ...this.state.customer,
                    lastName: e.target.value
                  }
                });
              }}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Date of Birth</label>
          <div className="control">
            <input
              type="date"
              onChange={e => {
                this.setState({
                  customer: {
                    ...this.state.customer,
                    dateOfBirth: new Date(e.target.value)
                  }
                });
              }}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="button is-link" type="submit" value="Add" />
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddCustomer: (customer: Customer) => dispatch(addCustomer(customer))
  };
};

const ConnectedAddForm = connect<{}, PropsToPass>(
  null,
  mapDispatchToProps
)(AddForm);

export default ConnectedAddForm;
