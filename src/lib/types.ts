export interface ApiResponse<T> {
  message: string;
  data: T;
}

interface BaseModel {
  _id: string;
}

export interface User extends BaseModel {
  fullname: string;
  password: string;
}
