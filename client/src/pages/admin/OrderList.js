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
          <Table.HeadCell>pid</Table.HeadCell>
          <Table.HeadCell>name</Table.HeadCell>
          <Table.HeadCell>description</Table.HeadCell>
          <Table.HeadCell>price</Table.HeadCell>
          <Table.HeadCell>placeorder</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allOrders.map((r)=>{
              return <OrderItem key={r._id} uid ={r.uid} pid={r.pid} name={r.name} description={r.description} price={r.price} placeorder={r.placeorder}/>
          })}
          
        </Table.Body>
      </Table>
    </div>
  );
};

export default Orderlist;
