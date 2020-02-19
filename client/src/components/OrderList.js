 import React from 'react'
 import './OrderList.css'

 export default class OrderList extends React.Component {

     render(){
         return(
             <div>
                <div class="order-housing">
                 {this.props.orderList.map((order, i) => {
                     return(
                         <div class="order-name-date">
                             <div><em><strong>Name:</strong></em> {order.order_name}</div>
                             <div><em><strong>Drop off:</strong></em> {order.pick_date}</div>
                             <div><em><strong>Bicycle:</strong></em> {order.bicycle}</div>
                             <div><em><strong>Special request:</strong></em> {order.special_request}</div>
                         </div>
                     )
                 })}
                 </div>
             </div>
         )
     }
 }