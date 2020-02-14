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
                <div id="home-wrapper">
                    <div>
                        <img src="https://images.unsplash.com/photo-1556316384-12c35d30afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="bicycle" class="image-home-banner" />
                        <h1 class="home-header1">Place and order</h1>
                    </div>
                </div>
                <div>
                    <Link to={`/create-order`}>
                        <button class="home-create-button">Place Order</button>
                    </Link>
                </div>
                <div class="oder-list">
                    <OrderList orderList={this.state.orderList}/>
                </div>
            </div>
        )
    }
}