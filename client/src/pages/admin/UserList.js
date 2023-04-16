import { Table } from "flowbite-react";
import React from "react";

const Userlist = () => {
  return (
    <div className="m-20">
      <Table>
        <Table.Head>
           <Table.HeadCell> userid </Table.HeadCell>
           <Table.HeadCell> firstname </Table.HeadCell>
           <Table.HeadCell> lastname </Table.HeadCell>
           <Table.HeadCell> email </Table.HeadCell>
           <Table.HeadCell> phoneno </Table.HeadCell>
           <Table.HeadCell> streetname </Table.HeadCell>
           <Table.HeadCell> city </Table.HeadCell>
           <Table.HeadCell> state </Table.HeadCell>
           <Table.HeadCell> pincode </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>userid </Table.Cell>
            <Table.Cell>firstname </Table.Cell>
            <Table.Cell>lastname </Table.Cell>
            <Table.Cell>email</Table.Cell>
            <Table.Cell>phoneno </Table.Cell>
            <Table.Cell>streetname </Table.Cell>
            <Table.Cell>city</Table.Cell>
            <Table.Cell>state </Table.Cell>
            <Table.Cell>pincode </Table.Cell>
          </Table.Row>
          // loop rows
        </Table.Body>
      </Table>
    </div>
  );
};

export default Userlist;
