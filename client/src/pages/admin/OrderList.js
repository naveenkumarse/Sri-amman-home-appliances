import { Table } from "flowbite-react";
import React from "react";

const Orderlist = () => {
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>uid</Table.Cell>
            <Table.Cell>pid</Table.Cell>
            <Table.Cell>name</Table.Cell>
            <Table.Cell>description</Table.Cell>
            <Table.Cell>price</Table.Cell>
            <Table.Cell>placeorder</Table.Cell>
          </Table.Row>
          // loop rows
        </Table.Body>
      </Table>
    </div>
  );
};

export default Orderlist;
