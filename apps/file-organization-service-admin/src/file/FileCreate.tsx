import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="mimeType" source="mimeType" />
        <TextInput label="name" source="name" />
        <TextInput label="path" source="path" />
        <NumberInput step={1} label="size" source="size" />
        <TextInput label="uploadedBy" source="uploadedBy" />
      </SimpleForm>
    </Create>
  );
};
