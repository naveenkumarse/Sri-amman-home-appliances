import React from "react";
import { Table } from "flowbite-react";
const OrderItem = (props)=>{
    const {uid,pid,name,description,price,placeorder} = props
    let orderstatus;
    if(placeorder == true){
        orderstatus = "yes"
    }else{
        orderstatus = "No"
    }
    return(
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>{uid}</Table.Cell>
            <Table.Cell>{pid}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{description}</Table.Cell>
            <Table.Cell>{price}</Table.Cell>
            <Table.Cell>{orderstatus}</Table.Cell>
          </Table.Row>
    )
}

export default OrderItem