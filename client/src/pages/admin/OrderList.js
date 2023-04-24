import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { getAllOrders } from "../../api";

const Orderlist = () => {
  const [allOrders,setAllOrders ] = useState([]);
  useEffect(()=>{
      getAllOrders(setAllOrders)
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
              return <OrderItem key={r._id} uid ={r.uid} date={r.date} rid={r._id} total={r.total} />
          })}
          
        </Table.Body>
      </Table>
    </div>
  );
};

export default Orderlist;
