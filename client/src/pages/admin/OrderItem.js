import React from "react";
import { Table } from "flowbite-react";
const OrderItem = (props)=>{
    const {uid,date,total,rid} = props
    let orderstatus="Success";
    
    return(
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>{uid}</Table.Cell>
            <Table.Cell>{date}</Table.Cell>
            <Table.Cell>{total}</Table.Cell>
            <Table.Cell>{rid}</Table.Cell>
            <Table.Cell>{orderstatus}</Table.Cell>
          </Table.Row>
    )
}

export default OrderItem