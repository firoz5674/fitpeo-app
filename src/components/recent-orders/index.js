

import React from 'react'
import { Table } from 'reactstrap'
import img from "../../assets/images/man.jpg"

const RecentOrders = () => {
  return (
    <div className='recent-orders'>
      <h2>Recent Orders</h2>
      <div className='table-wrap'>
        <Table hover>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                <div className='customer'>
                  <img src={img} className='img-fluid' alt="" />
                  Wade Warren
                </div>
              </td>
              <td>6575224</td>
              <td>$345.98</td>
              <td><div className='status'>Delivered</div></td>
            </tr>
            <tr>
              <td scope="row">
                <div className='customer'>
                  <img src={img} className='img-fluid' alt="" />
                  Jane Cooper
                </div>
              </td>
              <td>89632578</td>
              <td>$855.98</td>
              <td><div className='status cancel'>Delivered</div></td>
            </tr>
            <tr>
              <td scope="row">
                <div className='customer'>
                  <img src={img} className='img-fluid' alt="" />
                  Johny Day
                </div>
              </td>
              <td>359822</td>
              <td>$658.98</td>
              <td><div className='status'>Delivered</div></td>
            </tr>
            <tr>
              <td scope="row">
                <div className='customer'>
                  <img src={img} className='img-fluid' alt="" />
                  Wade Warren
                </div>
              </td>
              <td>6575224</td>
              <td>$345.98</td>
              <td><div className='status cancel'>Delivered</div></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default RecentOrders