import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCustomer } from '../actions';
import { State, Customer } from '../types';
import './Form.css';

interface StateProps {
  customers: Customer[];
}

interface DispatchProps {
  onEditCustomer: (customer: Customer) => void;
}

interface OwnProps {
  customerID: string;
  history: any;
}

type PropsToPass = StateProps & DispatchProps & OwnProps;

class EditForm extends Component<PropsToPass> {
  customerToEdit: Customer = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: new Date()
  };

  constructor(props: PropsToPass) {
    super(props);
    const customer = this.props.customers.find(
      item => item.id === this.props.customerID
    );
    if (!customer) {
      throw new Error('Cannot find the customer to edit');
    }

    this.customerToEdit.id = customer.id;
    this.customerToEdit.firstName = customer.firstName;
    this.customerToEdit.lastName = customer.lastName;
    this.customerToEdit.dateOfBirth = new Date(
      customer.dateOfBirth.toDateString()
    );
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();

          this.props.onEditCustomer(this.customerToEdit);
          this.props.history.push('/');
        }}
      >
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="First Name"
              required
              defaultValue={this.customerToEdit.firstName}
              onChange={e => {
                this.customerToEdit.firstName = e.target.value;
              }}
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
              required
              defaultValue={this.customerToEdit.lastName}
              onChange={e => {
                this.customerToEdit.lastName = e.target.value;
              }}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Date of Birth</label>
          <div className="control">
            <input
              type="date"
              defaultValue={
                this.customerToEdit.dateOfBirth.toISOString().split('T')[0]
              }
              onChange={e => {
                this.customerToEdit.dateOfBirth = new Date(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="button is-link" type="submit" value="Edit" />
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state: State): StateProps => {
  return {
    customers: state.customers
  };
};

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    onEditCustomer: (customer: Customer) => dispatch(editCustomer(customer))
  };
};

const ConnectedEditForm = connect<StateProps, DispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);

export default ConnectedEditForm;
