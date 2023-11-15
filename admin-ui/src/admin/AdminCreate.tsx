import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AdminCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Something" source="something" />
        <TextInput label="Username" source="username" />
        <TextInput label="Password" source="password" />
      </SimpleForm>
    </Create>
  );
};
