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
                             <div>Name: {order.order_name},</div>
                             <div>Drop off: {order.pick_date},</div>
                             <div>Bicycle: {order.bicycle},</div>
                             <div>Special request: {order.special_request}</div>
                         </div>
                     )
                 })}
                 </div>
             </div>
         )
     }
 }