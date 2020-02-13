import React from 'react'
import axios from 'axios'
// import {Redirect} from 'react-router-dom'


export default class CreateRepairForm extends React.Component {
    state = {
        newRepair: {
        name: '',
        description: '',
        repair_time: '',
        repair_price: 0
        }
    }

    componentDidMount(){
        console.log('CreateRepairForm mounted')
    }

    handleChanges = (event) => {
        const newValue = event.target.value
        const field = event.target.name

        const newState = {...this.state}
        newState.newRepair[field] = newValue

        this.setState(newState)
    }

    formSubmit = (event) => {
        console.log('onForm submit')
        event.preventDefault()
        axios.post('/api/v1/repairs/', this.state.newRepair)
    
    }

    render() {
        return (
            <div>
                <h1>Add a repair</h1>
                <form onSubmit={this.formSubmit}>
                {/* {this.state.redirect === true ? <Redirect to='/' /> : null} */}
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
                          onChange={this.handleChanges}
                          placeholder="info about part."/>
                    </div>
                    <div>
                        <input
                          type="text"
                          name="repair_time"
                          value={this.state.newRepair.repair_time}
                          onChange={this.handleChanges}
                          placeholder="how long"/>
                    </div>
                    <div>
                        <input
                          type="DecimalField"
                          name="repair_price"
                          value={this.state.newRepair.repair_price}
                          onChange={this.handleChanges}
                          placeholder="cost?"/>
                    </div>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}
