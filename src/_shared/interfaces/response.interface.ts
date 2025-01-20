export interface IBaseResponse<Data> {
  data: Data;
  status: number;
  success: boolean;
  messages: string[];
}
