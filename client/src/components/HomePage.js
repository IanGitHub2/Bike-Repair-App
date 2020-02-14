import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import OrderList from './OrderList'
import './Home.css'

export default class HomePage extends React.Component {
    state = {
        orderList: [
            {
                pick_date: '',
                order_name: '',
                phone_number: '',
                email: '',
                special_request: '',
                repair: null,
                bicycle: null
            }
        ]
    }

    componentDidMount(){
        axios.get('/api/v1/order/')
        .then((res) => {
            this.setState({ orderList: res.data })
        })
    }

    render(){
        return(
            <div>
                <div>
                    <img src="client/src/bicycle-background-home.jpeg" alt="bicycle"/>
                    <h1 class="home-header1">Place and order</h1>
                    <Link to={`/create-order`}>
                        <button class="home-create-button">Place Order</button>
                    </Link>
                </div>
                <div>
                    <OrderList orderList={this.state.orderList}/>
                </div>
            </div>
        )
    }
}