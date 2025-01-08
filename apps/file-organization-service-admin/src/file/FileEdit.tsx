import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="mimeType" source="mimeType" />
        <TextInput label="name" source="name" />
        <TextInput label="path" source="path" />
        <NumberInput step={1} label="size" source="size" />
        <TextInput label="uploadedBy" source="uploadedBy" />
      </SimpleForm>
    </Edit>
  );
};
