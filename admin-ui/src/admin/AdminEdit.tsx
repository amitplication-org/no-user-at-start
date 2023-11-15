import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AdminEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Something" source="something" />
        <TextInput label="Username" source="username" />
        <TextInput label="Password" source="password" />
      </SimpleForm>
    </Edit>
  );
};
