import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const newRepair = {
    name: '',
    description: '',
    repair_time: '',
    repair_price: 0
}

export default class CreateRepairForm extends React.Component {
    state = {
        newRepair: {...newRepair}
    }

    handleChanges = (event) => {
        const newValue = event.target.value
        const field = event.target.name

        const newState = {...this.state}
        newState.newRepair[field] = newValue

        this.setState(newState)
    }

    formSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/v1/repairs', this.state.newRepair)
          .then(() => {
              this.setState({ redirect: true })
          })
    }

    render() {
        return (
            <div>
                <h1>Add a repair</h1>
                <form>
                {this.state.redirect === true ? <Redirect to='/' /> : null}
                    <div>
                        <input
                          type="text"
                          name="name"
                          value={this.state.newRepair.name}
                          onChange={this.handleChanges}
                          placeholder="What part"/>
                    </div>
                    <div>
                        <input
                          type="text"
                          name="description"
                          value={this.state.newRepair.description}
                          placeholder="info about part."/>
                    </div>
                    <div>
                        <input
                          type="text"
                          name="repair_time"
                          value={this.state.newRepair.repair_time}
                          placeholder="how long"/>
                    </div>
                    <div>
                        <input
                          type="DecimalField"
                          name="repair_price"
                          value={this.state.newRepair.repair_price}
                          placeholder="cost?"/>
                    </div>
                </form>
            </div>
        )
    }
}
