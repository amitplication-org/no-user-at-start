import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AdminShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Something" source="something" />
        <TextField label="Username" source="username" />
        <TextField label="Password" source="password" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
