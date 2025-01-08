import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FolderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="parentFolder" source="parentFolder" />
      </SimpleForm>
    </Create>
  );
};
