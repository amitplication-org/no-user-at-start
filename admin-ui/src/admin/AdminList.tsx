import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AdminList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Admins"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Something" source="something" />
        <TextField label="Username" source="username" />
        <TextField label="Password" source="password" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
