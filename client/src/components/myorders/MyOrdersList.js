import React from "react";
import { Table } from "flowbite-react";
const MyOrdersList = () =>{
    return(
        <>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{}</Table.Cell>
                <Table.Cell>{}</Table.Cell>
                <Table.Cell>{}</Table.Cell>
                <Table.Cell>{}</Table.Cell>
                <Table.Cell>{}</Table.Cell>
                <Table.Cell>{}</Table.Cell>
            </Table.Row>
        </>
    )
}

export default MyOrdersList;