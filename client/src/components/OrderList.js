 import React from 'react'
//  import { Link } from 'react-router-dom'

 export default class OrderList extends React.Component {
     render(){
         return(
             <div>
                 {this.props.orderList.map((order, i) => {
                     return(
                         <div>
                             <div>{order.order_name}</div>
                         </div>
                     )
                 })}
             </div>
         )
     }
 }