import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { getAllOrders } from "../../api";

const Orderlist = () => {
  const [allOrders,setAllOrders ] = useState([]);
  const [startDate,setStartDate] = useState();
  const [endDate,setEndDate] = useState();

  useEffect(()=>{
      getAllOrders(setAllOrders)
      setStartDate(new Date("2023-4-24"));
      setEndDate(new Date("2023-4-24"));

      // const Orders = allOrders.map(order => {
      //   let dateArray = order.date.split('.');
      //   return {...order,Date:new Date(dateArray[2]+'-'+dateArray[1]+'-'+dateArray[0])}
      // })
      // setAllOrders(Orders)
      // console.log(Orders)
      console.log(allOrders)
  },[])

  return (
    <div className="m-20">
      <Table>
        <Table.Head>
          <Table.HeadCell>uid</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          
          <Table.HeadCell>Order-Id</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allOrders.map((r)=>{
            if(r.Date.getTime()>=startDate.getTime() && r.Date.getTime()<=endDate.getTime())
              return <OrderItem key={r._id} uid ={r.uid} date={r.date} rid={r._id} total={r.total} />
          })}
          
        </Table.Body>
      </Table>
    </div>
  );
};

export default Orderlist;
