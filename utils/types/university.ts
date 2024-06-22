export interface University {
  id: number;
  name: string;
  state: string;
  type: string;
}

export interface Universities {
  universities: [];
  count: number;
  page: number;
  limit: number;
}

export enum UniversityTypes {
  private = "Private",
  public = "Public",
}
