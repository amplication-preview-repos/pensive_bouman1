export type File = {
  createdAt: Date;
  id: string;
  mimeType: string | null;
  name: string | null;
  path: string | null;
  size: number | null;
  updatedAt: Date;
  uploadedBy: string | null;
};
