import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import MyOrdersList from "./MyOrdersList";
import { getAllOrders, listAllMyOrder, listMyOrder } from "../../api";

const MyOrders = () => {
    const [myorders,setMyOrder] = useState([])
    const uid = localStorage.getItem("uid")
    // alert(uid)
    const body = {uid};
    useEffect(()=>{
      getAllOrders(setMyOrder);
    },[])
    return (
        <>
        <div className="m-20">
      <Table>
        <Table.Head>
          <Table.HeadCell>Order-Id</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
         
        </Table.Head>
        <Table.Body className="divide-y">
          {myorders.map((r)=>{
              return <MyOrdersList key={r._id} rid={r._id} total={r.total} date={r.date} />
          })}
          
        </Table.Body>
      </Table>
    </div>
          
        </>
    )
}



export default MyOrders;
