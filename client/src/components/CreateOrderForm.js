import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const newOrder = {
    pick_date: '',
    order_name: '',
    phone_number: '',
    email: '',
    special_request: '',
    repair: null,
    bicycle: null
}

export default class CreateOrderForm extends React.Component {
    state = {
        newOrder: {...newOrder}
    }

    handleChanges = (event) => {
        const newValue = event.target.value
        const field = event.target.name

        const newState = {...this.state}
        newState.newOrder[field] = newValue

        this.setState(newState)
    }

    formSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/v1/order/', this.state.newOrder)
          .then(() => {
              this.setState({ redirect: true })
          })
    }

    render(){
        return(
            <div>
                <h1>Fill out order form please</h1>
                <form>
                {this.state.redirect === true ? <Redirect to='/' /> : null}
                    <div>
                        <input
                          type="text"
                          name="pick_date"
                          value={this.state.newOrder.pick_date}
                          onChange={this.handleChanges}
                          placeholder="What day?"/>
                    </div>
                    <div>
                        <input
                          type="text"
                          name="order_name"
                          value={this.state.newOrder.order_name}
                          onChange={this.handleChanges}
                          placeholder="Place name of order"/>
                    </div>
                    <div>
                        <input
                          type="text"
                          name="phone_number"
                          value={this.state.newOrder.phone_number}
                          onChange={this.handleChanges}
                          placeholder="Phone Number ?"/>
                    </div>
                    <div>
                        <input
                          type="text"
                          name="email"
                          value={this.state.newOrder.email}
                          onChange={this.handleChanges}
                          placeholder="Email ?"/>
                    </div>
                    <div>
                        <input
                          type="text"
                          name="special_request"
                          value={this.state.newOrder.special_request}
                          onChange={this.handleChanges}
                          placeholder="Special Request ?"/>
                    </div>
                    <div>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <input type="submit" value="Order"/>
                </form>
            </div>
        )
    }
}