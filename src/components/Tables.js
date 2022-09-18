import React from 'react'
import dp from '../Assets/dp.jpg'
import house1 from '../Assets/house1.jpg'
import house2 from '../Assets/house2.jpg'
import house3 from '../Assets/house3.jpg'
import house4 from '../Assets/house4.jpg'
import mail from '../Assets/mail.png'
export default function Tables() {
  return (
    <><br />
    <div className="mail"><a href="https://github.com/UmangNagar" target={'_blank'} rel={"noreferrer"}><img src={mail} alt="" className='mailId' />  </a> <a href='https://github.com/UmangNagar' target={"_blank"} rel={"noreferrer"}><img src={dp} alt="" className='mailId'/></a></div>
   
    <h5>Active Deposits <button className='btn-ele btn-sucess'>2</button> <button className='btn-add btn-sucess'>+</button></h5><br />
    <table >
  <tr className="f-row">
  <th>Property</th>
  <th>Move in date</th>
  <th>Rent</th>
  <th> Deposit</th>
  <th>Status</th>
  <th></th>
  </tr><br />
  <tr>
    <td><img src={house1} alt="" />771 Round</td>
    <td>25 feb 2020</td>
    <td>3000$</td>
    <td>2000$</td>
    <td>Bank Processing</td>
    <td> <div className='dot-pending'></div></td>
  </tr><br />
  <tr>
    <td><img src={house2} alt="" />1491 Jagged Arbor</td>
    <td>29 Mar 2020</td>
    <td>2900$</td>
    <td>2500$</td>
    <td>Payment Processed</td>
    <td> <div className='dot-complete'></div></td>
  </tr>
  
</table>

<button className='btn btn-primary'>All Active Deposits</button>

<h5>Closed Deposits <button className='btn-ele btn-sucess'>3</button></h5><br />

<table>
  <tr className="f-row">
  <th>Property</th>
  <th>Move in date</th>
  <th>Rent</th>
  <th>Deposit</th>
  <th>Status</th>
  <th></th>
  </tr><br />
  <tr>
    <td><img src={house3} alt="" />1894 Nobel capo</td>
    <td>3 feb 2020</td>
    <td>3500$</td>
    <td>3000$</td>
    <td>Bank Processing</td>
    <td> <div className='dot-processing'></div></td>
  </tr><br />
  <tr>
    <td><img src={house4} alt="" />1141 twenty maze</td>
    <td>12 Jan 2020</td>
    <td>4200$</td>
    <td>3500$</td>
    <td>Payment Expired</td>
    <td> <div className='dot-failed'></div></td>
  </tr>
  
</table>
<button className='btn btn-primary'>All Closed Deposits</button>

    </>
  )
}
