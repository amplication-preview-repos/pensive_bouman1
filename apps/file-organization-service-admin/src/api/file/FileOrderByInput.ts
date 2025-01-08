import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  mimeType?: SortOrder;
  name?: SortOrder;
  path?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
  uploadedBy?: SortOrder;
};
