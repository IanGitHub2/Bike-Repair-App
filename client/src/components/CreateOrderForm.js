import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import './OrderForm.css'

const newOrder = {
  pick_date: "",
  order_name: "",
  phone_number: "",
  email: "",
  special_request: "",
  repair: null,
  bicycle: null
};

export default class CreateOrderForm extends React.Component {
  state = {
    repairOptions: [
      {
        name: ""
      }
    ],
    bicycleOptions: [
      {
        name: ""
      }
    ],
    newOrder: { ...newOrder }
  };
 
  handleChanges = event => {
    const newValue = event.target.value;
    const field = event.target.name;

    const newState = { ...this.state };
    newState.newOrder[field] = newValue;
    console.log('newState', newState)
    this.setState(newState);
  };

  formSubmit = event => {
    event.preventDefault();
    const copiedState = {...this.state.newOrder}
    copiedState.repair = [copiedState.repair]
    axios.post("/api/v1/order/", copiedState).then(() => {
      this.setState({ redirect: true });
    });
  };
  componentDidMount() {
    axios.get("/api/v1/repairs/").then(res => {
      this.setState({ repairOptions: res.data });
    });
    axios.get("/api/v1/bicycle/").then(res => {
        this.setState({ bicycleOptions: res.data });
      });
  }

  render() {
    return (
      <div>
        <h1 class="order-form-header">Fill out order form please</h1>
        <form onSubmit={this.formSubmit} id="form-housing">
          {this.state.redirect === true ? <Redirect to="/home-page" /> : null}
          <div id="form-input">
            <input
              type="text"
              name="pick_date"
              value={this.state.newOrder.pick_date}
              onChange={this.handleChanges}
              placeholder="What day?"
            />
          </div>
          <div id="form-input">
            <input
              type="text"
              name="order_name"
              value={this.state.newOrder.order_name}
              onChange={this.handleChanges}
              placeholder="Place name of order"
            />
          </div>
          <div id="form-input">
            <input
              type="text"
              name="phone_number"
              value={this.state.newOrder.phone_number}
              onChange={this.handleChanges}
              placeholder="Phone Number ?"
            />
          </div>
          <div id="form-input">
            <input
              type="text"
              name="email"
              value={this.state.newOrder.email}
              onChange={this.handleChanges}
              placeholder="Email ?"
            />
          </div>
          <div id="form-input">
            <input
              type="text"
              name="special_request"
              value={this.state.newOrder.special_request}
              onChange={this.handleChanges}
              placeholder="Special Request ?"
            />
          </div>
          <div id="form-input">
            <label>Repair</label>
            <select  value={this.state.repair} onChange={this.handleChanges} name="repair">
              {this.state.repairOptions.map((repair, i) => {
                return <option
                  name="repair"
                  value={repair.id} >{repair.name}</option>;
              })}
            </select>
          </div>
          <div id="form-input">
            <label>Bicycle</label>
              <select value={this.state.bicycle} onChange={this.handleChanges} name="bicycle">
                  {this.state.bicycleOptions.map((bike, i) => {
                      return <option
                        value={bike.id}>
                          {bike.name}
                        </option>
                  })}
              </select>
              {/* i'm guessing now i need to add on click that save the id to state */}
          </div>
          <input type="submit" value="Order" />
        </form>
      </div>
    );
  }
}
