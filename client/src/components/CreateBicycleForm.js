import React from 'react'
import axios from 'axios'
// import {Redirect} from 'react-router-dom'

export default class CreateBicycleForm extends React.Component {
    state = {
       newBicycle: {
        name: '',
        image_url: '',
        repair_time: '',
        repair_price: 0
       }
    }

    handleChanges = (event) => {
        const newValue = event.target.value
        const field = event.target.name

        const newState = {...this.state}
        newState.newBicycle[field] = newValue

        this.setState(newState)
    }

    formSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/v1/bicycle/', this.state.newBicycle)
    }

    render(){
        return(
            <div>
                <h1>Add new bicycle</h1>
                <form onSubmit={this.formSubmit}>
                {/* {this.state.redirect === true ? <Redirect to='/'/> : null} */}
                    <div>
                        <input
                          type="text"
                          name="name"
                          value={this.state.newBicycle.name}
                          onChange={this.handleChanges}
                          placeholder="name of bike"/>
                    </div>
                    <div>
                        <input
                          type="text"
                          name="image_url"
                          value={this.state.newBicycle.image_url}
                          onChange={this.handleChanges}
                          placeholder="image of bike"/>
                    </div>
                    <div>
                        <input
                          type="text"
                          name="repair_time"
                          value={this.state.newBicycle.repair_time}
                          onChange={this.handleChanges}
                          placeholder="how long will it take ?"/>
                    </div>
                    <div>
                        <input
                          type="text"
                          name="repair_price"
                          value={this.state.newBicycle.repair_price}
                          onChange={this.handleChanges}
                          placeholder="price ?"/>
                    </div>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}