import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FileWhereInput = {
  id?: StringFilter;
  mimeType?: StringNullableFilter;
  name?: StringNullableFilter;
  path?: StringNullableFilter;
  size?: IntNullableFilter;
  uploadedBy?: StringNullableFilter;
};
