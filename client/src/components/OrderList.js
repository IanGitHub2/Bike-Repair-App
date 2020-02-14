 import React from 'react'
 import './OrderList.css'

 export default class OrderList extends React.Component {

     render(){
         return(
             <div>
                <div class="order-housing">
                 {this.props.orderList.map((order, i) => {
                     return(
                         <div>
                             <div class="order-name-date">{order.order_name}, {order.pick_date}</div>
                         </div>
                     )
                 })}
                 </div>
             </div>
         )
     }
 }