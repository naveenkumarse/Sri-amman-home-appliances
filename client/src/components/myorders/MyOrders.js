import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import MyOrdersList from "./MyOrdersList";
import { listAllMyOrder } from "../../api";

const MyOrders = () => {
    const [myorders,setMyOrder] = useState([])
    const uid = localStorage.getItem("uid")
    alert(uid)
    useEffect(()=>{
        listAllMyOrder(uid,setMyOrder);
    },[])
    return (
        <>
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
          {myorders.map((r)=>{
              return <MyOrdersList key={r._id} uid ={r.uid} pid={r.pid} name={r.name} description={r.description} price={r.price} placeorder={r.placeorder}/>
          })}
          
        </Table.Body>
      </Table>
    </div>
          
        </>
    )
}



export default MyOrders;
