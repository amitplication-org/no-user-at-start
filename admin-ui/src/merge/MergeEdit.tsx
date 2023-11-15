import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MergeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Merge Id" source="mergeId" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
