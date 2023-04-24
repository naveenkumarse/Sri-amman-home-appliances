import React from "react";
import { Table } from "flowbite-react";
const MyOrdersList = (props) =>{
    const {key,total,date} = props;
    return(
        <>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{key}</Table.Cell>
                <Table.Cell>{date}</Table.Cell>
                <Table.Cell>{total}</Table.Cell>
              
            </Table.Row>
        </>
    )
}

export default MyOrdersList;